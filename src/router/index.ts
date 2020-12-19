import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TheMain from '@/layouts/TheMain.vue'
import UserView from '@/views/user/UserView.vue'
import UserDetailView from '@/views/user/UserDetailView.vue'
import WelcomeView from '@/views/WelcomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'TheMain',
        component: TheMain,
        children: [
            {
                path: '/',
                name: 'Welcome',
                component: WelcomeView,
            },
            {
                path: '/users',
                name: 'Users',
                component: UserView,
            },
            {
                path: '/users/:userId',
                name: 'UserDetail',
                component: UserDetailView,
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
