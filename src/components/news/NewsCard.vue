<template>
    <div class="card">
        <div class="image-news">
            <img src="@/assets/img/news/cs2.jpg" alt="preview">
        </div>
        <div class="text-block">
            <h2 class="title">Counter-Strike 2 Announced by Valve</h2>
            <p class="text">It has been rumored to happen for years, but recent rumors have proven to be correct as Valve has officially announced Counter-Strike 2 
            on their blog. Counter-Strike 2 will introduce a number of massive updates to the game and is set for a full release in the summer, with limited testing rolling 
            out as of today. CS2 will be a free update to CS:GO and will introduce a number of improvements, some of which have already been outlined by Valve.</p>
            <router-link to="/cs2" class="more">Узнать Больше</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .card{
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
        height: 250px;
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