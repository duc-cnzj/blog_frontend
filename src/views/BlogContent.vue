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
                <div class="section_panel_more">
                  <ul>
                    <li>more
                      <ul>
                        <li v-for="(c, i) in moreCategories" :key="i" class="more-li">
                          <router-link :to="'/categories/'+c.id" exact>{{ c.name }}</router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="section_content">
                <div class="grid clearfix" v-if="newestArticles.length > 0">

                  <!-- LargestCardWithImage -->
                  <largest-card-with-image :image="newestArticles[0].headImage" :path="'/articles/'+newestArticles[0].id" :title="newestArticles[0].title" :author="newestArticles[0].author.name" :author_url="'/authors/'+newestArticles[0].author.id" :created_at="newestArticles[0].created_at" :desc="newestArticles[0].desc" />

                  <!-- Small Card Without Image -->
                  <small-card-without-image :image="newestArticles[1].headImage" :path="'/articles/'+newestArticles[1].id" :title="newestArticles[1].title" :author="newestArticles[1].author.name" :author_url="'/authors/'+newestArticles[1].author.id" :created_at="newestArticles[1].created_at" :desc="newestArticles[1].desc" />

                  <!-- SmallCardWithBackground -->
                  <small-card-with-background :image="newestArticles[2].headImage" :path="'/articles/'+newestArticles[2].id" :title="newestArticles[2].title" :author="newestArticles[2].author.name" :author_url="'/authors/'+newestArticles[2].author.id" :created_at="newestArticles[2].created_at" :desc="newestArticles[2].desc" />

                  <!-- Small Card With Image -->
                  <small-card-with-image :image="newestArticles[3].headImage" :path="'/articles/'+newestArticles[3].id" :title="newestArticles[3].title" :author="newestArticles[3].author.name" :author_url="'/authors/'+newestArticles[3].author.id" :created_at="newestArticles[3].created_at" :desc="newestArticles[3].desc" />

                  <!-- Small Card With Image -->
                  <small-card-with-image :image="newestArticles[4].headImage" :path="'/articles/'+newestArticles[4].id" :title="newestArticles[4].title" :author="newestArticles[4].author.name" :author_url="'/authors/'+newestArticles[4].author.id" :created_at="newestArticles[4].created_at" :desc="newestArticles[4].desc" />

                  <!-- Default Card No Image -->
                  <default-card-no-image :image="newestArticles[5].headImage" :path="'/articles/'+newestArticles[5].id" :title="newestArticles[5].title" :author="newestArticles[5].author.name" :author_url="'/authors/'+newestArticles[5].author.id" :created_at="newestArticles[5].created_at" :desc="newestArticles[5].desc" />

                  <!-- Default Card No Image -->
                  <default-card-no-image :image="newestArticles[6].headImage" :path="'/articles/'+newestArticles[6].id" :title="newestArticles[6].title" :author="newestArticles[6].author.name" :author_url="'/authors/'+newestArticles[6].author.id" :created_at="newestArticles[6].created_at" :desc="newestArticles[6].desc" />

                  <!-- Default Card No Image -->
                  <default-card-no-image :image="newestArticles[7].headImage" :path="'/articles/'+newestArticles[7].id" :title="newestArticles[7].title" :author="newestArticles[7].author.name" :author_url="'/authors/'+newestArticles[7].author.id" :created_at="newestArticles[7].created_at" :desc="newestArticles[7].desc" />

                </div>
              </div>
            </div>

            <!-- Blog Section - Latest -->
            <div class="blog_section">
              <div class="section_panel d-flex flex-row align-items-center justify-content-start">
                <div class="section_title">最近发表的文章</div>
              </div>
              <div class="section_content" v-if="popularArticles.length > 0">
                <div class="grid clearfix">

                  <!-- Small Card With Image -->
                  <small-card-with-image :image="popularArticles[0].headImage" :path="'/articles/'+popularArticles[0].id" :title="popularArticles[0].title" :author="popularArticles[0].author.name" :author_url="'/authors/'+popularArticles[0].author.id" :created_at="popularArticles[0].created_at" :desc="popularArticles[0].desc" />

                  <!-- SmallCardWithoutImage -->
                  <small-card-without-image :image="popularArticles[1].headImage" :path="'/articles/'+popularArticles[1].id" :title="popularArticles[1].title" :author="popularArticles[1].author.name" :author_url="'/authors/'+popularArticles[1].author.id" :created_at="popularArticles[1].created_at" :desc="popularArticles[1].desc" />

                  <!-- Small Card With Image -->
                  <small-card-with-image :image="popularArticles[2].headImage" :path="'/articles/'+popularArticles[2].id" :title="popularArticles[2].title" :author="popularArticles[2].author.name" :author_url="'/authors/'+popularArticles[2].author.id" :created_at="popularArticles[2].created_at" :desc="popularArticles[2].desc" />

                  <!-- Small Card With Image -->
                  <small-card-with-image :image="popularArticles[3].headImage" :path="'/articles/'+popularArticles[3].id" :title="popularArticles[3].title" :author="popularArticles[3].author.name" :author_url="'/authors/'+popularArticles[3].author.id" :created_at="popularArticles[3].created_at" :desc="popularArticles[3].desc" />

                  <!-- SmallCardWithBackground -->
                  <small-card-with-background :image="popularArticles[4].headImage" :path="'/articles/'+popularArticles[4].id" :title="popularArticles[4].title" :author="popularArticles[4].author.name" :author_url="'/authors/'+popularArticles[4].author.id" :created_at="popularArticles[4].created_at" :desc="popularArticles[4].desc" />

                  <!-- SmallCardWithBackground -->
                  <small-card-with-background :image="popularArticles[5].headImage" :path="'/articles/'+popularArticles[5].id" :title="popularArticles[5].title" :author="popularArticles[5].author.name" :author_url="'/authors/'+popularArticles[5].author.id" :created_at="popularArticles[5].created_at" :desc="popularArticles[5].desc" />

                  <!-- Small Card With Image -->
                  <small-card-with-image :image="popularArticles[6].headImage" :path="'/articles/'+popularArticles[6].id" :title="popularArticles[6].title" :author="popularArticles[6].author.name" :author_url="'/authors/'+popularArticles[6].author.id" :created_at="popularArticles[6].created_at" :desc="popularArticles[6].desc" />

                  <!-- SmallCardWithoutImage -->
                  <small-card-without-image :image="popularArticles[7].headImage" :path="'/articles/'+popularArticles[7].id" :title="popularArticles[7].title" :author="popularArticles[7].author.name" :author_url="'/authors/'+popularArticles[7].author.id" :created_at="popularArticles[7].created_at" :desc="popularArticles[7].desc" />

                  <!-- SmallCardWithoutImage -->
                  <small-card-without-image :image="popularArticles[8].headImage" :path="'/articles/'+popularArticles[8].id" :title="popularArticles[8].title" :author="popularArticles[8].author.name" :author_url="'/authors/'+popularArticles[8].author.id" :created_at="popularArticles[8].created_at" :desc="popularArticles[8].desc" />

                  <!-- DefaultCardWithBackground -->
                  <default-card-with-background :image="popularArticles[9].headImage" :path="'/articles/'+popularArticles[9].id" :title="popularArticles[9].title" :author="popularArticles[9].author.name" :author_url="'/authors/'+popularArticles[9].author.id" :created_at="popularArticles[9].created_at" :desc="popularArticles[9].desc" />

                  <!-- DefaultCardWithBackground -->
                  <default-card-with-background :image="popularArticles[10].headImage" :path="'/articles/'+popularArticles[10].id" :title="popularArticles[10].title" :author="popularArticles[10].author.name" :author_url="'/authors/'+popularArticles[10].author.id" :created_at="popularArticles[10].created_at" :desc="popularArticles[10].desc" />

                </div>

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
import { getCategories, getNewestArticles, getPopularArticles } from '@api/api'

export default {
  components: {
    SmallCardWithImage, SmallCardWithoutImage, SmallCardWithBackground, DefaultCardWithBackground, LargestCardWithImage, DefaultCardNoImage, BlogSiderbar
  },
  data () {
    return {
      categories: [],
      newestArticles: [],
      popularArticles: []
    }
  },
  mounted () {
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
