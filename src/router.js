import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            // 懒加载
            component: () =>
                import ('./views/Home.vue')
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
        {
            path: '/menu',
            name: 'menu',
            // 懒加载
            component: () =>
                import ('./views/Pizza.vue')
        },
        {
            path: '/manage',
            name: 'manage',
            // 懒加载
            component: () =>
                import ('./views/Manage.vue')
        },
        {
            path: '/about',
            name: 'about',
            // 懒加载
            component: () =>
                import ('./views/About.vue')
        },
        {
            path: '*',
            redirect: "/"
        },
    ]
})