<template>
    <div>
        <div v-if="!started">
            <button @click="startTest">Начать тест</button>
        </div>
        <div v-else>
            <div v-if="!clicked">
                <div id="target" @click="handleClick" :style="targetStyle"></div>
            </div>
            <div v-else>
                <p>Ваша реакция: {{ reactionTime }} мс</p>
                <button @click="restartTest">Начать заново</button>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, reactive } from 'vue';

const targetSize = 50;
const containerSize = 300;
const minDelay = 1000;
const maxDelay = 3000;

const started = ref(false);
const clicked = ref(false);
const totalReactionTime = ref(0);
const reactionTime = ref(0);
const targetStyle = reactive({
    width: `${targetSize}px`,
    height: `${targetSize}px`,
    display: 'none'
});

let targetCount = 0;
let timeoutId;
let startTime;

const startTest = () => {
    started.value = true;
    clicked.value = false;
    reactionTime.value = 0;
    totalReactionTime.value = 0;
    showTargetWithDelay(10);
};

const restartTest = () => {
    started.value = false;
    clearTimeout(timeoutId);
};

const showTargetWithDelay = (count) => {
    if (count <= 0) {
        const averageReactionTime = totalReactionTime.value / 10;
        alert(`Среднее время реакции: ${averageReactionTime.toFixed(2)} мс`);
        return;
    }

    const delay = Math.random() * (maxDelay - minDelay) + minDelay;
    timeoutId = setTimeout(() => {
        showTarget();
        count--;
        showTargetWithDelay(count);
    }, delay);
};

const showTarget = () => {
    targetStyle.display = 'block';
    targetStyle.backgroundColor = getRandomColor();
    targetStyle.left = `${getRandomPosition()}px`;
    targetStyle.top = `${getRandomPosition()}px`;
    targetStyle.transitionDuration = '';
    startTime = performance.now();
};

const handleClick = () => {
    if (!clicked.value) {
        const endTime = performance.now();
        const currentReactionTime = Math.round(endTime - startTime);
        reactionTime.value = currentReactionTime;
        totalReactionTime.value += currentReactionTime;
        clicked.value = true;
        targetStyle.transitionDuration = '0.2s';
        targetStyle.opacity = '0';
        setTimeout(() => {
            targetStyle.display = 'none';
            clicked.value = false;
            targetCount++;
            if (targetCount >= 10) {
                const averageReactionTime = totalReactionTime.value / 10;
                alert(`Среднее время реакции: ${averageReactionTime.toFixed(2)} мс`);
            } else {
                showTargetWithDelay(10 - targetCount);
            }
        }, 2000);
    }
};

const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

const getRandomPosition = () => {
    const containerSize = 300; // Размер контейнера
    return Math.floor(Math.random() * (containerSize - targetSize));
};
</script>
<style scoped>
.content {
    padding: 60px 0;
    max-width: 1540px;
    margin: 0 auto;
    height: 70vh;
}

#target {
    position: absolute;
    border-radius: 50%;
    opacity: 1;
    cursor: pointer;
}
</style>
  