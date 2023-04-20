<template>
    <div class="content">
        <h1 class="title">Гайды</h1>
        <div class="container">
            <GuideCard v-for="n in 3"/>
        </div>
    </div>
</template>
<script setup>
import GuideCard from "@/components/GuideCard.vue"
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