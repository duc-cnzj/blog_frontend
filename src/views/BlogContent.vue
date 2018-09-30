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

                                    <!-- LargestCardWithImage -->
                                    <largest-card-with-image
                                            :image="'images/post_11.jpg'"
                                            :path="'articles/bg1'"
                                            :title="'LargestCardWithImage'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- Small Card Without Image -->
                                    <small-card-without-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- SmallCardWithBackground -->
                                    <small-card-with-background
                                            :image="'images/post_11.jpg'"
                                            :path="'articles/bg1'"
                                            :title="'SmallCardWithBackground'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- Small Card With Image -->
                                    <small-card-with-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- Small Card With Image -->
                                    <small-card-with-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- Default Card No Image -->
                                    <default-card-no-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- Default Card No Image -->
                                    <default-card-no-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- Default Card No Image -->
                                    <default-card-no-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

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
                                    <small-card-with-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- SmallCardWithoutImage -->
                                    <small-card-without-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- Small Card With Image -->
                                    <small-card-with-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- Small Card With Image -->
                                    <small-card-with-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- SmallCardWithBackground -->
                                    <small-card-with-background
                                            :image="'images/post_11.jpg'"
                                            :path="'articles/bg1'"
                                            :title="'SmallCardWithBackground'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- SmallCardWithBackground -->
                                    <small-card-with-background
                                            :image="'images/post_11.jpg'"
                                            :path="'articles/bg1'"
                                            :title="'SmallCardWithBackground'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- Small Card With Image -->
                                    <small-card-with-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- SmallCardWithoutImage -->
                                    <small-card-without-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- SmallCardWithoutImage -->
                                    <small-card-without-image
                                            :image="'images/post_10.jpg'"
                                            :path="'articles/1'"
                                            :title="'duc small big'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- SmallCardWithBackground -->
                                    <small-card-with-background
                                            :image="'images/post_11.jpg'"
                                            :path="'articles/bg1'"
                                            :title="'SmallCardWithBackground'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

                                    <!-- DefaultCardWithBackground -->
                                    <default-card-with-background
                                            :image="'images/post_11.jpg'"
                                            :path="'articles/bg1'"
                                            :title="'default'"
                                            :author="'duc'"
                                            :author_url="'duc'"
                                            :created_at="'2018'"
                                            :desc="'desc'"
                                    />

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
import LargestCardWithImage from '@c/LargestCardWithImage'
import DefaultCardNoImage from '@c/DefaultCardNoImage'

export default {
  components: {
    SmallCardWithImage, SmallCardWithoutImage, SmallCardWithBackground, DefaultCardWithBackground, LargestCardWithImage, DefaultCardNoImage
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
