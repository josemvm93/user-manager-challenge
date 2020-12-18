<template>
    <TheHeader class="header" />
    <div class="main">
        <TheSideBar class="side-bar" />
        <div class="content">
            <router-view />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from './TheHeader.vue'
import TheSideBar from './TheSideBar.vue'

export default defineComponent({
    name: 'TheMain',
    components: {
        TheHeader,
        TheSideBar,
    },
})
</script>
<style lang="scss" scoped>
@import '@/scss/_variables';
.header {
    background-color: $color-blue-principal;
    color: $color-white;
}
.main {
    display: flex;
    height: 80vh;
    .side-bar {
        flex: 20%;
        border: 1px solid $color-blue-principal;
    }
    .content {
        flex: 80%;
        margin: $space-md;
    }
}
</style>
