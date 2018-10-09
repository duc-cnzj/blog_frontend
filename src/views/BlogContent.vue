<template>
  <div class="page_content">
    <div class="container">
      <div class="row row-lg-eq-height">
        <!-- Main Content -->

        <div class="col-lg-9">
          <div class="main_content">

            <!-- Blog Section - Don't Miss -->

            <div class="blog_section">
              <div class="section_panel d-flex flex-row align-items-center justify-content-start">
                <div class="section_title">最新文章</div>
                <div class="section_tags ml-auto">
                  <ul>
                    <li v-for="(c, i) in top5categories" :key="i" class="duc-li">
                      <router-link :to="'/categories/'+c.id" exact>{{ c.name }}</router-link>
                    </li>
                  </ul>
                </div>

                <div class="section_panel_more" v-if="moreCategories.length > 0">
                  <ul>
                    <li>其他
                      <ul>
                        <li v-for="(c, i) in moreCategories" :key="i" class="more-li">
                          <router-link :to="'/categories/'+c.id" exact>{{ c.name }}</router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div v-if="newestArticles.length > 0">
                <div class="row">
                  <div class="col-sm-8">
                    <div v-if="newestArticles[0] !== undefined">
                      <largest-card-with-image :image="newestArticles[0].headImage" :path="'/articles/'+newestArticles[0].id" :title="newestArticles[0].title" :author="newestArticles[0].author.name" :author_url="'/authors/'+newestArticles[0].author.id" :created_at="newestArticles[0].created_at" :desc="newestArticles[0].desc" />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div v-if="newestArticles[1] !== undefined">
                      <small-card-with-background :image="newestArticles[1].headImage" :path="'/articles/'+newestArticles[1].id" :title="newestArticles[1].title" :author="newestArticles[1].author.name" :author_url="'/authors/'+newestArticles[1].author.id" :created_at="newestArticles[1].created_at" :desc="newestArticles[1].desc" />
                    </div>
                    <div v-if="newestArticles[2] !== undefined">
                      <default-card-no-image :image="newestArticles[2].headImage" :path="'/articles/'+newestArticles[2].id" :title="newestArticles[2].title" :author="newestArticles[2].author.name" :author_url="'/authors/'+newestArticles[2].author.id" :created_at="newestArticles[2].created_at" :desc="newestArticles[2].desc" />
                    </div>
                  </div>
                </div>
                <div class="section_content card-columns">
                  <div v-if="newestArticles[3] !== undefined">
                    <small-card-with-image :image="newestArticles[3].headImage" :path="'/articles/'+newestArticles[3].id" :title="newestArticles[3].title" :author="newestArticles[3].author.name" :author_url="'/authors/'+newestArticles[3].author.id" :created_at="newestArticles[3].created_at" :desc="newestArticles[3].desc" />
                  </div>
                  <div v-if="newestArticles[4] !== undefined">
                    <small-card-with-background :image="newestArticles[4].headImage" :path="'/articles/'+newestArticles[4].id" :title="newestArticles[4].title" :author="newestArticles[4].author.name" :author_url="'/authors/'+newestArticles[4].author.id" :created_at="newestArticles[4].created_at" :desc="newestArticles[4].desc" />
                  </div>
                  <div v-if="newestArticles[5] !== undefined">
                    <default-card-no-image :image="newestArticles[5].headImage" :path="'/articles/'+newestArticles[5].id" :title="newestArticles[5].title" :author="newestArticles[5].author.name" :author_url="'/authors/'+newestArticles[5].author.id" :created_at="newestArticles[5].created_at" :desc="newestArticles[5].desc" />
                  </div>
                  <div v-if="newestArticles[6] !== undefined">
                    <small-card-with-background :image="newestArticles[6].headImage" :path="'/articles/'+newestArticles[6].id" :title="newestArticles[6].title" :author="newestArticles[6].author.name" :author_url="'/authors/'+newestArticles[6].author.id" :created_at="newestArticles[6].created_at" :desc="newestArticles[6].desc" />
                  </div>
                  <div v-if="newestArticles[7] !== undefined">
                    <default-card-no-image :image="newestArticles[7].headImage" :path="'/articles/'+newestArticles[7].id" :title="newestArticles[7].title" :author="newestArticles[7].author.name" :author_url="'/authors/'+newestArticles[7].author.id" :created_at="newestArticles[7].created_at" :desc="newestArticles[7].desc" />
                  </div>
                  <div v-if="newestArticles[8] !== undefined">
                    <default-card-no-image :image="newestArticles[8].headImage" :path="'/articles/'+newestArticles[8].id" :title="newestArticles[8].title" :author="newestArticles[8].author.name" :author_url="'/authors/'+newestArticles[8].author.id" :created_at="newestArticles[8].created_at" :desc="newestArticles[8].desc" />
                  </div>
                  <div v-if="newestArticles[9] !== undefined">
                    <default-card-no-image :image="newestArticles[9].headImage" :path="'/articles/'+newestArticles[9].id" :title="newestArticles[9].title" :author="newestArticles[9].author.name" :author_url="'/authors/'+newestArticles[9].author.id" :created_at="newestArticles[9].created_at" :desc="newestArticles[9].desc" />
                  </div>
                  <div v-if="newestArticles[10] !== undefined">
                    <small-card-with-image :image="newestArticles[10].headImage" :path="'/articles/'+newestArticles[10].id" :title="newestArticles[10].title" :author="newestArticles[10].author.name" :author_url="'/authors/'+newestArticles[10].author.id" :created_at="newestArticles[10].created_at" :desc="newestArticles[10].desc" />
                  </div>
                  <div v-if="newestArticles[11] !== undefined">
                    <default-card-no-image :image="newestArticles[11].headImage" :path="'/articles/'+newestArticles[11].id" :title="newestArticles[11].title" :author="newestArticles[11].author.name" :author_url="'/authors/'+newestArticles[11].author.id" :created_at="newestArticles[11].created_at" :desc="newestArticles[11].desc" />
                  </div>
                  <div v-if="newestArticles[12] !== undefined">
                    <small-card-with-background :image="newestArticles[12].headImage" :path="'/articles/'+newestArticles[12].id" :title="newestArticles[12].title" :author="newestArticles[12].author.name" :author_url="'/authors/'+newestArticles[12].author.id" :created_at="newestArticles[12].created_at" :desc="newestArticles[12].desc" />
                  </div>
                </div>
              </div>

              <div v-if="newestArticles.length === 0">
                <loading />
              </div>
            </div>

            <!-- Blog Section - Latest -->
            <div class="blog_section">
              <div class="section_panel  align-items-center justify-content-start">
                <div class="section_title">最🔥文章</div>
              </div>

              <div class="section_content card-columns" v-if="popularArticles.length > 0">

                <div v-if="popularArticles[0] !== undefined">
                  <!-- Small Card With Image -->
                  <small-card-with-image :image="popularArticles[0].headImage" :path="'/articles/'+popularArticles[0].id" :title="popularArticles[0].title" :author="popularArticles[0].author.name" :author_url="'/authors/'+popularArticles[0].author.id" :created_at="popularArticles[0].created_at" :desc="popularArticles[0].desc" />
                </div>
                <div v-if="popularArticles[1] !== undefined">
                  <!-- Small Card With Image -->
                  <small-card-with-image :image="popularArticles[1].headImage" :path="'/articles/'+popularArticles[1].id" :title="popularArticles[1].title" :author="popularArticles[1].author.name" :author_url="'/authors/'+popularArticles[1].author.id" :created_at="popularArticles[1].created_at" :desc="popularArticles[1].desc" />
                </div>
                <div v-if="popularArticles[2] !== undefined">
                  <!-- Small Card With Image -->
                  <small-card-with-image :image="popularArticles[2].headImage" :path="'/articles/'+popularArticles[3].id" :title="popularArticles[3].title" :author="popularArticles[3].author.name" :author_url="'/authors/'+popularArticles[3].author.id" :created_at="popularArticles[3].created_at" :desc="popularArticles[3].desc" />
                </div>
                <div v-if="popularArticles[3] !== undefined">
                  <!-- SmallCardWithBackground -->
                  <small-card-with-background :image="popularArticles[4].headImage" :path="'/articles/'+popularArticles[4].id" :title="popularArticles[4].title" :author="popularArticles[4].author.name" :author_url="'/authors/'+popularArticles[4].author.id" :created_at="popularArticles[4].created_at" :desc="popularArticles[4].desc" />
                </div>
                <div v-if="popularArticles[4] !== undefined">
                  <!-- SmallCardWithBackground -->
                  <small-card-with-background :image="popularArticles[4].headImage" :path="'/articles/'+popularArticles[4].id" :title="popularArticles[4].title" :author="popularArticles[4].author.name" :author_url="'/authors/'+popularArticles[4].author.id" :created_at="popularArticles[4].created_at" :desc="popularArticles[4].desc" />
                </div>
                <div v-if="popularArticles[5] !== undefined">
                  <!-- Small Card With Image -->
                  <small-card-with-image :image="popularArticles[5].headImage" :path="'/articles/'+popularArticles[6].id" :title="popularArticles[6].title" :author="popularArticles[6].author.name" :author_url="'/authors/'+popularArticles[6].author.id" :created_at="popularArticles[6].created_at" :desc="popularArticles[6].desc" />
                </div>
                <div v-if="popularArticles[6] !== undefined">
                  <!-- SmallCardWithoutImage -->
                  <small-card-without-image :image="popularArticles[6].headImage" :path="'/articles/'+popularArticles[6].id" :title="popularArticles[6].title" :author="popularArticles[6].author.name" :author_url="'/authors/'+popularArticles[6].author.id" :created_at="popularArticles[6].created_at" :desc="popularArticles[6].desc" />
                </div>
                <div v-if="popularArticles[7] !== undefined">
                  <!-- DefaultCardWithBackground -->
                  <default-card-with-background :image="popularArticles[7].headImage" :path="'/articles/'+popularArticles[7].id" :title="popularArticles[7].title" :author="popularArticles[7].author.name" :author_url="'/authors/'+popularArticles[7].author.id" :created_at="popularArticles[7].created_at" :desc="popularArticles[7].desc" />
                </div>
              </div>

              <div v-if="popularArticles.length === 0">
                <loading />
              </div>
            </div>

          </div>

          <div class="load_more">
            <router-link to="/articles">
              <div id="load_more" class="load_more_button text-center trans_200">
                查看所有文章
              </div>
            </router-link>
          </div>

        </div>

        <!-- Sidebar -->
        <div class="col-lg-3">
          <blog-siderbar />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BlogSiderbar from '@views/BlogSiderbar'
