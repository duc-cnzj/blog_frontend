import axios from 'axios'
import NProgress from 'nprogress'
import { getToken } from '@/utils/token'

var instance = axios.create()
instance.defaults.headers.common['accept'] = 'application/json'
axios.defaults.headers.common['Authorization'] = getToken() || ''

instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    NProgress.inc()

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

export default function ajax (url, data = {}, type = 'get') {
  return new Promise((resolve, reject) => {
    instance[type](url, data)
      .then(function (response) {
        NProgress.done()
        resolve(response.data)
      })
      .catch(function (error) {
        // console.log(error.message)

        if (error.message === 'Network Error' && window.toastrError === false) {
          window.toastr.error('请检查网络是否通畅')
          window.toastrError = true
        }

        reject(error)
      })
  })
}
