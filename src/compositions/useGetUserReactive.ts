import userApi, { User } from '@/api/user'
import { reactive, toRefs, watchEffect } from 'vue'
import { ResponseData } from './responseData'

export const useGetUserReactive = (idUser: number) => {
    const state = reactive<ResponseData<User | null>>({
        data: null,
        loading: true,
    })

    watchEffect(async () => {
        try {
            const res = await userApi.getUser(idUser)
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
