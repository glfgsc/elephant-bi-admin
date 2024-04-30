import {createRouter,createWebHistory} from 'vue-router'
import Login from '@/views/login/Login.vue'
import Index from '@/views/index/Index.vue'
<<<<<<< HEAD

=======
import SqlEdit from '@/views/index/sql/SqlEdit.vue'
>>>>>>> 7b51a8c (Update)
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
<<<<<<< HEAD
=======
    },
    {
        path: '/sql/edit',
        name: 'SqlEdit',
        component: SqlEdit
>>>>>>> 7b51a8c (Update)
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router