<template>
    <div class="content">
        <EntryComp/>
        <BlockComp/>
    </div>
</template>
<script setup>
import EntryComp from "@/components/blog/gsync/EntryComp.vue"
import BlockComp from "@/components/blog/gsync/BlockComp.vue"
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