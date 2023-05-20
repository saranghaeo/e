<template>
    <div v-if="Authstore.user">
        <ProfileEditable v-if="playerData" :player="playerData" />
    </div>

    <div v-else class="warning">
        <h1>Для просмотра этой страницы нужно пройти авторизацию</h1>
    </div>
</template>
  
<script setup>
import ProfileEditable from '@/components/UserProfile/ProfileEditable.vue';
import { useAuthStore } from '@/store/auth.js';
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase.js'

const playerData = ref(null)
const Authstore = useAuthStore();

const loadProfile = async () => {
    const suid = Authstore.token
    const { data, error } = await supabase
        .from('users')
        .select('steam_id, personaname, avatarfull, profileurl, about, team')
        .eq('suid', suid)

    if (error) {
        console.error(error)
    } else {
        playerData.value = data[0]
    }
}

// const loadProfile = async () => {
//     const steam_id = useRoute().params.steam_id
//     supabase
//         .from('users')
//         .select('steam_id, personaname, avatarfull, profileurl, about, team')
//         .eq('steam_id', steam_id)
//         .then(({ data, error }) => {
//             if (error) {
//                 console.error(error)
//             } else {
//                 playerData.value = data
//             }
//         })
//         .catch(error => console.error(error))
// }
onMounted(() => {
    loadProfile()
})
</script>
<style scoped>
.warning {
    display: flex;
    justify-content: center;
    padding: 100px;
}
</style>
