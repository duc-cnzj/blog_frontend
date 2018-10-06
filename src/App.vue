<template>

  <div>
    <transition name="out" leave-active-class="animated zoomOut">
      <div v-if="loading">
        <home-loading />
      </div>
    </transition>

    <div class="super_container" v-if="! loading">
      <!-- Header -->
      <blog-header :links="links" :scrolled="scrolled" />

      <!-- Home -->
      <router-view name="home"></router-view>

      <!-- Page Content -->
      <transition name="fade" enter-active-class="animated tada">
        <router-view name="content"></router-view>
      </transition>

      <!-- footer -->
      <blog-footer />
    </div>
  </div>
</template>

<script>
import HomeLoading from '@c/HomeLoading'
import BlogFooter from '@c/BlogFooter'
import BlogHeader from '@c/BlogHeader'
import BlogHome from '@views/BlogHome'
import BlogContent from '@views/BlogContent'
import { getNavLinks } from '@api/api'

export default {
  components: {
    BlogFooter, BlogHeader, BlogHome, BlogContent, HomeLoading
  },
  data () {
    return {
      loading: true,
      links: [],
      homeArticles: [],
      scrolled: false
    }
  },
  mounted () {
    setTimeout(() => { this.loading = false }, 1000)
    window.addEventListener('scroll', this.handleScroll)
    this.fetchNavLinks()
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY !== 0
    },
    async fetchNavLinks () {
      const links = await getNavLinks()
      this.links = links.data
    }

  }
}
</script>

<style lang="scss">
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter, .fade-leave-to{
//   opacity: 0;
// }
</style>
