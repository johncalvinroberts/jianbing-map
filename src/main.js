import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Router from 'vue-router'
import VueAMap from 'vue-amap'
import { amapsKey } from '@/keys'

Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


const isMiniProgram = process.env.TARGET === 'mp'

Vue.mixin({
  data() {
    return {
      router: '/'
    }
  },
  methods: {
    newroot() {
      return this.$route
    },
    navigateTo(url) {
      isMiniProgram ? wx.navigateTo({ url: url }) : this.$router.push(url)
    },
    reLaunchTo(url) {
      isMiniProgram ? wx.reLaunch({ url: url }) : this.$router.replace(url)
    }
  }
})

if (!isMiniProgram) {
  Vue.use(Router)
  Vue.use(VueAMap)
  VueAMap.initAMapApiLoader({
    key: amapsKey,
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    v: '1.4.4'
  })
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store
  })
}
