<template>
    <div>
        <div v-if="!user">
            <h2>Welcome! Please log in.</h2>
            <p><a href="/auth/steam">Sign On with Steam</a></p>
        </div>
        <div v-else>
            <h2>Hello, {{ user.displayName }}. - <a href="/logout">Logout</a></h2>
            <p><a href="/account">See Account Information</a></p>
            <div>
                <img :src="user.photos[2].value" alt="Your Avatar Image">
                <p>ID: {{ user.id }}</p>
                <p>Name: {{ user.displayName }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: null,
        };
    },
    created() {
        axios.get('/user')
            .then(res => {
                this.user = res.data;
            })
            .catch(() => {
                this.user = null;
            });
    },
};
</script>