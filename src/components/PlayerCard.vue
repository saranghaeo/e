<template>

    <router-link to="" class="card">

        <div class="avatar">
            <img src="@/assets/img/player/9eXMjrySi4Y.jpg" alt="avatar">
        </div>

        <div class="text-block">
            <h3 class="nickname">Nickname</h3>
            <router-link to="" class="download-cfg">config</router-link>

            <div class="social">
                <router-link to="" class="img-link-social">
                    <img src="@/assets/img/player/steam.png" alt="social">
                </router-link>
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
export default {

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