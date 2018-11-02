<template>
  <div class="home">

    <!-- Home Slider -->
    <div class="home_slider_container duc">
      <div class="owl-carousel owl-theme home_slider" v-if="articles.length > 0">
        <!-- Slider Item -->
        <div class="home_slider_background" :style="getImage(article.headImage)" v-for="(article, index) in  articles" :key="index">

          <div class="home_slider_content_container">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="home_slider_content">
                    <div class="home_slider_item_category trans_200">
                      <router-link :to="'/categories/'+article.category.id">{{article.category.name}}</router-link>
                    </div>
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

          <div class="similar_posts_container">

            <div class="container">
              <div class="row d-flex flex-row align-items-end">

                <div class="col-lg-3 col-md-6 similar_post_col" v-for="(r, i) in article.recommendArticles" :key="i">
                  <div class="similar_post trans_200">
                    <router-link :to="'/articles/'+r.id">{{r.title}}</router-link>
                  </div>
                </div>

              </div>
            </div>

            <div class="home_slider_next_container">
              <div class="home_slider_next duc_slider" :style="'background-size: cover;' + nextHeadImage" @click="changeIndex(index)">
                <div class="home_slider_next_background trans_400"></div>
                <div class="home_slider_next_content trans_400">
                  <div class="home_slider_next_title">下一篇</div>
                  <div class="home_slider_next_link">{{nextTitle}}</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div class="custom_nav_container home_slider_nav_container" v-if="articleLength > 0">
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
import { getHomeArticles } from '@api/api'
import { mapState, mapActions } from 'vuex'

export default {
  props: ['recommendArticles'],

  data () {
    return {
      articles: [],
      index: 1
    }
  },

  created () {
    this.fetchHomeArticles().then(res => {
      this.init()
    })
  },

  mounted () {
    if (!this.welcome && !window.toastrError) {
      window.toastr.success('欢迎欢迎！')
      this.welcomeUser()
    }
  },

  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'init'
  },

  computed: {
    ...mapState(['welcome']),

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
    ...mapActions(['welcomeUser']),

    init () {
      let homeSlider = $('.home_slider')
      $(document).ready(function () {
        $('.home_slider').owlCarousel({
          items: 1,
          autoplay: false,
          loop: true,
          smartSpeed: 1200,
          dots: true,
          dotsContainer: '.custom_dots_home_slider',
          nav: false
        })

        if ($('.home_slider').length) {
        // var homeSlider = $('.home_slider')
          homeSlider.owlCarousel({
            items: 1,
            autoplay: false,
            loop: true,
            smartSpeed: 1200,
            dots: true,
            dotsContainer: '.custom_dots_home_slider',
            nav: false
          })

          if ($('.home_slider_next').length) {
            $('.home_slider_next').on('click', function () {
              homeSlider.trigger('next.owl.carousel')
            })
          }

          if ($('.custom_prev_home_slider').length) {
            $('.custom_prev_home_slider').on('click', function () {
              homeSlider.trigger('prev.owl.carousel')
            })
          }

          if ($('.custom_next_home_slider').length) {
            $('.custom_next_home_slider').on('click', function () {
              homeSlider.trigger('next.owl.carousel')
            })
          }

          /* Custom dots events */
          if ($('.custom_dot_home_slider').length) {
            $('.custom_dot_home_slider').on('click', function (ev) {
              var dot = $(ev.target)
              $('.custom_dot_home_slider').removeClass('active')
              dot.addClass('active')
              homeSlider.trigger('to.owl.carousel', [$(this).index(), 300])
            })
          }

          /* Change active class for dots when slide changes by nav or touch */
          homeSlider.on('changed.owl.carousel', function (event) {
            $('.custom_dot_home_slider').removeClass('active')
            $('.custom_dots_home_slider li')
              .eq(event.page.index)
              .addClass('active')
          })
        }
      })
    },

    async fetchHomeArticles () {
      const articles = await getHomeArticles()
      this.articles = articles.data
    },

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

<style lang="scss" scoped>
.duc_slider {
  border-radius: 5px;
}

/*********************************
5. Home
*********************************/

.home {
  width: 100%;
  height: 100vh;
}

/*********************************
5.1 Home Slider
*********************************/

.home_slider_container {
  width: 100%;
  height: 100%;
}
.home_slider {
}
.home_slider_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.home_slider_content_container {
  position: absolute;
  top: 45%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  width: 100%;
}
.home_slider_content {
  max-width: 460px;
}
.home_slider_item_category {
  width: 83px;
  height: 28px;
  background: #899091;
  border-radius: 14px;
  text-align: center;
}
.home_slider_item_category a {
  display: block;
  line-height: 28px;
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
}
.home_slider_item_category:hover {
  background: #ffffff;
}
.home_slider_item_category:hover a {
  color: rgba(0, 0, 0, 0.8);
}
.home_slider_item_title {
  margin-top: 19px;
}
.home_slider_item_title a {
  font-family: "Work Sans", sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.27;
}
.home_slider_item_link {
  margin-top: 21px;
}
.home_slider_item_link a {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
}
.home_slider_item_link a:hover {
  color: rgba(255, 255, 255, 1);
}
.home_slider_item_link a svg {
  display: inline-block;
  vertical-align: middle;
  margin-left: 16px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.home_slider_item_link a svg polygon {
  fill: rgba(255, 255, 255, 0.5);
}
.home_slider_item_link a:hover svg polygon {
  fill: rgba(255, 255, 255, 1);
}
.similar_posts_container {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.similar_post {
  width: 100%;
  height: 70px;
  background: #dedede;
  border-radius: 6px;
  padding-left: 26px;
  padding-right: 26px;
  margin-bottom: 30px;
}
.similar_post:hover {
  background: #ffffff;
}
.similar_post a {
  display: block;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 14px;
  color: #000000;
  line-height: 1.28;
  font-weight: 500;
}
.home_slider_next_container {
  position: absolute;
  bottom: 0;
  left: calc(((100vw - 1170px) / 2) + (1170px * 0.75) + 8px);
}
.home_slider_next {
  width: 375px;
  height: 240px;
  cursor: pointer;
}
.home_slider_next_background {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
}
.home_slider_next:hover .home_slider_next_background {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
.home_slider_next_content {
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 40px;
  visibility: hidden;
  opacity: 0;
}
.home_slider_next_title {
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  line-height: 0.75;
}
.home_slider_next_link {
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 25px;
}
.home_slider_next:hover .home_slider_next_content {
  visibility: visible;
  opacity: 1;
}
.custom_nav_container {
  z-index: 10;
}
.home_slider_nav_container {
  position: absolute;
  bottom: 264px;
  left: calc(((100vw - 1170px) / 2) + (1170px * 0.75) + 8px);
}
.custom_dots {
  display: inline-block;
  height: 12px;
  margin-left: 7px;
  margin-right: 7px;
}
.custom_dot {
  display: inline-block;
  padding: 2px;
  cursor: pointer;
}
.custom_dot span {
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.custom_dot.active span {
  background: rgba(255, 255, 255, 1);
}
.custom_dot:hover span {
  background: rgba(255, 255, 255, 1);
}
.custom_prev,
.custom_next {
  cursor: pointer;
}
.custom_prev,
.custom_next {
  display: inline-block;
  vertical-align: middle;
}
.custom_prev svg polyline,
.custom_next svg polyline {
  fill: rgba(255, 255, 255, 0.35);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.custom_prev:hover svg polyline,
.custom_next:hover svg polyline {
  fill: rgba(255, 255, 255, 1);
}

.duc {
  background-color: black;
}
</style>
