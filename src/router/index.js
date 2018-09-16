import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/index/index.vue'


export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: home,
    alias: '/pages/index/main'
  }]
})
