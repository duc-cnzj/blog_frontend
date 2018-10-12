<template>
    <div class="page_content">
        <div class="container">
            <div class="row row-lg-eq-height">
                <div class="col-lg-9 offset-lg-1">
                    <div class="section_content"  v-if="articles.length > 0">

                        <div class="card-deck-wrapper duc">
                            <div class="card-deck" v-for="item in articles" :key="item.id">
                                <largest-card-with-image :image="item.headImage" :path="'/articles/'+item.id" :title="item.title" :author="item.author.name" :author_url="'/authors/'+item.author.id" :created_at="item.created_at" :desc="item.desc" />
                            </div>
                        </div>

                        <paginator :dataSet="dataSet" @changed="changed" />
                        <hr />
                    </div>
                    <div class="section_content" v-else>
                        <loading />
                    </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import LargestCardWithImage from '@c/LargestCardWithImage'
import Loading from '@c/Loading'
import Paginator from '@c/Paginator'
import { getArticles } from '@api/api'

export default {
  components: {
    LargestCardWithImage, Paginator, Loading
  },

  data () {
    return {
      articles: [],
      dataSet: {}
    }
  },

  created () {
    this.fetchArticles()
  },

  methods: {
    changed (page) {
      this.fetchArticles(page)
    },

    async fetchArticles (page) {
      const articles = await getArticles(page)
      this.articles = articles.data
      this.dataSet = Object.assign(articles.links, articles.meta)
    }
  }
}
</script>

<style lang="scss" scoped>
.duc {
  margin-bottom: 30px;
}
</style>
