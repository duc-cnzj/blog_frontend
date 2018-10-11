import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
import 'bootstrap'
import './styles/index.scss'
import toastr from 'toastr'
import toastrConfig from '@utils/toastr'
import Focus from './directives/focus'
import DucHighlight from './directives/Highlight'

Vue.use(Focus)
Vue.use(DucHighlight)

console.log(process.env.VUE_APP_URL)

toastr.options = toastrConfig

window.toastr = toastr

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
