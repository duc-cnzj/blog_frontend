<template>
    <div class="card card_small_with_image grid-item">
        <img class="card-img-top" :src="image" alt="">
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
