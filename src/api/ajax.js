import axios from 'axios'
import NProgress from 'nprogress'
import { getToken } from '@/utils/token'

var instance = axios.create()
instance.defaults.headers.common['accept'] = 'application/json'

instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    NProgress.inc()

    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = getToken() || ''
    }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    NProgress.done()

    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export { instance as axios }

export default function ajax (url, data = {}, type = 'get') {
  return new Promise((resolve, reject) => {
    instance[type](url, data)
      .then(function (response) {
        resolve(response)
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
