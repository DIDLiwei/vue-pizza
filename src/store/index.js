import Vue from 'vue'
import Vuex from 'vuex'
import menus from './modules/menus'
import isLogin from './modules/isLogin'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        menus,
        isLogin,
        user
    }
})