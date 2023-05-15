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
import { createClient } from '@supabase/supabase-js'
import { useRoute } from 'vue-router'

const supabaseUrl = 'https://eqtgcskjmwukbdbzmzgf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdGdjc2tqbXd1a2JkYnptemdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NzUyNTIsImV4cCI6MTk5OTU1MTI1Mn0.CfbPB8I0XFIsvbVL18u7aI68ExOMrBC_f7MdqYcIM7s'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
