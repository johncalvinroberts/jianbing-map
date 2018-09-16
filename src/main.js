import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

const isMiniProgram = process.env.TARGET === 'mp'

if (!isMiniProgram) {
  Vue.use(Router)
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store
  })
}
