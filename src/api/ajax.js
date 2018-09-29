import axios from 'axios'

export default function ajax (url, data, type = 'get') {
  return new Promise((resolve, reject) => {
    axios[type](url)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
};
