import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../components/HelloWorld.vue')
    },
    {
      path: '/status',
      name: 'status',
      component: () => import('../components/AlphaSoulStatus.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../components/NetGame.vue')
    },
    {
      path: '/tool',
      name: 'tool',
      component: () => import('../components/MajMain.vue')
    }
  ]
})