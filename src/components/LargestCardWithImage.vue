<template>
    <div class="card card_largest_with_image">
        <router-link :to="path">
            <img class="card-img-top duc-card-img-top" v-lazy="image" alt="headimage">
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
  props: ['image', 'path', 'title', 'author', 'created_at', 'author_url', 'desc', 'content']
}
</script>

<style lang="scss" scoped>
.duc-search-content {
  margin-top: 15px;
}
.duc-card-img-top{
    min-height: 350px;
    max-height: 400px;
}
</style>
