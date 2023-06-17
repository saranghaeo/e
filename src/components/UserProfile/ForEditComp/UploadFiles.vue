<template>
  <form @submit.prevent="saveProfile" class="edit" style="padding-left: 100px;">
    <label class="name">Конфиги:</label>
    <label class="custom-file-upload">
      <label class="sup-name">Config.cfg</label>
      <input type="file" @change="handleConfigFileChange" accept=".cfg" class="field-file">
    </label>
    <label class="custom-file-upload">
      <label class="sup-name">Video.txt:</label>
      <input type="file" @change="handleVideoFileChange" accept=".txt" class="field-file">
    </label>
    <p class="sup-text">Перейдите по пути: C:\Program Files (x86)\Steam\userdata\code\730\local\cfg, где code - ваш код дружбы (steam/настройки и в центре будет ваш код), после выбираем config, затем video.</p>

    <div class="button">
      <button type="submit" class="btn-save">Сохранить настройки</button>
    </div>
  </form>

  
</template>
  
<script setup>
import { ref } from 'vue';
import { supabase } from '@/supabase.js'
import { useAuthStore } from '@/store/auth.js';

const authStore = useAuthStore()
const configFile = ref(null)
const videoFile = ref(null)

const handleConfigFileChange = (event) => {
  const selectedFile = event.target.files[0]
  const fileName = selectedFile.name
  const fileExtension = fileName.split('.').pop()

  if (fileExtension === 'cfg') {
    configFile.value = selectedFile
  } else {
    alert('Please select a file with .cfg extension.')
    configFile.value = null
  }
}

const handleVideoFileChange = (event) => {
  const selectedFile = event.target.files[0]
  const fileName = selectedFile.name
  const fileExtension = fileName.split('.').pop()

  if (fileExtension === 'txt') {
    videoFile.value = selectedFile
  } else {
    alert('Please select a file with .txt extension.')
    videoFile.value = null
  }
}

const saveProfile = async () => {
  const steamid = authStore.user.steamid

  const uploadFile = async (file, fileName) => {
    const { data, error } = await supabase.storage
      .from('profile-files')
      .upload(`${steamid}/${fileName}`, file)

    if (error) {
      console.error(error)
    } else {
      console.log(`${fileName} upload`)
    }

    const { signedURL, error: signedURLError } = await supabase.storage
      .from('profile-files')
      .createSignedUrl(`${steamid}/${fileName}`, null, {
        download: true,
      })

    if (signedURLError) {
      console.error(signedURLError)
    }
  }

  if (configFile.value) {
    await uploadFile(configFile.value, 'config.cfg')
  }

  if (videoFile.value) {
    await uploadFile(videoFile.value, 'video.txt')
  }
}
</script>
  
<style scoped>
.sup-text {
  margin-top: 15px;
  max-width: 45%;
  background-color: #0000007b;
  padding: 10px 20px;
  border-radius: 5px;
  color: #666666;
}
.text {
  margin-top: 142px;
  max-width: 280px;
  background-color: #0000007b;
  padding: 20px;
  border-radius: 5px;
  color: #666666;
}
.btn-save {
  font-size: 14px;
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

.name {
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.sup-name {
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.custom-file-upload {
  display: flex;
  flex-direction: column;
}
</style>
  