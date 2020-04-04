<template>

  <div class="home">
    <div class="home_background  duc-back" data-parallax="scroll" :style="'background:url(/images/article_bg.jpg) no-repeat;background-position: center center;background-size: cover;'" data-image-src="/images/article_bg.jpg" data-speed="0.8">
      <div class="d-flex flex-column justify-content-center duc ">
        <div class="text-center">
          <h1>文章列表</h1>
        </div>
        <div class="d-flex flex-row justify-content-center">
          <search-article :query="$route.query.searchField" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchArticle from '@c/SearchArticle'

export default {
  components: {
    SearchArticle
  },
  mounted () {
    // post()
  }
}
</script>

<style lang="scss" scoped>
/*********************************
5. Home
*********************************/

.home {
  width: 100%;
  height: 360px;
}
.home_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.duc {
  font-size: 30px;
  h1 {
    font-size: 30px;
    font-family: "Work Sans", sans-serif;
  }
  width: 100%;
  height: 100%;
}

.duc-search {
  margin-top: 50px;
}

.duc-back {
  background-color: #fbfbfc;
}

.son {
  float: none;
  display: inline-block;
  vertical-align: middle;
}
</style>
