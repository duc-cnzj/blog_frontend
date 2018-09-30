<template>

  <div class="super_container">

    <!-- Header -->
    <blog-header :links="links" />

    <!-- Home -->
    <router-view name="home"></router-view>

    <!-- Page Content -->
    <router-view name="content"></router-view>

    <!-- footer -->
    <blog-footer />
  </div>
</template>

<script>
import BlogFooter from '@c/BlogFooter'
import BlogHeader from '@c/BlogHeader'
import BlogHome from '@views/BlogHome'
import BlogContent from '@views/BlogContent'
import { getNavLinks } from '@api/api'

export default {
  components: {
    BlogFooter, BlogHeader, BlogHome, BlogContent
  },
  data () {
    return {
      links: [],
      homeArticles: []
    }
  },
  mounted () {
    this.fetchNavLinks()
  },
  methods: {
    async fetchNavLinks () {
      const links = await getNavLinks()
      this.links = links.data
    }

  }
}
</script>

<style lang="scss">
</style>
