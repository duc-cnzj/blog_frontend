<template>
    <div class="home">

      <!-- Home Slider -->
      <div class="home_slider_container">
        <div class="owl-carousel owl-theme home_slider">

          <template v-for="(article, index) in  articles">
            <!-- Slider Item -->
            <div class="owl-item" :key="index">
              <div class="home_slider_background" :style="getImage(article.headImage)"></div>
              <div class="home_slider_content_container">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="home_slider_content">
                        <div class="home_slider_item_category trans_200"><router-link :to="'categories/'+article.category">{{article.category}}</router-link></div>
                        <div class="home_slider_item_title">
                          <router-link :to="'/articles/'+article.id">{{article.title}}</router-link>
                        </div>
                        <div class="home_slider_item_link">
                          <router-link :to="'/articles/'+article.id" class="trans_200">阅读全文🤣
                            <svg version="1.1" id="link_arrow_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="13px" viewBox="0 0 19 13" enable-background="new 0 0 19 13" xml:space="preserve">
                              <polygon fill="#FFFFFF" points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 " />
                            </svg>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Similar Posts -->
              <div class="similar_posts_container">
                <div class="container">
                  <div class="row d-flex flex-row align-items-end">

                    <template v-for="(r, i) in article.recommendArticles">

                      <!-- Similar Post -->
                      <div class="col-lg-3 col-md-6 similar_post_col" :key="i">
                        <div class="similar_post trans_200">
                          <router-link :to="'/articles/'+r.id">{{r.title}}</router-link>
                        </div>
                      </div>
                    </template>

                  </div>
                </div>

                <div class="home_slider_next_container">
                  <div class="home_slider_next" :style="nextHeadImage" @click="changeIndex(index)">
                    <div class="home_slider_next_background trans_400"></div>
                    <div class="home_slider_next_content trans_400">
                      <div class="home_slider_next_title">下一篇</div>
                      <div class="home_slider_next_link">{{nextTitle}}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </template>

        </div>

        <div class="custom_nav_container home_slider_nav_container">
          <div class="custom_prev custom_prev_home_slider">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="7px" height="12px" viewBox="0 0 7 12" enable-background="new 0 0 7 12" xml:space="preserve">
              <polyline fill="#FFFFFF" points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 " />
            </svg>
          </div>
          <ul id="custom_dots" class="custom_dots custom_dots_home_slider">
            <li class="custom_dot custom_dot_home_slider active"><span></span></li>
            <li class="custom_dot custom_dot_home_slider"><span></span></li>
            <li class="custom_dot custom_dot_home_slider"><span></span></li>
          </ul>
          <div class="custom_next custom_next_home_slider">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="7px" height="12px" viewBox="0 0 7 12" enable-background="new 0 0 7 12" xml:space="preserve">
              <polyline fill="#FFFFFF" points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 " />
            </svg>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  props: ['articles', 'recommendArticles'],
  data () {
    return {
      index: 1
    }
  },
  computed: {
    nextHeadImage () {
      return this.getImage(this.articles[this.index].headImage)
    },
    nextTitle () {
      return this.articles[this.index].title
    },
    articleLength () {
      return this.articles.length
    }
  },
  methods: {
    getImage (path) {
      return 'background-image:url(' + path + ')'
    },
    changeIndex (index) {
      let length = this.articleLength
      if (length === (index + 2)) {
        this.index = 0
      } else {
        this.index++
      }
    }
  }
}
</script>
