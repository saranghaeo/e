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
    <div class="button">
      <button type="submit" class="btn-save">Сохранить настройки</button>
    </div>
  </form>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createClient } from '@supabase/supabase-js';
import { useAuthStore } from '@/store/auth.js';

const router = useRouter()

const supabaseUrl = 'https://eqtgcskjmwukbdbzmzgf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdGdjc2tqbXd1a2JkYnptemdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NzUyNTIsImV4cCI6MTk5OTU1MTI1Mn0.CfbPB8I0XFIsvbVL18u7aI68ExOMrBC_f7MdqYcIM7s'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
};

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
};

const saveProfile = async () => {
  const steamid = authStore.user.steamid
  const updatedData = {}

  if (configFile.value) {
    const { data: configData, error: configError } = await supabase.storage
      .from('profile-files')
      .update(`user-${steamid}/config.cfg`, configFile.value)

    if (configError) {
      console.error(configError)
    }else {
      console.log('config.cfg upload')
    }

    const configUrl = configData.Key
    updatedData.configFile = configUrl
  }

  if (videoFile.value) {
    const { data: videoData, error: videoError } = await supabase.storage
      .from('profile-files')
      .update(`user-${steamid}/video.txt`, videoFile.value)

    if (videoError) {
      console.error(videoError)
    }else {
      console.log('Video.txt upload')
    }

    const videoUrl = videoData.Key
    updatedData.videoFile = videoUrl
  }

}
</script>
  
<style scoped>
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
  