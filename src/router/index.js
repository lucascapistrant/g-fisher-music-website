import {createRouter, createWebHistory} from 'vue-router'
import Albums from '../views/Albums'

const routes = [
    {
        path: '/albums',
        name: 'Albums',
        component: Albums
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router