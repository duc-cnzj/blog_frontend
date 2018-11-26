<template>
  <div class="page_content">
    <div class="container">
      <div class="row row-lg-eq-height">
        <div class="col-lg-12">
          <div class="section_content" v-if="articles !== null && articles.length !== 0">

            <div class="card-deck-wrapper duc">
              <div class="card-deck" v-for="(items, index) in chunkArticles" :key="index">
                <custom-card-with-image v-for="item in items" :key="item.id"
                    :image="item.headImage"
                    :content="getHighlightContent(item)"
                    :path="'/articles/'+item.id"
                    :title="getHighlight(item, 'title')"
                    :author="item.author.name"
                    :author_url="'/authors/'+item.author.id"
                    :created_at="item.created_at"
                    :desc="getHighlight(item, 'desc')" />
                <template v-if="items.length < chunkNum">
                  <custom-card-with-image class="duc-none" v-for="(item, index) in Array(chunkNum - items.length)" :key="index" />
                </template>
              </div>
            </div>

            <div v-if="showPaginate">
              <paginator :dataSet="dataSet" @changed="changed" />
            </div>
            <hr />
          </div>

          <div class="section_content" v-else-if="articles === null">
            <loading />
          </div>

          <div class="section_content" v-else>
            <h1>未搜索到数据</h1>
            <hr />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LargestCardWithImage from '@c/LargestCardWithImage'
import CustomCardWithImage from '@c/CustomCardWithImage'
import Loading from '@c/Loading'
import Paginator from '@c/Paginator'
import _ from 'lodash'
import { getArticles, elasticSearch } from '@api/api'

export default {
  components: {
    LargestCardWithImage, Paginator, Loading, CustomCardWithImage
  },

  data () {
    return {
      articles: null,
      dataSet: {},
      showPaginate: true,
      chunkNum: 3
    }
  },

  computed: {
    chunkArticles () {
      return _.chunk(this.articles, this.chunkNum)
    }
  },

  created () {
    this.searchListen()
    this.fetchArticles()
  },

  methods: {
    getHighlight (item, field, array = false) {
      if (item === []) {
        return
      }

      if (array) {
        return item.highlight !== undefined && item.highlight[field] !== null ? item.highlight[field] : _.map(item.row[field], 'name').join(',')
      }

      return item.highlight !== undefined && item.highlight[field] !== null ? item.highlight[field] : item[field]
    },

    getHighlightContent (item) {
      if (item === []) {
        return
      }

      return item.highlight !== undefined && item.highlight['content'] !== null ? item.highlight['content'] : null
    },

    searchListen () {
      window.events.$on('search', (value) => {
        if (value) {
          elasticSearch(value).then(({ data }) => {
            this.articles = data
            this.showPaginate = false
          })
        } else {
          this.fetchArticles()
          this.showPaginate = true
        }
      })
    },

    changed (page) {
      this.fetchArticles(page)
    },

    async fetchArticles (page) {
      const articles = await getArticles(page)
      this.articles = articles.data
      this.dataSet = Object.assign(articles.links, articles.meta)
    }
  },
  destroyed () {
    window.events.$off('search')
  }

}
</script>

<style lang="scss" scoped>
.duc-none {
  opacity: 0;
}
.duc {
  margin-bottom: 30px;
}
</style>
