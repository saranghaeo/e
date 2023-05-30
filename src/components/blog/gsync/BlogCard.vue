<template>
    <div class="card">
        <div class="image-news">
            <img src="@/assets/img/news/gsync/gsync.png" alt="preview">
        </div>
        <div class="text-block">
            <h2 class="title">Что такое G-Sync?</h2>
            <p class="text">G-Sync - это собственная технология адаптивной синхронизации, разработанная компанией Nvidia. Ее
                цель - обеспечить геймерам более плавный игровой опыт путем согласования частоты обновления монитора с
                частотой кадров, формируемых графическим процессором (GPU), что позволяет избежать мерцания экрана или
                разрывов изображения...</p>
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
    background: rgba(0, 0, 0, 0.57);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 10px 10px 0px;
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