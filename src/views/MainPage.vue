<template>
    <div class="content">

        <img class="background" src="@/assets/img/main_page/background.png" alt="mid">

        <div class="content-block">
            <div class="text-block">
                <img src="@/assets/img/main_page/text.png" alt="text">
            </div>
            <div v-if="Authstore.user"></div>
            <div class="btn-join" v-else>
                <button class="join" @click="Authstore.login()">ПРИСОЕДИНЯЙСЯ</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useAuthStore } from '@/store/auth.js';

const Authstore = useAuthStore();
</script>
<style scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.background {
    width: 100%;
    filter: opacity(0.8);
}

.content-block {
    position: absolute;
    left: 0;
}

.text-block {
    max-width: 450px;
    margin-left: 250px;
    padding-bottom: 20px;
}

.btn-join {
    width: 480px;
    height: 60px;
    background-image: url(@/assets/img/main_page/btn.svg);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
    transition: 0.3s;
}

.btn-join:hover {
    transform: scale(1.1);
}

.join {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
    background-color: transparent;
}
</style>