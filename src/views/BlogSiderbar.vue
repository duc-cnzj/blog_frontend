<template>
  <div class="sidebar">

    <div class="sidebar_background">
      <!-- Top Stories -->

      <div class="sidebar_section">
        <div class="sidebar_title_container container">
          <div class="sidebar_title">最热文章</div>
          <div class="sidebar_slider_nav" v-if="groupArticles.length > 0 ">
            <div class="custom_nav_container sidebar_slider_nav_container">
              <div class="custom_prev custom_prev_top">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="7px" height="12px" viewBox="0 0 7 12" enable-background="new 0 0 7 12" xml:space="preserve">
                  <polyline fill="#bebebe" points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 " />
                </svg>
              </div>
              <ul id="custom_dots" class="custom_dots custom_dots_top">
                <li class="custom_dot custom_dot_top active"><span></span></li>
                <li class="custom_dot custom_dot_top"><span></span></li>
                <li class="custom_dot custom_dot_top"><span></span></li>
              </ul>
              <div class="custom_next custom_next_top">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="7px" height="12px" viewBox="0 0 7 12" enable-background="new 0 0 7 12" xml:space="preserve">
                  <polyline fill="#bebebe" points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 " />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar_section_content">

          <!-- Top Stories Slider -->
          <div class="sidebar_slider_container">

            <sidebar-loading v-if="groupArticles.length === 0" />

            <div class="owl-carousel owl-theme owl-loaded sidebar_slider_top" v-if="groupArticles.length > 0 ">
              <!-- Top Stories Slider Item -->
              <div class="duc" v-for="(articles, index) in groupArticles" :key="index">
                <!-- Sidebar Post -->
                <div class="side_post" v-for="(item, i) in articles" :key="i">
                  <router-link :to="'/articles/'+item.id">
                    <div class="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                      <div class="side_post_image">
                        <div><img :src="item.headImage" alt="" class="image70"></div>
                        </div>
                        <div class="side_post_content">
                          <div class="side_post_title">{{item.title}}</div>
                          <small class="post_meta">{{item.author.name}}<span>{{item.created_at}}</span></small>
                        </div>
                      </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="owl-stage-outer">
        <div class="owl-stage">
          <div class=" duc">...</div>
          <div class=" duc">...</div>
          <div class=" duc">...</div>
        </div>
      </div> -->
    </div>

  </div>

</template>

<script>
import _ from 'lodash'
import { mapState, mapActions } from 'vuex'
import SidebarLoading from '@c/SidebarLoading'

export default {
  components: { SidebarLoading },

  created () {
    setTimeout(() => {
      this.init()
      this.fecthTrendingArticles()
    }, 300)
  },

  data () {
    return {
      chunkSize: 4
    }
  },

  computed: {
    ...mapState(['trendingArticles']),

    groupArticles () {
      // return this.trendingArticles
      return _.chunk(this.trendingArticles, this.chunkSize)
    }
  },

  methods: {
    init () {
      $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
          items: 1,
          loop: true,
          autoplay: false,
          smartSpeed: 1200,
          dots: true,
          dotsContainer: '.custom_dots_vid',
          nav: false
        })
      })
    },

    ...mapActions({
      fecthTrendingArticles: 'getTrendingArticles'
    })
  }
}
</script>

<style lang="scss" scoped>
.image70 {
  width: 70px;
  height: 70px;
}

/*********************************
11. Sidebar
*********************************/

.sidebar {
  width: 100%;
  height: 100%;
  padding-top: 83px;
  padding-left: 30px;
}
.sidebar_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 345px;
  height: 100%;
  background: #ededed;
}
.sidebar_title {
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 20px;
  color: #000000;
}
.sidebar_section_content {
}
.sidebar_slider_container {
  width: 100%;
}
.side_post a {
  display: block;
}
.side_post:not(:last-child) {
  margin-bottom: 15px;
}
.side_post_image div {
  width: 70px;
  height: 70px;
  border-radius: 6px;
  overflow: hidden;
}
.side_post_image div img {
  max-width: 100%;
}
.side_post_content {
  padding-left: 20px;
  margin-top: -5px;
}
.side_post_title {
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 1.285;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.side_post_title:hover {
  color: rgba(0, 0, 0, 0.5);
}
.side_post_content .post_meta {
  margin-top: 7px;
}
.sidebar_slider_nav {
  position: absolute;
  margin: 5px;
  top: 5px;
  right: 25px;
}
.sidebar_slider_nav_container .custom_prev svg polyline,
.sidebar_slider_nav_container .custom_next svg polyline {
  fill: rgba(0, 0, 0, 0.15);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.sidebar_slider_nav_container .custom_prev:hover svg polyline,
.sidebar_slider_nav_container .custom_next:hover svg polyline {
  fill: rgba(0, 0, 0, 1);
}
.sidebar_slider_nav_container .custom_dot span {
  background: rgba(0, 0, 0, 0.15);
}
.sidebar_slider_nav_container .custom_dot:hover span,
.sidebar_slider_nav_container .custom_dot.active span {
  background: rgba(0, 0, 0, 1);
}
.advertising {
  width: 100%;
  height: 340px;
  margin-top: 80px;
}
.advertising_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.advertising_content {
  width: 100%;
  height: 100%;
  padding-left: 28px;
  padding-bottom: 25px;
  padding-right: 15px;
}
.advertising_perc {
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #2ddf80;
  margin-bottom: 14px;
}
.advertising_link a {
  font-size: 24px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 1.33;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.advertising_link a:hover {
  color: rgba(255, 255, 255, 0.5);
}
.newest_videos {
  margin-top: 72px;
}
.newest_videos .side_post_image div {
  border-radius: 50%;
  overflow: hidden;
}
.advertising_2 {
  width: 100%;
  height: 140px;
  margin-top: 80px;
}
.advertising_2_content {
  width: 100%;
  height: 100%;
}
.advertising_2_link a {
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.advertising_2_link a span {
  font-weight: 600;
}
.advertising_2_link a:hover {
  color: rgba(255, 255, 255, 0.5);
}
.future_events {
  margin-top: 72px;
}
.event_date {
  text-align: center;
  width: 70px;
  height: 70px;
}
.event_day {
  font-size: 40px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.15);
  line-height: 0.75;
}
.event_month {
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.15);
  line-height: 0.75;
  margin-top: 13px;
}

.duc {
  .side_post {
    margin: 30px;
  }
}
</style>
