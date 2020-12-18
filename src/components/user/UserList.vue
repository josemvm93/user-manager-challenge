<template>
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
    props: {
        users: Object as PropType<User[]>,
    },
})
</script>
