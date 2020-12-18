import axios from 'axios'

export interface User {
    id: number
    name: string
    email: string
}

export default {
    getUsers() {
        return axios.get(process.env.VUE_APP_ROOT_API + 'users')
    },
    getUser(id: number) {
        return axios.get(
            process.env.VUE_APP_ROOT_API + 'users/' + id.toString()
        )
    },
}
