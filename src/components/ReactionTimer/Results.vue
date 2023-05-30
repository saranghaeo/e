<template>
    <p class="time">Время реакции: {{ score }} мс</p>
    <p class="rank">{{ rank }}</p>
</template>
  
<script>
export default {
    name: "Results",
    props: {
        score: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            rank: null,
        };
    },
    mounted() {
        console.log("this.score", this.score);
        if (this.score < 250) {
            this.rank = "Отлично";
        } else if (this.score <= 320) {
            this.rank = "Нормально";
        } else if (this.score > 320) {
            this.rank = "Удовлетворительно";
        }
    },
};
</script>
  
<style scoped>
.rank {
    font-size: 24px;
    color: #0faf87;
    font-weight: bold;
    padding-top: 10px;
}
.time {
    padding-top: 30px;
    font-size: 20px;
}
</style>