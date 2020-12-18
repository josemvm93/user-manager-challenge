<template>
    <Loading v-if="loading" />
    <UserList v-else :users="users" />
</template>

<script lang="ts">
import UserList from '@/components/user/UserList.vue'
import Loading from '@/components/common/Loading.vue'
import { useGetUsersReactive } from '@/compositions/useGetUsersReactive'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'UserView',
    components: {
        Loading,
        UserList,
    },
    setup() {
        const usersState = useGetUsersReactive()
        const loading = computed(() => {
            return usersState.loading
        })
        const users = computed(() => {
            return usersState.data
        })
        return { users, loading }
    },
})
</script>
