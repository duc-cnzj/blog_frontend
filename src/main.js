import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
import 'bootstrap'
import './styles/index.scss'
import toastr from 'toastr'
import toastrConfig from '@utils/toastr'
import Focus from './directives/focus'
import DucHighlight from './directives/Highlight'
import VueLazyload from 'vue-lazyload'
import image404 from './assets/404.jpg'
import imageLoading from './utils/randomLoadingImage'
import 'iview/dist/styles/iview.css'
import { BackTop } from 'iview'
// import NProgress from 'nprogress'

Vue.component('BackTop', BackTop)
Vue.use(Focus)
Vue.use(DucHighlight)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: image404,
  loading: imageLoading,
  attempt: 3
})

toastr.options = toastrConfig

window.toastr = toastr
window.toastrError = false

Vue.config.productionTip = false

window.events = new Vue()

window.search = function (value) {
  window.events.$emit('search', value)
}

router.beforeEach((to, from, next) => {
  // NProgress.start()
  // NProgress.inc()
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
