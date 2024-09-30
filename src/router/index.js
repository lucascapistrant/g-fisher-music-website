import { createRouter, createWebHistory } from 'vue-router'
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
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 }; // Vue 3 uses 'left' and 'top' instead of 'x' and 'y'
        }
    }
})

export default router
