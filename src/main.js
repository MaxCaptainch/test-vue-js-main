import Vue from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
Vue.config.productionTip = false
Vue.component('Paginate', Paginate)
new Vue({
  render: h => h(App),
}).$mount('#app')
