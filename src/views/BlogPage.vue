<template>
    <div class="content">
        <h1 class="title">Блог</h1>
        <div class="container">
            <CS2/>
            <gsync/>
            <fps/>
        </div>
    </div>
</template>
<script setup>
import CS2 from "@/components/blog/cs2/BlogCard.vue"
import gsync from "@/components/blog/gsync/BlogCard.vue"
import fps from "@/components/blog/fps/BlogCard.vue"
</script>
<style scoped>
.content {
    padding: 60px 0;
    max-width: 1540px;
    margin: 0 auto;
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