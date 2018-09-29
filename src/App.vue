<template>

  <div class="super_container">

    <!-- Header -->
    <blog-header :links="links" />

    <!-- Home -->

    <blog-home :articles="homeArticles" />

    <!-- Page Content -->
    <blog-content :categories="categories"  :newestArticles="newestArticles" :popularArticles="popularArticles" />

    <!-- footer -->
    <blog-footer />
  </div>
</template>

<script>
import BlogFooter from '@c/BlogFooter'
import BlogHeader from '@c/BlogHeader'
import BlogHome from '@views/BlogHome'
import BlogContent from '@views/BlogContent'
import { getNavLinks, getHomeArticles, getCategories, getNewestArticles, getPopularArticles } from '@api/api'

export default {
  components: {
    BlogFooter, BlogHeader, BlogHome, BlogContent
  },
  data () {
    return {
      links: [],
      homeArticles: [],
      categories: [],
      newestArticles: [],
      popularArticles: []
    }
  },
  mounted () {
    this.fetchNavLinks()
    this.fetchHomeArticles()
    this.fetchCategories()
    this.fecthNewestArticles()
    this.fecthPopularArticles()
  },
  methods: {
    async fetchNavLinks () {
      const links = await getNavLinks()
      this.links = links.data
    },
    async fetchHomeArticles () {
      const articles = await getHomeArticles()
      this.homeArticles = articles.data
    },
    async fetchCategories () {
      const categories = await getCategories()
      this.categories = categories.data
    },
    async fecthNewestArticles () {
      const newestArticles = await getNewestArticles()
      this.newestArticles = newestArticles.data
    },
    async fecthPopularArticles () {
      const popularArticles = await getPopularArticles()
      this.popularArticles = popularArticles.data
    }
  }
}
</script>

<style lang="scss">
</style>
