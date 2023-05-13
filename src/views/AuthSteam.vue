<template>
    <div>
        <ProfileBanner/>
    </div>
</template>
<script>
import { useAuthStore } from '@/store/auth.js';
import ProfileBanner from '@/components/UserProfile/ProfileBanner.vue';


const AuthStore = useAuthStore();
export default {

    components:{
        ProfileBanner
    },
    /**
     * Handles redirect from steam log in
     */
    mounted() {
        AuthStore.handleLoginCallback()
    }
}
</script>
<style>

</style>
