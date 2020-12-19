import { reactive, toRefs, watchEffect } from 'vue'
import userApi, { User } from '@/api/user'
import { ResponseData } from './responseData'

export const useGetUsersReactive = () => {
    const state = reactive<ResponseData<User[]>>({
        data: [],
        loading: true,
    })

    watchEffect(async () => {
        try {
            const res = await userApi.getUsers()
            const data = await res.data
            state.data = data
            state.loading = false
        } catch (error) {
            state.loading = false
            console.log('error', error)
        }
    })
    return toRefs(state)
}
