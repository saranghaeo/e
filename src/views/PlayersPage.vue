<template>
    <div class="content">
        <h1 class="title">Игроки</h1>
        <div class="container">
            <PlayerCard/>
        </div>
    </div>
</template>

<script setup>
import PlayerCard from "@/components/PlayerCard.vue"
</script>

<style scoped>
.content {
    padding: 60px 120px

}

.title {
    font-size: 40px;
    padding-bottom: 60px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1620px;
}
</style>