<template>
    <div class="content">
        <div class="block" v-if="Authstore.user">
            <div class="profile-block">
                <div class="title">
                    <div class="icon">
                        <img src="@/assets/img/player/startup.png" alt="icon">
                        <h3>Параметры запуска</h3>
                    </div>
                    <div class="btn-copy">
                        <img src="@/assets/img/player/copy.png" alt="copy">
                        <button class="copy" @click="copyToClipboard">Скопировать</button>
                    </div>
                </div>
                <div class="startupsettings">
                    <pre ref="preElement">-novid -freq 240 -nojoy -tickrate 128 +exec autoexec.cfg -allow_third_party_software</pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth.js';

const Authstore = useAuthStore();
const preElement = ref(null);

function copyToClipboard() {
    if (preElement.value) {
        const textToCopy = preElement.value.innerText;
        navigator.clipboard.writeText(textToCopy);
    }
}
</script>
<style scoped>

.btn-copy {
    display: flex;
    align-items: center;
    transition: 0.3s;
}

.btn-copy img {
    height: 17px;
}

.copy {
    border: none;
    background: none;
    color: #fff;
    padding: 5px 5px;
    font-family: 'Montserrat', sans-serif;
}

.btn-copy:hover {
    transform:scale(1.1)
}

.startupsettings {
    display: flex;
    justify-content: center;
    padding-top: 20px
}

pre {
    background-color: #181818;
    width: 90%;
    border-radius: 10px;
    font-size: 14px;
    color: #666666;
    padding: 12px 15px;
    font-family: 'Montserrat', sans-serif;
    white-space: break-spaces;
}

.content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 1px;
}

.block {
    width: 1100px;
    display: flex;
}

.profile-block {
    width: 100%;
    background: #000000;
    box-shadow: inset 5px 5px 35px rgba(255, 255, 255, 0.4);
    border-radius: 10px 10px 10px 10px;
    padding-bottom: 50px;
}

.title {
    display: flex;
    padding: 20px 60px;
    font-size: 24px;
    align-items: center;
    justify-content: space-between;
}
.icon {
    display: flex;
}
.icon img {
    height: 24px;
    margin-top: 6px;
    padding-right: 5px;
}
</style>