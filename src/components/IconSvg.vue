<template>
    <i
      class="iconfont"
      @click="$emit('svg-clicked')"
      :class="getClass"
    ></i>

</template>

<script>
export default {
  props: ['name'],

  computed: {
    getClass () {
      return 'icon-' + this.name
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("//at.alicdn.com/t/font_975559_213fxyzs6j1.css");

.iconfont {
  font-family: "iconfont" !important;
  font-size: 32px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;

  &:hover {
      color: green
  }
}
</style>
