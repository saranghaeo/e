<template>
    <div class="content">
        <div class="container">
            <crosshair/>
        </div>
    </div>
</template>
<script setup>
import crosshair from "@/components/CrosshairGen.vue"
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