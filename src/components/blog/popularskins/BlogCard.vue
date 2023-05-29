<template>
    <div class="card">
        <div class="image-news">
            <img src="@/assets/img/news/cs2.jpg" alt="preview">
        </div>
        <div class="text-block">
            <h2 class="title">Counter-Strike 2 Анонсирована Valve</h2>
            <p class="text">Слухи об этом ходили уже много лет, но недавние слухи оказались верными, поскольку Valve
                официально анонсировала Counter-Strike 2
                в своем блоге. Counter-Strike 2 представит ряд масштабных обновлений для игры, а полноценный релиз
                запланирован на лето, с сегодняшнего дня начинается ограниченное тестирование.
                CS2 станет бесплатным обновлением для CS:GO и внесет ряд улучшений, некоторые из которых уже были описаны
                Valve.</p>
            <router-link to="/cs2" class="more">Узнать Больше</router-link>
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
    background: rgba(0, 0, 0, 0.57);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 10px 10px 0px;
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
    transition: 0.3s;
}

.more:hover {
    transform: scale(1.1);
}
</style>