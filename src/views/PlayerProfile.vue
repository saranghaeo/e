<template>
    <div class="content" style="margin-top: 30px; margin-bottom: 30px;">
        <PlayerProfile />
    </div>
</template>
<script setup>
import PlayerProfile from '@/components/UserProfile/PlayerProfile.vue';
</script>
<style scoped>
.content {
    width: 1100px;
    background: rgba(0, 0, 0, 0.0);
    box-shadow: inset 0px 4px 40px rgba(96, 0, 252, 0.24);
    border: 2px solid #000000;
    border-radius: 10px;
    margin: 0 auto;
}
</style>