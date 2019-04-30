import VueRouter from 'vue-router'

import Login from './components/Login'

import StudentDashboard from './components/student/Dashboard'
import FacultyDashboard from './components/faculty/Dashboard'
import Profile from './components/Profile'

import StudentSubject from './components/student/Subject'
import FacultySubject from './components/faculty/Subject'

import StudentSubjectContent from './components/student/SubjectContent'

import StudentGrades from './components/student/Grade'
import FacultyGrades from './components/faculty/Grade'
import Ledger from './components/Ledger'
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/dashboard',
      component: window.config.userType.type == 'Student' ? StudentDashboard : FacultyDashboard
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/subject',
      component: window.config.userType.type == 'Student' ? StudentSubject : FacultySubject
    },
    {
      path: '/subjectcontent',
      component: StudentSubjectContent
    },
    {
      path: '/grades',
      component: window.config.userType.type == 'Student' ? StudentGrades : FacultyGrades
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
