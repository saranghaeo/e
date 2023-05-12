<template>
    <div class="card">
        <div class="image-news">
            <img src="@/assets/img/news/gsync/gsync.png" alt="preview">
        </div>
        <div class="text-block">
            <h2 class="title">What is G-Sync?</h2>
            <p class="text">G-Sync is a proprietary adaptive sync technology made by Nvidia. It aims to give gamers a
                smoother gameplay experience by matching a monitor’s refresh rate with the frame rate that the GPU is
                pushing out, thus eliminating screen stuttering or…</p>
            <router-link to="/gsync" class="more">Узнать Больше</router-link>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.card {
    display: flex;
    width: 1400px;
    height: 250px;
    text-decoration: none;
    color: #fff;
    margin-bottom: 60px;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
}

.image-news img {
    width: 420px;
    height: 248px;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
}

.text-block {
    padding: 30px 40px;
}

.title {
    font-size: 24px;
    padding-bottom: 15px;
}

.text {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 15px 5px 15px;
}

.more {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px 0 0;
}
</style>