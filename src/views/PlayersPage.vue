<template>
    <div class="section">
        <div class="content">
            <h1 class="title">Игроки</h1>
            <div class="container">
                <div v-if="isLoading">
                    <p>LOADING LIST WITH UNIQUE STEAM_ID</p>
                </div>
                <PlayerCard v-else v-for="player in playersList" :player="player" :key="player.steam_id" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PlayerCard from "@/components/PlayerCard.vue"
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase.js'
import { useAuthStore } from '@/store/auth.js';

const AuthStore = useAuthStore();
const playersList = ref([])
const isLoading = ref(false)

const loadUsers = async () => {
    isLoading.value = true
    supabase
        .from('users')
        .select('steam_id, personaname, avatarfull, profileurl')
        .then(({ data, error }) => {
            if (error) {
                console.error(error)
            } else {
                playersList.value = data
            }
        })
        .catch(error => console.error(error))
        .finally(isLoading.value = false)
}

AuthStore.handleLoginCallback()

onMounted(() => {
    loadUsers()
})
// request to playersList
</script>

<style scoped>
.section {
    background: conic-gradient(from -66.6deg at 100% 0%, #414042 0deg, #060515 360deg);
}
.content {
    padding: 60px 0;
    max-width: 1540px;
    margin: 0 auto;
}

.title {
    font-size: 40px;
    padding-bottom: 60px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1540px;
    margin: 0 auto;
}
</style>