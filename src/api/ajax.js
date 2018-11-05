import axios from 'axios'
import NProgress from 'nprogress'

axios.defaults.headers.common['accept'] = 'application/json'

export default function ajax (url, data = {}, type = 'get') {
  return new Promise((resolve, reject) => {
    axios[type](url, data)
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
