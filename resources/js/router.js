import VueRouter from 'vue-router'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Subject from './components/Subject'
import SubjectContent from './components/SubjectContent'
import Grades from './components/Grade'
import Ledger from './components/Ledger'
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/subject',
      component: Subject
    },
    {
      path: '/subjectcontent',
      component: SubjectContent
    },
    {
      path: '/grades',
      component: Grades
    },
    {
      path: '/ledger',
      component: Ledger
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

export default router
