import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
import router from './router'
import store from './store'
Vue.config.productionTip = false
// Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
