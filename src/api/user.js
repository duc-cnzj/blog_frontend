import { axios, ajax } from './ajax'
import { getToken } from '@/utils/token'

const BASE_URL = process.env.VUE_APP_URL

export const login = () => ajax(`${BASE_URL}/login/github`)

export const me = (token = '') => {
  return axios({
    method: 'post',
    headers: {
      Authorization: token || getToken()
    }
  })
}
