<template>
    <div class="content">
        <h1 class="title">Игроки</h1>
        <div class="container">
            <div v-if="isLoading">
                <p>LOADING LIST WITH UNIQUE STEAM_ID</p>
            </div>
            <PlayerCard v-else v-for="player in playersList" :player="player" :key="player.steam_id" />
        </div>
    </div>
</template>

<script setup>
import PlayerCard from "@/components/PlayerCard.vue"
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://eqtgcskjmwukbdbzmzgf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdGdjc2tqbXd1a2JkYnptemdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NzUyNTIsImV4cCI6MTk5OTU1MTI1Mn0.CfbPB8I0XFIsvbVL18u7aI68ExOMrBC_f7MdqYcIM7s'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const playersList = ref([])
const isLoading = ref(false)

// const loadUsers = async () => {
//   const { data, error } = await supabase
//     .from('users')
//     .select('id, steam_id, personaname, avatarfull, profileurl')

//   if (error) {
//     console.error(error)
//   } else {
//     playersList.value = data
//   }
// }

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


onMounted(() => {
    loadUsers()
})
// request to playersList
</script>

<style scoped>
.content {
    padding: 60px 120px
}

.title {
    font-size: 40px;
    padding-bottom: 60px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1620px;
}
</style>