export function getToken () {
  let token = window.localStorage.getItem('socialite_token')
  if (token) {
    return token
  } else {
    return ''
  }
}

export function setToken (value) {
  window.localStorage.setItem('socialite_token', value)
}
