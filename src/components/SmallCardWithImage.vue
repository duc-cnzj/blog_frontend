<template>
    <div class="card card_small_with_image">
        <router-link :to="path">
            <img class="card-img-top" v-lazy="image" alt="">
        </router-link>
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
