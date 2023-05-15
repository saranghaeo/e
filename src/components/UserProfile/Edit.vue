<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eqtgcskjmwukbdbzmzgf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdGdjc2tqbXd1a2JkYnptemdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NzUyNTIsImV4cCI6MTk5OTU1MTI1Mn0.CfbPB8I0XFIsvbVL18u7aI68ExOMrBC_f7MdqYcIM7s'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const steam_id = ref('');
const about = ref('');
const team = ref('');

const saveProfile = async () => {
  const { data, error } = await supabase
    .from('users')
    .update({
      about: about.value,
      team: team.value
    })
    .eq('steam_id', steam_id.value);

  if (error) {
    console.error(error);
  } else {
    console.log('Profile saved successfully!');
  }
};

onMounted(async () => {
  const route = useRoute();
  steam_id.value = route.params.steam_id;

  const { data, error } = await supabase
    .from('users')
    .select('about, team')
    .eq('steam_id', steam_id.value)
    .single();

  if (error) {
    console.error(error);
  } else {
    about.value = data.about;
    team.value = data.team;
  }
});
</script>

<template>
  <form @submit.prevent="saveProfile" class="edit">
    <label class="name">Team:</label>
    <input v-model="team" type="text" class="field">
    <label class="name">About:</label>
    <textarea v-model="about" class="field-text"></textarea>
    <div class="button">
      <button type="submit" class="btn-save">Save</button>
    </div>
  </form>
</template>

<style scoped>
.edit {
  display: flex;
  flex-direction: column;
  max-width: 300px;
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
  font-size: 18px;
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