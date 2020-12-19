<template>
    <div class="item">
        <div class="name" @click="redirectToDetail">
            <span>{{ name }}</span>
        </div>
        <div class="actions">
            <router-link :to="{ name: 'UserDetail', params: { userId: id } }">
                Detail
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { User } from '@/api/user'
import router from '@/router'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'UserItem',
    props: {
        user: Object as PropType<User>,
    },
    methods: {
        redirectToDetail() {
            router.push({ name: 'UserDetail', params: { userId: this.id } })
        },
    },
    computed: {
        id(): number {
            return this.user ? this.user.id : -1
        },
        name(): string {
            return this.user ? this.user.name : ''
        },
    },
})
</script>

<style scoped lang="scss">
@import '@/scss/_variables';
.item {
    display: flex;
    align-items: center;
    border: 1px solid $color-blue-principal;
    margin: $space-sm;
    .name {
        flex: 80%;
        display: flex;
        padding: $space-md;
        height: 100%;
        cursor: pointer;
        color: $color-blue-principal;
        &:hover {
            background: $color-blue-principal;
            color: $color-white;
        }
    }
    .actions {
        flex: 20%;
        display: flex;
        justify-content: center;
    }
}
</style>
