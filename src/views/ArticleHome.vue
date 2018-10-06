<template>
    <div class="home">
        <div class="home_background parallax-window" data-parallax="scroll" :style="'background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(images/regular.jpg);'" data-image-src="images/regular.jpg" data-speed="0.8"></div>
        <div class="home_content">
            <div class="post_title duc">文章列表</div>
        </div>
    </div>
</template>

<script>
// import post from '@assets/post.js'
export default {
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
    font-size: 30px
}
</style>
