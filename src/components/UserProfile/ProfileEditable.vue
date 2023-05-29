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

      <div class="edit">
        <router-link to="/edit">
          <img src="@/assets/img/player/edit.svg" alt="icon">
        </router-link>
      </div>

      <div class="block-right">

        <div class="cfg-block">
          <img src="@/assets/img/player/cfg.svg" alt="logo">
          <a :href="linkCfg" class="cfg">
            <p class="sup-cfg">Config.cfg</p>
          </a>
        </div>

        <div class="cfg-block">
          <img src="@/assets/img/player/txt.svg" alt="logo">
          <a :href="linkVideo" class="cfg">
            <p class="sup-cfg">Video.txt</p>
          </a>
        </div>

      </div>

    </div>

  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/store/auth.js'
import { supabase } from '@/supabase.js';
const store = useAuthStore()

const linkCfg = ref()
const linkVideo = ref()

onMounted(async () => {
  const steamid = store.user.steamid
  const getFilePublicUrl = async (fileName, linkValue) => {
    const { data, error } = await supabase.storage
      .from('profile-files')
      .getPublicUrl(`${steamid}/${fileName}`, {
        download: true,
      })
    if (error) {
      console.error(error)
    } else {
      linkValue.value = data.publicUrl
    }
  }
  await Promise.all([
    getFilePublicUrl('config.cfg', linkCfg),
    getFilePublicUrl('video.txt', linkVideo),
  ])
})

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

.edit {
  position: absolute;
  margin-top: 10px;
  margin-left: 710px;
}
</style>