import Vue from 'vue'
import VueRouter from 'vue-router'
import MemeProfile from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'MemeProfile',
        component: MemeProfile
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = new VueRouter({
    routes
})

export default router