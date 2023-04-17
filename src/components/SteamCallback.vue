<template>
    <div>
        <p>Authenticating...</p>
    </div>
</template>
  
<script>
import AuthService from '@/services/auth.service';

export default {
    mounted() {
        AuthService.getUser().then(response => {
            this.$store.commit('SET_USER', response.data);
            this.$router.push('/');
        });
    },
};
</script>

<style></style>