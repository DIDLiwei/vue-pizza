import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/https'
Vue.config.productionTip = false
axios.defaults.baseURL = "https://wd4782151544jfcwop.wilddogio.com"
Vue.prototype.$axios = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')