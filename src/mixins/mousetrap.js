import Mousetrap from 'mousetrap'
import router from '../router'
import $ from 'jquery'

export default {
  created: function () {
    Mousetrap.bind(
      'h',
      function () {
        router.push({ name: 'home' })
      },
      'keyup'
    )
    Mousetrap.bind('b', e => {
      e.preventDefault()
      $('html,body').animate(
        {
          scrollTop: $(document).height()
        },
        500
      )
    })
    Mousetrap.bind('t', e => {
      e.preventDefault()
      $('html,body').animate(
        {
          scrollTop: 0
        },
        500
      )
    })
    Mousetrap.bind('s', e => {
      e.preventDefault()
      if (router.currentRoute.path === '/articles') {
        let ele = $('#search-input')
        ele.focus()
      } else {
        let ele = $('#search_input')
        ele.focus()
      }
    })
  }
}
