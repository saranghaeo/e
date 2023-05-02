<template>
  <div class="content">
    <div class="text">
      <h1>{{ title }}</h1>
      <button @click="start" :disabled="isPlaying" class="button">Начать</button>
      <Results v-if="showResult" :score="score"></Results>
    </div>
    <div class="game">
      <Block v-if="isPlaying" :delay="delay" @end="end"></Block>
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
.content {
  padding: 60px 120px;
  display: flex;
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
}
.button:hover {
  background-color: #5cbf2a;
}
.button:active {
  position: relative;
  top: 1px;
}
</style>