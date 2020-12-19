import userApi, { User } from '@/api/user'
import { reactive, toRefs, watchEffect } from 'vue'
import { ErrorType, ResponseData } from './responseData'

export const useGetUserReactive = (idUser: number) => {
    const state = reactive<ResponseData<User | null>>({
        data: null,
        loading: true,
        error: null,
    })

    watchEffect(async () => {
        try {
            const res = await userApi.getUser(idUser)
            const data = await res.data
            state.data = data
            state.loading = false
        } catch (error) {
            state.loading = false
            state.error = {
                type: ErrorType.danger,
                message: error.message,
            }
        }
    })
    return toRefs(state)
}
