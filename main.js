import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-139946817-1'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
