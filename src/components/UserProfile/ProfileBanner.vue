<template>
    <div class="content">
        <div class="block">
            <div class="avatar">
                <img :src="player.avatarfull" :alt="player.personaname">
            </div>

            <div class="profile-block">
                <div class="top-bar">
                    <h2 class="nickname">{{ player.personaname }}</h2>
                    <router-link :to="'/edit/' + player.steam_id" class="edit-img">
                        <img src="@/assets/img/player/edit.png" alt="edit">
                    </router-link>
                    
                </div>                
                <div class="inner-block">

                    <div class="left-block">
                        <div class="team">
                            <p><b>Команда:</b></p>
                            <p class="name-of-team">{{ player.team }}</p>
                        </div>
                        <div class="about">
                            <pre>{{ player.about }}</pre>
                        </div>
                    </div>

                    <div class="right-block">
                        <div class="download-cfg">
                            <router-link to="" class="cfg">
                                <p>Config.cfg</p>
                            </router-link>
                            <router-link to="" class="cfg">
                                <p>Autoexec.cfg</p>
                            </router-link>
                        </div>

                        <div class="social">
                            <a :href="player.profileurl" class="social-icon">
                                <img src="@/assets/img/player/steam.png" alt="social">
                            </a>
                        </div>
                    </div>


                </div>
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
.content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.block {
    width: 1100px;
    height: 220px;
    display: flex;
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
    width: 100%;
    background: #000000;
    box-shadow: inset 5px 5px 35px rgba(255, 255, 255, 0.4);
    border-radius: 0px 10px 10px 0px;
}

.nickname {
    text-align: center;
    font-size: 28px;
    padding: 10px;
    width: 90%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    margin: 0 auto;
}

.inner-block {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
}

.team {
    display: flex;
}

.name-of-team {
    padding-left: 8px;
}

.right-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.download-cfg {
    display: flex;
    flex-direction: row;
    align-items: self-start;
}

.cfg {
    display: flex;
    padding-bottom: 8px;
    font-weight: 700;
    text-decoration: none;
    color: #c3f5f1;
    padding-right: 10px;
}

.social {
    padding-top: 20px;
}

.social-icon {
    margin-right: 8px;
}
.about {
    padding-top: 10px;
}
pre {
    background-color: #181818;
    width: 450px;
    height: 90px;
    border-radius: 10px;
    font-size: 14px;
    color: #666666;
    padding: 12px 15px;
    font-family: 'Montserrat', sans-serif;
    white-space: break-spaces;
    word-wrap: break-word;
}
</style>