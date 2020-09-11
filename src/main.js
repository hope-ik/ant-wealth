import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
Vue.use(less)

import 'vant/lib/index.css'

import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')