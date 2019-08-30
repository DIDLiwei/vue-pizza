import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'landing',
            component: Landing
        },
        {
            path: '/login',
            name: 'login',
            // 懒加载
            component: () =>
                import ('./views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            // 懒加载
            component: () =>
                import ('./views/Register.vue')
        },
    ]
})