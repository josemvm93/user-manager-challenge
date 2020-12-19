<template>
    <div class="welcome-container">
        <h1>{{ title }}</h1>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'WelcomeView',
    computed: {
        title() {
            return 'Welcome'
        },
    },
})
</script>
<style lang="scss" scoped>
@import '@/scss/_variables';

.welcome-container {
    width: 100%;
    height: 100%;
    background-color: $color-gray;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        color: $color-blue-principal;
    }
}
</style>
