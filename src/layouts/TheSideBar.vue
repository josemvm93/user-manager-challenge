<template>
    <div id="nav">
        <router-link :to="{ name: 'Users' }"> Users </router-link>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TheSideBar',
})
</script>
<style lang="scss" scoped>
@import '@/scss/_variables';
#nav {
    padding: $space-md;
    max-width: 200px;
    a {
        font-weight: bold;
        color: $color-blue-principal;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
