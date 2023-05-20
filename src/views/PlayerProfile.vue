<template>
  <div>
    <div v-if="isLoading">
      <p>LOADING PROFILE</p>
    </div>
    <ProfileBanner v-if="playerData" :player="playerData" />
  </div>
</template>
<script setup>
import ProfileBanner from '@/components/UserProfile/ProfileBanner.vue';
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase.js'
import { useRoute } from 'vue-router'

const playerData = ref(null)
const isLoading = ref(false)

const loadUser = async () => {
  isLoading.value = true
  const steam_id = useRoute().params.steam_id
  const { data, error } = await supabase
    .from('users')
    .select('steam_id, personaname, avatarfull, profileurl, about, team')
    .eq('steam_id', steam_id)

  if (error) {
    console.error(error)
  } else {
    playerData.value = data[0]
  }

  isLoading.value = false
}

onMounted(() => {
  loadUser()
})

</script>
<style></style>
