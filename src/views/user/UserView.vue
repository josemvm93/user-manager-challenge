<template>
    <Loading v-if="loading" />
    <UserList v-else :users="users" />
    <ErrorAlert v-if="error" :error="error" />
</template>

<script lang="ts">
import UserList from '@/components/user/UserList.vue'
import Loading from '@/components/common/Loading.vue'
import ErrorAlert from '@/components/common/ErrorAlert.vue'
import { useGetUsersReactive } from '@/compositions/useGetUsersReactive'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UserView',
    components: {
        Loading,
        UserList,
        ErrorAlert,
    },
    setup() {
        const { loading, data: users, error } = useGetUsersReactive()
        return { users, loading, error }
    },
})
</script>
