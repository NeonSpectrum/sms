import VueRouter from 'vue-router'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/profile',
            component: Profile
        }
    ],
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    }
})

export default router
