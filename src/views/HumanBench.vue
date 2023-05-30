<template>
  <div class="section">
    <div class="content">
      <div class="text">
        <h1 class="title">ReactionTimer</h1>
        <button @click="start" :disabled="isPlaying" class="button">Начать</button>
        <Results v-if="showResult" :score="score"></Results>
      </div>
      <div class="game">
        <Block v-if="isPlaying" :delay="delay" @end="end"></Block>
      </div>
    </div>
    <div class="text-about">
      <p class="about">О тесте
        Это простой инструмент для измерения времени вашей реакции.<br><br>

        Согласно собранным на данный момент данным, среднее время реакции составляет 273 миллисекунды.<br><br>

        Помимо измерения времени вашей реакции, на этот тест влияет задержка вашего компьютера и монитора. Использование
        быстродействующего компьютера и монитора с низкой задержкой / высокой частотой кадров улучшит ваш результат.<br><br>

        Более подробно это обсуждается на странице статистики. В то время как среднее время реакции человека может
        составлять от 200 до 250 мс, ваш компьютер может добавить еще 10-50 мс. Некоторые современные телевизоры добавляют
        целых 150 мс!</p>
    </div>
  </div>
</template>
<script>
import Block from '@/components/ReactionTimer/Block.vue';
import Results from '@/components/ReactionTimer/Results.vue';

export default {
  name: "HumanBench",
  components: { Block, Results },
  data() {
    return {
      title: "Reaction Timer",
      isPlaying: false,
      delay: null,
      score: 0,
      showResult: false,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 500 + Math.random() * 5000;
      this.showResult = false;
    },
    end(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    },
  },
}
</script>
<style scoped>
.section {
  height: 70vh;
}

.content {
  padding: 60px 0;
  max-width: 1540px;
  display: flex;
  margin: 0 auto;
}

.title {
  font-family: 'Orbitron';
  font-weight: 700;
}

.text {
  width: 500px;
}

.game {
  width: 500px;
  height: 250px;
}

.button {
  margin-top: 30px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid #44c767;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 18px;
  padding: 10px 30px;
  text-decoration: none;
  text-shadow: 0px 0px 0px #2f6627;
  transition: 0.2s;
}

.button:hover {
  background-color: #5cbf2a;
}

.button:active {
  position: relative;
  top: 1px;
}
.text-about {
  display: flex;
  justify-content: center;
  align-self: center;
  max-width: 1000px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.57);
}
</style>