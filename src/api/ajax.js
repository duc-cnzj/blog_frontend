import axios from 'axios'
// import router from '../router'
axios.defaults.headers.common['accept'] = 'application/json'

export default function ajax (url, data = {}, type = 'get') {
  // console.log(data)

  return new Promise((resolve, reject) => {
    axios[type](url, data)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function ({ response }) {
        // let { status } = response
        // let currentPath = router.currentRoute.path
        // switch (status) {
        //   case 404:
        //     if (currentPath === '/' || currentPath === '/home') {
        //       console.log('home or /')

        //       break
        //     }

        //     router.push('/404')
        //     break

        //   default:
        //     break
        // }

        reject(response)
      })
  })
}
