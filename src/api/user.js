import ajax from './ajax'

const BASE_URL = process.env.VUE_APP_URL

export const login = () => ajax(`${BASE_URL}/login/github`)

export const me = () => ajax(`${BASE_URL}/me`, {}, 'post')
