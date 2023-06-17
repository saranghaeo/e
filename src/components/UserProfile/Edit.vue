<template>
  <div class="edit-content">
    <form @submit.prevent="saveProfile" class="edit">
      <label class="name">Команда:</label>
      <input v-model="team" type="text" class="field">
      <label class="name">Описание:</label>
      <textarea v-model="about" class="field-text"></textarea>
      <label class="name">Параметры запуска:</label>
      <input v-model="launchOption" type="text" class="field">
      <label class="name">Код прицела:</label>
      <input v-model="crosshairCode" type="text" class="field">
      <label class="name">Настройки мыши:</label>
      <div v-for="setting in mouseSettings" :key="setting.key" class="json-container">
        <label class="sub-name">{{ setting.label }}</label>
        <input v-model.number="setting.value" :type="setting.type" class="json-input" :placeholder="setting.placeholder" :step="setting.step">
      </div>
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
const crosshairCode = ref('')
const mouseSettings = ref([
  { key: 'DPI', label: 'DPI', value: '', type: 'number', placeholder: 'например 400, 800 ...', step: 50 },
  { key: 'Sensitivity', label: 'Чувствительность', value: '', type: 'number', placeholder: 'например 1, 2.5 ...', min: 0, step: 0.01 },
  { key: 'Zoom Sensitivity', label: 'Чувствительность в прицеле', value: '', type: 'number', placeholder: 'например 1, 1.1 ...', min: 0, step: 0.01 },
  { key: 'Hz', label: 'Hz', value: '', type: 'number', placeholder: 'например 500, 1000 ...', step: 100 },
  { key: 'Windows Sensitivity', label: 'Чувствительность в Windows', value: '', type: 'text', placeholder: 'например 6/11, 7/11 ...' },
  { key: 'Raw Input', label: 'Прямой ввод мыши', value: '', type: 'number', placeholder: 'введите 0 или 1', min: 0, max: 1, step: 1 },
  { key: 'Mouse Acceleration', label: 'Акселерация', value: '', type: 'number', placeholder: 'введите 0 или 1', min: 0, max: 1, step: 1 },
])

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
    .select('launch_option, mouse_settings, crosshair_code')
    .eq('id', settingsId)

  if (settingsError) {
    console.error(settingsError)
  } else {
    launchOption.value = settingsData[0].launch_option
    crosshairCode.value = settingsData[0].crosshair_code
    const parsedMouseSettings = settingsData[0].mouse_settings
    mouseSettings.value.forEach((setting) => {
      setting.value = parsedMouseSettings[setting.key]
    })
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

  const updatedMouseSettings = {}
  mouseSettings.value.forEach((setting) => {
    updatedMouseSettings[setting.key] = setting.value
  })


  const { error: settingsUpdateError } = await supabase
    .from('settings')
    .update({
      launch_option: launchOption.value,
      crosshair_code: crosshairCode.value,
      mouse_settings: updatedMouseSettings
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

.sub-name {
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
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

.json-input {
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

.json-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.json-input:focus {
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
