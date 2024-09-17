import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Albums from '../views/Albums'
import About from '../views/About'
import Scores from '../views/Scores.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/albums',
        name: 'Albums',
        component: Albums,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/scores',
        name: 'Scores',
        component: Scores,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router