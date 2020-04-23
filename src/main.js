import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)

// axios
import axios from "./axios"
Vue.prototype.$http = axios

// Vue Router
import router from './router'

// Auth Plugin
import './plugins/auth'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
