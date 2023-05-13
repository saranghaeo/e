<template>

    <router-link :to="{ name: 'player', params: { steam_id: user.steam_id } }" class="card" v-for="user in users" :key="user.id">

        <div class="avatar">
            <img :src="user.avatarfull" :alt="user.avatarfull">
        </div>

        <div class="text-block">
            <h3 class="nickname">{{ user.personaname }}</h3>
            <router-link to="" class="download-cfg">config</router-link>

            <div class="social">
                <a :href="user.profileurl" class="img-link-social">
                    <img src="@/assets/img/player/steam.png" alt="social">
                </a>
                <router-link to="" class="img-link-social">
                    <img src="@/assets/img/player/twitch.png" alt="social">
                </router-link>
                <router-link to="" class="img-link-social">
                    <img src="@/assets/img/player/youtube.png" alt="social">
                </router-link>
                <router-link to="" class="img-link-social">
                    <img src="@/assets/img/player/vkontakte.png" alt="social">
                </router-link>

            </div>

        </div>

    </router-link>

</template>
<script>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

export default {
  setup() {
    const supabaseUrl = 'https://eqtgcskjmwukbdbzmzgf.supabase.co'
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdGdjc2tqbXd1a2JkYnptemdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NzUyNTIsImV4cCI6MTk5OTU1MTI1Mn0.CfbPB8I0XFIsvbVL18u7aI68ExOMrBC_f7MdqYcIM7s'
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    const users = ref([])

    const loadUsers = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('id, steam_id, personaname, avatarfull, profileurl')

      if (error) {
        console.error(error)
      } else {
        users.value = data
      }
    }

    onMounted(() => {
      loadUsers()
    })

    return {
      users
    }
  }
}
</script>
<style scoped>
.card {
    display: flex;
    width: 490px;
    height: 220px;
    margin: 0 50px 60px 0;
    text-decoration: none;
    color: #fff;
}
.avatar img{
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
}

.text-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 34px 25px;
    gap: 31px;
    width: 270px;
    box-shadow: inset 5px 5px 35px rgba(181, 181, 181, 0.8);
    border-radius: 0px 10px 10px 0px;
    transition: all 0.3s;
}

.text-block:hover {
    box-shadow: inset 5px 5px 80px rgba(181, 181, 181, 0.8);
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
</style>