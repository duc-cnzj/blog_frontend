<template>
    <div class="card card_default card_small_with_background">
        <div class="card_background" v-lazy:background-image="image"></div>
        <div class="card-body">
            <div class="card-title card-title-small">
                <router-link :to="path">{{title}}</router-link>
            </div>
            <small class="post_meta">
                <router-link :to="author_url">
                    {{author}}
                </router-link>
                <span>{{created_at}}</span>
            </small>
        </div>
    </div>
</template>

<script>
export default {
  props: ['image', 'path', 'title', 'author', 'created_at', 'author_url', 'desc']
}
</script>

<style lang="scss" scoped>
.card-title {
    a:hover {
        color: blue
    }
}
</style>
