<template>
    <div id="nav">
        <ul>
            <li>
                <router-link :to="{ name: 'Users' }"> Users </router-link>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'
export default defineComponent({
    name: 'TheSideBar',
    methods: {
        redirectToUsers() {
            router.push({ name: 'Users' })
        },
    },
})
</script>
<style lang="scss" scoped>
@import '@/scss/_variables';
#nav {
    padding: $space-md;
    max-width: 200px;
    border: 5px solid $color-blue-principal;
    ul {
        display: flex;
        padding-left: 0;
        margin: 0;
        li {
            display: flex;
            width: 100%;
            cursor: pointer;
            justify-content: flex-start;
            a {
                display: flex;
                width: 100%;
                padding: $space-md;
                align-content: flex-start;
                text-decoration: none;
                font-weight: bold;
                color: $color-black;
                &.router-link-exact-active {
                    background-color: $color-blue-principal;
                    color: $color-white;
                }
            }
            &:hover {
                background-color: $color-blue-principal;
                a {
                    color: $color-white;
                }
            }
        }
    }
}
</style>
