import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import VueChatScroll from 'vue-chat-scroll'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
Vue.use(VeeValidate, {
  events: 'change|blur'
})

Vue.use(VueChatScroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
