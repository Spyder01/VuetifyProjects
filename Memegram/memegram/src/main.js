import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vue2TouchEvents from 'vue2-touch-events'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')