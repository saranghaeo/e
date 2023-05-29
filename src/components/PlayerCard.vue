<template>
  <div class="card">

    <router-link :to="`/players/${player.steam_id}`">
      <div class="avatar">
        <img :src="player.avatarfull" :alt="player.avatarfull">
      </div>
    </router-link>

    <div class="text-block">

      <router-link :to="`/players/${player.steam_id}`" class="profile-link">
        <h3 class="nickname">{{ player.personaname }}</h3>
      </router-link>

      <router-link to="" class="download-cfg">config</router-link>

      <div class="social">
        <a :href="player.profileurl" class="img-link-social">
          <img src="@/assets/img/player/steam.png" alt="social">
        </a>
      </div>

    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  player: {
    type: Object,
    required: true
  }
})

</script>
<style scoped>
.card {
  display: flex;
  width: 480px;
  height: 220px;
  margin: 0 30px 40px 0;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.avatar img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 10px 0px 0px 10px;
}

.text-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 15px;
  width: 270px;
  background: #00000042;
  box-shadow: inset 0px 4px 40px rgba(96, 0, 252, 0.24);
  border-radius: 0px 10px 10px 0px;
  transition: 0.3s;
}

.text-block:hover {
  box-shadow: inset 5px 5px 80px rgba(96, 0, 252, 0.6);
}

.nickname {
  font-size: 24px;
}

.download-cfg {
  font-size: 20px;
  font-weight: 700;
  color: #96E6FF;
  text-decoration: none;
}

.img-link-social:not(:last-child) {
  padding-right: 15px;
}

.profile-link {
  color: #fff;
  text-align: center;
  text-decoration: none;
}
</style>