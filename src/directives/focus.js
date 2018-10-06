let DucFocus = {}

DucFocus.install = function (Vue, options) {
  // 2. 添加全局资源
  Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el, binding) {
      if (binding.value) {
        // 聚焦元素
        el.focus()
      }
    }
  })
}

export default DucFocus
