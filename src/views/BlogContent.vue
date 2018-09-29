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
                                <div class="grid clearfix" v-if="this.newestArticles.length > 0">

                                    <!-- Largest Card With Image -->
                                    <div class="card card_largest_with_image grid-item">
                                        <img class="card-img-top" :src="newestArticles[0].headImage" alt="headimage">
                                        <div class="card-body">
                                            <div class="card-title">
                                                <router-link :to="'/articles/'+newestArticles[0].id">{{newestArticles[0].title}}</router-link>
                                                <p class="card-text">{{newestArticles[0].desc}}</p>
                                                <small class="post_meta"><a href="#">{{newestArticles[0].author}}</a><span>{{newestArticles[0].created_at}}</span></small>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Small Card Without Image -->
                                    <div class="card card_default card_small_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link :to="'/articles/'+newestArticles[1].id">{{newestArticles[1].title}}</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">{{newestArticles[1].author}}</a><span>{{newestArticles[1].created_at}}</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Background -->
                                    <div class="card card_default card_small_with_background grid-item">
                                        <div class="card_background" :style="'background-image:url('+ newestArticles[2].headImage +')'"></div>
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link :to="'/articles/'+newestArticles[2].id">{{newestArticles[2].title}}</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">{{newestArticles[2].author}}</a><span>{{newestArticles[2].created_at}}</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Image -->
                                    <div class="card card_small_with_image grid-item">
                                        <img class="card-img-top" :src="newestArticles[3].headImage" alt="headimage">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link :to="'/articles/'+newestArticles[3].id">{{newestArticles[3].title}}</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">{{newestArticles[3].author}}</a><span>{{newestArticles[3].created_at}}</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Image -->
                                    <div class="card card_small_with_image grid-item">
                                        <img class="card-img-top" :src="newestArticles[4].headImage" alt="headimage">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link :to="'/articles/'+newestArticles[4].id">{{newestArticles[4].title}}</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">{{newestArticles[4].author}}</a><span>{{newestArticles[4].created_at}}</span></small>
                                        </div>
                                    </div>

                                    <!-- Default Card No Image -->

                                    <div class="card card_default card_default_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link :to="'/articles/'+newestArticles[5].id">{{newestArticles[5].title}}</router-link>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Default Card No Image -->

                                    <div class="card card_default card_default_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link :to="'/articles/'+newestArticles[6].id">{{newestArticles[6].title}}</router-link>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Default Card No Image -->

                                    <div class="card card_default card_default_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link :to="'/articles/'+newestArticles[7].id">{{newestArticles[7].title}}</router-link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <!-- Blog Section - Latest -->
                        <div class="blog_section">
                            <div class="section_panel d-flex flex-row align-items-center justify-content-start">
                                <div class="section_title">Latest Articles</div>
                            </div>
                            <div class="section_content">
                                <div class="grid clearfix">

                                    <!-- Small Card With Image -->
                                    <small-card-with-image :image="'images/post_10.jpg'" :path="'articles/1'" :title="'duc small big'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                    <!-- SmallCardWithoutImage -->
                                    <small-card-without-image :image="'images/post_10.jpg'" :path="'articles/1'" :title="'duc small big'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                    <!-- Small Card With Image -->
                                    <small-card-with-image :image="'images/post_10.jpg'" :path="'articles/1'" :title="'duc small big'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                    <!-- Small Card With Image -->
                                    <small-card-with-image :image="'images/post_10.jpg'" :path="'articles/1'" :title="'duc small big'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                    <!-- SmallCardWithBackground -->
                                    <small-card-with-background :image="'images/post_11.jpg'" :path="'articles/bg1'" :title="'SmallCardWithBackground'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                    <!-- SmallCardWithBackground -->
                                    <small-card-with-background :image="'images/post_11.jpg'" :path="'articles/bg1'" :title="'SmallCardWithBackground'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                    <!-- Small Card With Image -->
                                    <small-card-with-image :image="'images/post_10.jpg'" :path="'articles/1'" :title="'duc small big'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                    <!-- SmallCardWithoutImage -->
                                    <small-card-without-image :image="'images/post_10.jpg'" :path="'articles/1'" :title="'duc small big'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                    <!-- SmallCardWithoutImage -->
                                    <small-card-without-image :image="'images/post_10.jpg'" :path="'articles/1'" :title="'duc small big'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                    <!-- SmallCardWithBackground -->
                                    <small-card-with-background :image="'images/post_11.jpg'" :path="'articles/bg1'" :title="'SmallCardWithBackground'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                    <!-- DefaultCardWithBackground -->
                                    <default-card-with-background :image="'images/post_11.jpg'" :path="'articles/bg1'" :title="'default'" :author="'duc'" :author_url="'duc'" :created_at="'2018'" />

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="load_more">
                        <div id="load_more" class="load_more_button text-center trans_200">查看所有文章</div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import SmallCardWithImage from '@c/SmallCardWithImage'
import SmallCardWithoutImage from '@c/SmallCardWithoutImage'
import SmallCardWithBackground from '@c/SmallCardWithBackground'
import DefaultCardWithBackground from '@c/DefaultCardWithBackground'

export default {
  components: {
    SmallCardWithImage, SmallCardWithoutImage, SmallCardWithBackground, DefaultCardWithBackground
  },
  props: [
    'categories', 'newestArticles', 'popularArticles'
  ],
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
