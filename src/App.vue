<template>

  <div>
    <transition name="out" leave-active-class="animated zoomOut">
      <div v-if="loading">
          <component v-bind:is="currentTabComponent"></component>
      </div>
    </transition>

    <div class="super_container" v-if="! loading" v-cloak>
      <!-- Header -->
      <blog-header :links="links" :scrolled="scrolled" />

      <!-- Home -->
      <router-view name="home"></router-view>

      <!-- Page Content -->
      <!-- <transition name="fade" enter-active-class="animated tada"> -->
      <!-- <keep-alive> -->
      <router-view name="content"></router-view>
      <!-- </keep-alive> -->
      <!-- </transition> -->
      <back-top/>
      <!-- footer -->
      <blog-footer />
    </div>
  </div>
</template>

<script>
import BlogFooter from '@c/BlogFooter'
import BlogHeader from '@c/BlogHeader'
import BlogHome from '@views/BlogHome'
import BlogContent from '@views/BlogContent'
import { getNavLinks } from '@api/api'
import _ from 'lodash'

export default {
  components: {
    BlogFooter,
    BlogHeader,
    BlogHome,
    BlogContent,
    HomeLoadingTwo: () => import('@c/Loading/HomeLoadingOne'),
    HomeLoadingOne: () => import('@c/Loading/HomeLoadingTwo'),
    HomeLoadingThree: () => import('@c/Loading/HomeLoadingThree'),
    HomeLoadingFour: () => import('@c/Loading/HomeLoadingFour'),
    // HomeLoadingFive: () => import('@c/Loading/HomeLoadingFive'),
    HomeLoadingSix: () => import('@c/Loading/HomeLoadingSix')
  },
  data () {
    return {
      loading: true,
      loadingName: ['one', 'two', 'three', 'four', 'six'],
      links: [],
      homeArticles: [],
      scrolled: false
    }
  },

  computed: {
    currentTabComponent () {
      return 'home-loading-' + _.sample(this.loadingName)
    }
  },
  created () {
    window.Echo.channel('article.created')
      .listen('ArticleCreated', (e) => {
        this.$Notice.info({
          title: `作者：${e.author}发布了新文章`,
          desc: `《${e.title}》：${e.desc}，<a href="/articles/${e.id}" target='_blank'>点击链接查看</a>。`,
          duration: 0
        })
      })
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
