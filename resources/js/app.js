import url from 'url'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import VueSax from 'vuesax'
import VueGlobalVariable from 'vue-global-var'
import router from './router'
import Base from './components/App'
import VueAuthenticate from 'vue-authenticate'
require('./bootstrap')
Vue.use(VueAuthenticate, {
    baseUrl: 'http://localhost:3000'
})
Vue.use(VueSax)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAxios, window.axios)

Vue.use(VueGlobalVariable, {
    globals: {
        config: window.config,
        user: window.config.user,
        url: path => {
            return url.resolve(window.config.url.base + '/', path)
        },
        storage: path => {
            return url.resolve(window.config.url.storage + '/', path)
        }
        // urls: [{ title: 'LMS', url: '/' }]
    }
})

new Vue({
    router,
    render: h => h(Base)
}).$mount('#app')
