import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/index.vue'
import submit from '../pages/submit.vue'


export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: home,
    alias: '/pages/index'
  }, {
    path: '/submit',
    name: 'index',
    component: submit,
    alias: '/pages/submit'
  }]
})
