
import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import Detail from './components/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'skills',
        component: Skills
      },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
        path: '/skills/:name',
        name: 'detail',
        component: Detail
      }

  ]
})