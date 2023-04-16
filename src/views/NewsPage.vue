<template>
    <div class="content">
        <h1 class="title">Новости</h1>
        <div class="container">
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
        </div>
    </div>
</template>
<script setup>
import NewsCard from "@/components/NewsCard.vue"
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
    flex-direction: column;
    align-items: center;
}
</style>