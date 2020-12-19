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
$header-height: 10vh;
$main-height: calc(95vh - #{$header-height});
$side-bar-flex: 20%;
$content-flex: calc(100% - #{$side-bar-flex});
.header {
    height: $header-height;
}
.main {
    display: flex;
    height: $main-height;
    .side-bar {
        flex: $side-bar-flex;
    }
    .content {
        flex: $content-flex;
        margin: $space-md;
    }
}
</style>
