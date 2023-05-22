<template>
  <div>
    <div v-if="isLoading">
      <p>LOADING PROFILE</p>
    </div>
    <ProfileBanner v-if="playerData" :player="playerData" />
    <MouseBanner v-if="settingsData && settingsData.mouse_settings" :settings="settingsData.mouse_settings"/>
    <StartUpSettingBanner v-if="settingsData" :settings="settingsData"/>
  </div>
</template>
<script setup>
import ProfileBanner from '@/components/UserProfile/ProfileBanner.vue';
import MouseBanner from '@/components/UserProfile/MouseBanner.vue';
import StartUpSettingBanner from '@/components/UserProfile/StartUpSettingBanner.vue';
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase.js'
import { useRoute } from 'vue-router'

const playerData = ref(null)
const settingsData = ref(null)
const isLoading = ref(false)

const loadUser = async () => {
  isLoading.value = true
  const steam_id = useRoute().params.steam_id

  try {
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('steam_id, personaname, profileurl, avatarfull, about, team, settings_id')
      .eq('steam_id', steam_id)

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
<style></style>
