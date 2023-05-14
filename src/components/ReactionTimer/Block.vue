<template>
    <div class="block__click" v-if="showBlock" @click="stopTimer">
      <p>click me</p>
    </div>
    <div class="block__ready" v-else>
       <p>ready</p>
    </div>
</template>
  
<script>
export default {
    name: "Block",
    props: {
        delay: {
            type: Number,
            required: true,
        },
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },
        stopTimer() {
            clearInterval(this.timer);
            console.log("this.reactionTime", this.reactionTime);
            this.$emit("end", this.reactionTime);
        },
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        };
    },
};
</script>
  
<style scoped>
.block__click {
    width: 500px;
    height: 250px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 105px;
    font-size: 32px;
}

.block__ready {
    width: 500px;
    height: 250px;
    border-radius: 20px;
    background: red;
    color: white;
    text-align: center;
    padding: 105px;
    font-size: 32px;
}

.block__ready p {
    cursor: default;
}

.block__click {
    cursor: pointer;
}
</style>
  