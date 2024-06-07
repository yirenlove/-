import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import VueRouter from 'vue-router'
import 'amfe-flexible'
import store from './store'
Vue.config.productionTip = false


Vue.use(Vuex).use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
