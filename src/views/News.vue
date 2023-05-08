<template>
    <div class="content">
        <EntryComp/>
        <BlockComp/>
    </div>
</template>
<script setup>
import EntryComp from "@/components/news/EntryComp.vue"
import BlockComp from "@/components/news/BlockComp.vue"
</script>
<style scoped>
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
}
</style>