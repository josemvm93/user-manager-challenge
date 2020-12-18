<template>
    <div id="header">
        <h1>{{ title }}</h1>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'TheHeader',
    computed: {
        title() {
            return 'Welcome to User Manager Challenge'
        },
    },
})
</script>
<style lang="scss" scoped>
@import '@/scss/_variables';
#header {
    display: flex;
    justify-content: center;
}
</style>
