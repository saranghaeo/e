<template>
    <div class="block" v-if="Authstore.user">
        <div class="avatar">
            <img :src="Authstore.user.avatarfull" :alt="Authstore.user.avatarfull">
        </div>
        <div class="text-block">
            <h2 class="nickname">{{ Authstore.user.personaname }}</h2>
            <div class="text">
                <div class="team">
                    <label class="l-title">Команда: </label>
                    <label>Нет</label>
                </div>
                <div class="about">
                    <label class="l-title">О Себе: </label>
                    <textarea placeholder="Описание ещё не добавлено" class="placeholder"></textarea>
                </div>
                <div class="cfg">
                    <p class="config">cfg.cfg</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useAuthStore } from '@/store/auth.js';

const Authstore = useAuthStore();
</script>
<style scoped>
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

.text-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    background: #000000;
    box-shadow: inset 5px 5px 35px rgba(255, 255, 255, 0.4);
    border-radius: 0px 10px 10px 0px;
}

.nickname {
    font-size: 28px;
    padding: 10px;
    width: 90%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 5px;
    width: 90%;
}

.team,
.about {
    padding-top: 10px;
}

.t-title {
    font-weight: 600;
}

.about {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.placeholder {
    padding-top: 30px;
    margin-top: 5px;
    text-align: center;
    width: 440px;
    height: 80px;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}

textarea {
  resize: none;
  font-size: 14px;
  font-family: 'Montserrat';
}

.cfg {
    display: flex;
    align-items: flex-end;
}
</style>