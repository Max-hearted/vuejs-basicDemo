// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'


Vue.config.productionTip = false

Vue.use(vueRouter)
Vue.use(vueResource)

Vue.component('users',Users);
Vue.component('app-header',Header);
Vue.component('app-footer',Footer);

const router = new vueRouter({
  routes: [
    {path:'/', component: Home}
  ],
  mode:'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
