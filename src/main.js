import Vue from 'vue'
import App from './App.vue'
import sakana from 'sakana-widget/lib'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
