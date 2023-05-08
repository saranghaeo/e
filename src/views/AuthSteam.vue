<template>
    <div>
        <ProfileBanner/>
        <MouseBanner/>
        <CrosshairBanner/>
        <StartUpSettingBanner/>
        <VideoBanner/>
    </div>
</template>
<script>
import { useAuthStore } from '@/store/auth.js';
import ProfileBanner from '@/components/UserProfile/ProfileBanner.vue';
import MouseBanner from '@/components/UserProfile/MouseBanner.vue';
import CrosshairBanner from '@/components/UserProfile/CrosshairBanner.vue';
import StartUpSettingBanner from '@/components/UserProfile/StartUpSettingBanner.vue';
import VideoBanner from '@/components/UserProfile/VideoBanner.vue';

const AuthStore = useAuthStore();
export default {

    components:{
        ProfileBanner,
        MouseBanner,
        CrosshairBanner,
        StartUpSettingBanner,
        VideoBanner
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
