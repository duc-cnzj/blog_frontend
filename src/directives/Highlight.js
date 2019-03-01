import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-dark.css' // 样式文件
// import 'highlight.js/styles/arta.css' // 样式文件
import 'highlight.js/styles/monokai-sublime.css' // 样式文件

let DucHighlight = {}

DucHighlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach(block => {
      hljs.highlightBlock(block)
    })
  })
}

export default DucHighlight
