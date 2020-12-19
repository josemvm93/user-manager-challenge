<template>
    <div class="loading-container">
        <h2>Loading...</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Loading',
})
</script>
<style lang="scss" scoped>
@import '@/scss/_variables';
.loading-container {
    display: flex;
    justify-content: center;
    background: $color-gray;
    h2 {
        color: $color-blue-principal;
    }
}
</style>
