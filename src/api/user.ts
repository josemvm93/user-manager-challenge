import axios from 'axios'

export interface User {
    id: number
    name: string
    email: string
}

const usersURL = process.env.VUE_APP_ROOT_API + 'users/'

export default {
    getUsers() {
        return axios.get(usersURL)
    },
    getUser(id: number) {
        return axios.get(usersURL + id.toString())
    },
}