import _ from 'lodash'
import SmallCardWithImage from '@c/SmallCardWithImage'
import SmallCardWithoutImage from '@c/SmallCardWithoutImage'
import SmallCardWithBackground from '@c/SmallCardWithBackground'
import DefaultCardWithBackground from '@c/DefaultCardWithBackground'
import LargestCardWithImage from '@c/LargestCardWithImage'
import DefaultCardNoImage from '@c/DefaultCardNoImage'
import Loading from '@c/Loading'
import { getCategories, getNewestArticles, getPopularArticles } from '@api/api'
import custom from '@assets/custom.js'

export default {
  components: {
    Loading, SmallCardWithImage, SmallCardWithoutImage, SmallCardWithBackground, DefaultCardWithBackground, LargestCardWithImage, DefaultCardNoImage, BlogSiderbar
  },
  data () {
    return {
      categories: [],
      newestArticles: [],
      popularArticles: []
    }
  },
  mounted () {
    custom()
    this.fetchCategories()
    this.fecthNewestArticles()
    this.fecthPopularArticles()
  },
  computed: {
    top5categories () {
      let length = this.categories.length

      if (length > 5) {
        return _.slice(this.categories, 0, 5)
      } else {
        return this.categories
      }
    },

    moreCategories () {
      return _.difference(this.categories, this.top5categories)
    }
  },
  methods: {
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

<style lang="scss" scoped>
.router-link-active {
  color: rgb(21, 29, 19);
}
.duc-li {
  background-color: #fff;
  &:hover {
    background-color: #eee;
    color: black;
  }
}

.more-li a {
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  white-space: nowrap;
}
</style>
