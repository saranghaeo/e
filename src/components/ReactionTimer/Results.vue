<template>
    <p class="time">Reaction Time : {{ score }} ms</p>
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
            this.rank = "Giga chad";
        } else if (this.score < 300) {
            this.rank = "Norm";
        } else if (this.score > 300) {
            this.rank = "Idi potren'sya";
        }
    },
};
</script>
  
<style scoped>
.rank {
    font-size: 1.4rem;
    color: #0faf87;
    font-weight: bold;
}
.time {
    padding: 0 20px;
}
</style>