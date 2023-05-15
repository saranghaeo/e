<template>
  <div class="content">
    <h1 class="title">Edit Profile</h1>
    <Edit />
  </div>
</template>
  
<script setup>
import Edit from '@/components/UserProfile/Edit.vue'
</script>

<style scoped>
.content {
  padding: 60px 120px
}

.title {
  font-size: 40px;
  padding-bottom: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>