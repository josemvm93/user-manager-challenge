<template>
    <div class="user-headers">
        <div class="name">
            <span>{{ name }}</span>
        </div>
        <div class="actions">
            <span>{{ actions }}</span>
        </div>
    </div>
    <UserItem v-for="user in users" :key="user.id" :user="user" />
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import UserItem from './UserItem.vue'
import { User } from '@/api/user'

export default defineComponent({
    name: 'UserList',
    components: {
        UserItem,
    },
    computed: {
        name() {
            return 'Name'
        },
        actions() {
            return 'Actions'
        },
    },
    props: {
        users: Object as PropType<User[]>,
    },
})
</script>
<style scoped lang="scss">
@import '@/scss/_variables';
.user-headers {
    display: flex;
    align-items: center;
    .name {
        flex: 80%;
        display: flex;
        padding: $space-md;
        color: $color-black;
        justify-content: flex-start;
    }
    .actions {
        flex: 20%;
        display: flex;
        justify-content: center;
        color: $color-black;
    }
}
</style>
