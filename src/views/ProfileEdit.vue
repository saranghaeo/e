<template>
  <div class="content" v-if="Authstore.user">
    <h1 class="title">Edit Profile</h1>
    <Edit />
    
  </div>
  <div v-else class="warning">
    <h1>Для редактирования профиля сначало нужно пройти авторизацию</h1>
  </div>
</template>
  
<script setup>
import Edit from '@/components/UserProfile/Edit.vue'
import { useAuthStore } from '@/store/auth.js';
const Authstore = useAuthStore();

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
.warning {
    display: flex;
    justify-content: center;
    padding: 100px;
}
</style>