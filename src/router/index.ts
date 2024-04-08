import {createRouter,createWebHistory} from 'vue-router'
import Login from '@/views/login/Login.vue'
import Index from '@/views/index/Index.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router