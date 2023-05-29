<template>
  <div class="edit-content">
    <form @submit.prevent="saveProfile" class="edit">
      <label class="name">Команда:</label>
      <input v-model="team" type="text" class="field">
      <label class="name">Описание:</label>
      <textarea v-model="about" class="field-text"></textarea>
      <label class="name">Параметры запуска:</label>
      <input v-model="launchOption" type="text" class="field">
      <label class="name">Настройки мыши:</label>
      <textarea v-model="mouseSettings" class="field-json"></textarea>
      <div class="button">
        <button type="submit" class="btn-save">Сохранить профиль</button>
      </div>
    </form>
    <UploadFiles />
  </div>
</template>

<script setup>
import UploadFiles from '@/components/UserProfile/ForEditComp/UploadFiles.vue'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase.js'
import { useAuthStore } from '@/store/auth.js';

const router = useRouter()
const Authstore = useAuthStore()
const about = ref('')
const team = ref('')
const launchOption = ref('')
const mouseSettings = ref('')

onMounted(async () => {
  const suid = Authstore.token
  const { data, error } = await supabase
    .from('users')
    .select('about, team, settings_id')
    .eq('suid', suid)
    .single()

  if (error) {
    console.error(error)
  } else {
    about.value = data.about
    team.value = data.team
  }

  const settingsId = data.settings_id;

  const { data: settingsData, error: settingsError } = await supabase
    .from('settings')
    .select('launch_option, mouse_settings')
    .eq('id', settingsId)

  if (settingsError) {
    console.error(settingsError)
  } else {
    launchOption.value = settingsData[0].launch_option
    mouseSettings.value = JSON.stringify(settingsData[0].mouse_settings, null, 2)
  }
})

const saveProfile = async () => {
  const suid = Authstore.token
  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('settings_id')
    .eq('suid', suid)
    .single()
  if (userError) {
    return
  }
  const settingsId = userData.settings_id;

  const { error: userUpdateError } = await supabase
    .from('users')
    .update({
      about: about.value,
      team: team.value,
    })
    .eq('suid', suid)

  if (userUpdateError) {
    console.error(userUpdateError);
  }

  const { error: settingsUpdateError } = await supabase
    .from('settings')
    .update({
      launch_option: launchOption.value,
      mouse_settings: JSON.parse(mouseSettings.value)
    })
    .eq('id', settingsId)

  if (settingsUpdateError) {
    console.error(settingsUpdateError);
  } else {
    console.log('Profile saved!');
    router.push('/profile');
  }
}
</script>

<style scoped>

.edit-content {
  display: flex;
}

.edit {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.field {
  background-color: #0000007b;
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
  color: #666666;
  padding: 12px 15px;
  font-family: 'Montserrat', sans-serif;
  white-space: break-spaces;
  display: block;
  margin: 0;
  border: none;
  margin-top: 5px;
  margin-bottom: 5px;
}

.field:focus {
  color: #fff;
}

.field-json:focus {
  color: #fff;
}

.field-text {
  background-color: #0000007b;
  width: 450px;
  height: 90px;
  border-radius: 5px;
  font-size: 16px;
  color: #666666;
  padding: 12px 15px;
  font-family: 'Montserrat', sans-serif;
  white-space: break-spaces;
  margin-top: 5px;
  margin-bottom: 5px;
  resize: none;
}

.field-text:focus {
  color: #fff;
}

.field-json {
  background-color: #0000007b;
  width: 450px;
  height: 200px;
  border-radius: 5px;
  font-size: 16px;
  color: #666666;
  padding: 12px 15px;
  font-family: 'Montserrat', sans-serif;
  white-space: break-spaces;
  margin-top: 5px;
  margin-bottom: 5px;
  resize: none;
}

.btn-save {
  font-size: 20px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  padding: 3px 20px;
  background-color: transparent;
  border: 1px solid #666666;
  border-radius: 5px;
  margin-top: 15px;
  transition: 0.2s;
}

.btn-save:hover {
  transform: scale(1.1);
}
</style>
