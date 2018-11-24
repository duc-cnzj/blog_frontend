<template>
   <div class="card card_small_with_image duc">
        <router-link :to="path">
            <img class="card-img-top" v-lazy="image" alt="">
        </router-link>
        <div class="card-body">
            <div class="card-title">
                <router-link :to="path">
                    <a v-html="title"></a>
                </router-link>
                <p class="card-text" v-html="desc"></p>

                <p v-if="content" class="duc-search-content">
                    匹配到的文章主体内容: <span v-html="content"></span>
                </p>

                <small class="post_meta">
                    <router-link :to="author_url">
                        {{author}}
                    </router-link>
                    <span>{{created_at}}</span>
                </small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    image: {
      default: ''
    },
    path: {
      default: ''
    },
    title: {
      default: ''
    },
    author: {
      default: ''
    },
    created_at: {
      default: ''
    },
    author_url: {
      default: ''
    },
    desc: {
      default: ''
    },
    content: {
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card-body{
    flex: 0 0 auto !important;
}
.duc {
    flex-grow: 33%;
    box-shadow: 0 2px 5px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.05);
    &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 43px -4px rgba(0,0,0,.19);
    }
    img {
        height: 250px;
    }
}
.duc-search-content {
  margin-top: 15px;
}
.duc-card-img-top{
    min-height: 350px;
    max-height: 400px;
}
</style>
