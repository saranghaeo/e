<template>
  <div class="edit-content">
    <form @submit.prevent="saveProfile" class="edit">
      <label class="name">Команда:</label>
      <input v-model="team" type="text" class="field">
      <label class="name">Описание:</label>
      <textarea v-model="about" class="field-text"></textarea>
      <div class="button">
        <button type="submit" class="btn-save">Сохранить профиль</button>
      </div>
    </form>
    <UploadFiles />

  </div>
</template>

<script setup>
import UploadFiles from '@/components/UserProfile/ForEditComp/UploadFiles.vue'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/supabase.js'
import { useAuthStore } from '@/store/auth.js';

const router = useRouter()
const Authstore = useAuthStore()
const about = ref('')
const team = ref('')

const saveProfile = async () => {
  const suid = Authstore.token
  const { data, error } = await supabase
    .from('users')
    .update({
      about: about.value,
      team: team.value
    })
    .eq('suid', suid)

  if (error) {
    console.error(error)
  } else {
    console.log('Profile saved!')
    router.push('/profile')
  }
};

onMounted(async () => {
  const suid = Authstore.token
  const { data, error } = await supabase
    .from('users')
    .select('about, team')
    .eq('suid', suid)
    .single()

  if (error) {
    console.error(error)
  } else {
    about.value = data.about
    team.value = data.team
  }
})
</script>

<style scoped>
.edit-content {
  display: flex;
}

.edit {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.field {
  background-color: #181818;
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
  color: #666666;
  padding: 12px 15px;
  font-family: 'Montserrat', sans-serif;
  white-space: break-spaces;
  display: block;
  margin: 0;
  border: none;
  margin-top: 5px;
  margin-bottom: 5px;
}

.field:focus {
  color: #fff;
}

.field-text {
  background-color: #181818;
  width: 450px;
  height: 90px;
  border-radius: 5px;
  font-size: 16px;
  color: #666666;
  padding: 12px 15px;
  font-family: 'Montserrat', sans-serif;
  white-space: break-spaces;
  margin-top: 5px;
  margin-bottom: 5px;
  resize: none;
}

.btn-save {
  font-size: 20px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  padding: 3px 20px;
  background-color: transparent;
  border: 1px solid #666666;
  border-radius: 5px;
  margin-top: 15px;
  transition: 0.2s;
}

.btn-save:hover {
  transform: scale(1.1);
}
</style>
