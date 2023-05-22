<template>
    <div v-if="Authstore.user">
        <ProfileEditable v-if="playerData" :player="playerData" />
        <MouseBanner v-if="settingsData && settingsData.mouse_settings" :settings="settingsData.mouse_settings"/>
        <StartUpSettingBanner v-if="settingsData" :settings="settingsData"/>
    </div>

    <div v-else class="warning">
        <h1>Для просмотра этой страницы нужно пройти авторизацию</h1>
    </div>
</template>
  
<script setup>
import ProfileEditable from '@/components/UserProfile/ProfileEditable.vue';
import MouseBanner from '@/components/UserProfile/MouseBanner.vue';
import StartUpSettingBanner from '@/components/UserProfile/StartUpSettingBanner.vue';
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase.js'
import { useAuthStore } from '@/store/auth.js';

const Authstore = useAuthStore();
const playerData = ref(null)
const settingsData = ref(null)
const isLoading = ref(false)

const loadUser = async () => {
  isLoading.value = true
  const suid = Authstore.token

  try {
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('steam_id, personaname, profileurl, avatarfull, about, team, settings_id')
      .eq('suid', suid)

    if (userError) {
      throw new Error(userError)
    }

    playerData.value = userData[0]
    const settingsId = userData[0].settings_id

    if (settingsId) {
      const { data: settingsDataResult, error: settingsError } = await supabase
        .from('settings')
        .select('id, launch_option, mouse_settings')
        .eq('id', settingsId)

      if (settingsError) {
        throw new Error(settingsError)
      }

      settingsData.value = settingsDataResult[0]
    }
  } catch (error) {
    console.error(error)
  }

  isLoading.value = false
}

onMounted(loadUser)
</script>
<style scoped>
.warning {
    display: flex;
    justify-content: center;
    padding: 100px;
}
</style>
