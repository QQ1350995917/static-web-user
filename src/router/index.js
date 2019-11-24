import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/views/session/SignIn'
import SignUp from '@/views/session/SignUp'
import LayoutMine from '@/container/Mine'
import Dashboard from '@/views/dashboard/Index'
import Organization from '@/views/organization/Index'
import OrganizationOfJoined from '@/views/organization/Joined'
import OrganizationOfCreated from '@/views/organization/Created'
import OrganizationOfApply from '@/views/organization/Apply'
import OrganizationList from '@/views/organization/List'
import OrganizationReview from '@/views/organization/ReviewPending'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mine',
      redirect: '/mine/dashboard',
      name: 'LayoutMine',
      component: LayoutMine,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: {title: '首页', icon: 'fa fa-dashboard fa-lg', noCache: true}
        },
        {
          path: 'organization', name: 'Organization', component: Organization,
          children: [
            {path: 'list', name: 'List', component: OrganizationList},
            {path: 'joined', name: 'Joined', component: OrganizationOfJoined},
            {path: 'created', name: 'Created', component: OrganizationOfCreated},
            {path: 'apply', name: 'Apply', component: OrganizationOfApply},
            {path: 'review', name: 'Review', component: OrganizationReview},
          ]
        },
        {
          path: 'HornBook', name: 'HornBook', component: Organization,
          children: [
            {path: 'list', name: 'List', component: OrganizationList},
            {path: 'created', name: 'Created', component: OrganizationOfCreated},
          ]
        },
        {
          path: 'Baby', name: 'Baby', component: Organization,
          children: [
            {path: 'list', name: 'List', component: OrganizationList},
            {path: 'upload', name: 'upload', component: OrganizationOfCreated},
          ]
        },
      ]
    },
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
    }
  ]
})
