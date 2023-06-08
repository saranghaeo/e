<template>
  <div class="content">

    <div class="avatar">
      <img :src="player.avatarfull" :alt="player.personaname">
    </div>

    <div class="profile-block">

      <div class="block-left">
        <h2 class="nickname">{{ player.personaname }}</h2>
        <div class="team">
          <p><b>Команда:</b></p>
          <p class="name-of-team">{{ player.team }}</p>
        </div>
        <div class="about">
          <p><b>Описание:</b></p>
          <pre>{{ player.about }}</pre>
        </div>
      </div>

      <div class="block-right">

        <div class="cfg-block" v-if="folderExists">
          <img src="@/assets/img/player/cfg.svg" alt="logo">
          <a :href="getDownloadUrl('config.cfg')" class="cfg">
            <p class="sup-cfg">Config.cfg</p>
          </a>
        </div>

        <div class="cfg-block" v-if="folderExists">
          <img src="@/assets/img/player/txt.svg" alt="logo">
          <a :href="getDownloadUrl('video.txt')" class="cfg">
            <p class="sup-cfg">Video.txt</p>
          </a>
        </div>

        <div v-if="!folderExists" class="file-text">
          <p>Файлы ещё не были добавлены пользователем</p>
        </div>

      </div>

    </div>

  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase.js';
import { useRoute } from 'vue-router'

const folderExists = ref(false)
const cfgFileExists = ref(false)
const videoFileExists = ref(false)

onMounted(async () => {

  const steam_id = useRoute().params.steam_id

  const checkFolderExists = async () => {
    const { data, error } = await supabase.storage
      .from('profile-files')
      .list(`${steam_id}`)
    return !error && data.length > 0
  }

  const checkFileExists = async (fileName) => {
    const { data, error } = await supabase.storage
      .from('profile-files')
      .list(`${steam_id}/${fileName}`, { limit: 1 })
    return !error && data.length > 0
  }

  folderExists.value = await checkFolderExists()
  cfgFileExists.value = await checkFileExists('config.cfg')
  videoFileExists.value = await checkFileExists('video.txt')
})

const getDownloadUrl = (fileName) => {
  if (folderExists.value) {
    return `https://eqtgcskjmwukbdbzmzgf.supabase.co/storage/v1/object/public/profile-files/${useRoute().params.steam_id}/${fileName}?download=`
  } else {
    return null
  }
}

const props = defineProps({
  player: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>
.content {
  width: 1020px;
  height: 220px;
  background: #000000;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
}

.avatar img {
  width: 220px;
  height: 220px;
  border-radius: 10px 0px 0px 10px;
}

.top-bar {
  display: flex;
}

.edit-img img {
  width: 35px;
  height: 35px;
  margin-top: 10px;
  margin-right: 10px;
  object-fit: contain;
}

.profile-block {
  display: flex;
  width: 100%;
  padding-left: 50px;
}

.nickname {
  font-size: 24px;
  font-weight: 700;
  padding: 10px 0px;
}

.team {
  display: flex;
  padding: 5px 0;
}

.name-of-team {
  padding-left: 8px;
}

.about {
  padding-top: 5px;
}

pre {
  width: 350px;
  height: 90px;
  background: rgba(43, 43, 43, 0.13);
  margin-top: 10px;
  font-size: 14px;
  color: #666666;
  padding: 12px 15px;
  font-family: 'Montserrat', sans-serif;
  white-space: break-spaces;
  word-wrap: break-word;
}

.block-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.cfg-block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 50px;
}

.cfg {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  padding-left: 10px;
  text-decoration: none;
  transition: 0.2s;
  color: #fff;
}

.cfg:hover {
  color: #59268d;
  transform: scale(1.03);
}

.sup-cfg {
  width: 100px;
}

.file-text {
  width: 80%;
  text-align: center;
}
</style>