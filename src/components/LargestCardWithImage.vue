<template>
    <div class="card card_largest_with_image grid-item">
        <img class="card-img-top" :src="image" alt="headimage">
        <div class="card-body">
            <div class="card-title">
                <router-link :to="path">{{title}}</router-link>
                <p class="card-text">{{desc}}</p>
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
  props: ['image', 'path', 'title', 'author', 'created_at', 'author_url', 'desc']
}
</script>
