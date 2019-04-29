import url from 'url'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import VueSax from 'vuesax'
import VueGlobalVariable from 'vue-global-var'
import router from './router'
import Base from './components/App'

require('./bootstrap')

Vue.use(VueAxios, window.axios)

Vue.use(VueSax)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueGlobalVariable, {
  globals: {
    config: window.config,
    user: window.config.user,
    userType: window.config.userType,
    url: path => {
      return url.resolve(window.config.url.base + '/', path)
    },
    storage: path => {
      return url.resolve(window.config.url.storage + '/', path)
    },
    urls: {
      student: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Profile', url: '/profile' },
        { title: 'Grades', url: '/grades' },
        { title: 'Ledger', url: '/ledger' }
      ],
      faculty: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Profile', url: '/profile' },
        { title: 'Grades', url: '/grades' },
        { title: 'Subject', url: '/subject' }
      ],
      parent: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Student', url: '/student' },
        { title: 'Ledger', url: '/ledger' }
      ]
    }
  }
})

new Vue({
  router,
  render: h => h(Base)
}).$mount('#app')
