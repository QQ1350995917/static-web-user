import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/views/session/SignIn'
import SignUp from '@/views/session/SignUp'
import MineIndex from '@/views/mine/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/mine',
      name: 'MineIndex',
      component: MineIndex
    },
    {
      path: '/mine/org',
      name: 'MineIndex',
      component: MineIndex
    },
    {
      path: '/mine/org/create',
      name: 'MineIndex',
      component: MineIndex
    },
    {
      path: '/mine/org/search',
      name: 'MineIndex',
      component: MineIndex
    }
  ]
})
