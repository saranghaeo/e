<template>
    <div>
        Ura epta
    </div>
</template>
<script>
import { useAuthStore } from '@/store/auth.js';

const AuthStore = useAuthStore();
export default {
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
