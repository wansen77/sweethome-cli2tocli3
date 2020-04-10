import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VeeValidate from 'vee-validate'
import zhTW_Validate from 'vee-validate/dist/locale/zh_TW'
import currencyFilter from './filters/currency'
import './bus'


axios.defaults.withCredentials = true

Vue.use(VueAxios, axios)
Vue.component('Loading', Loading)
Vue.use(VeeValidate, { events: 'input|blur' })
VeeValidate.Validator.localize('zh_TW', zhTW_Validate)
Vue.filter('currency', currencyFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
