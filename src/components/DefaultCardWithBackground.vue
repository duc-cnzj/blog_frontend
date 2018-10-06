<template>
    <div class="card card_default card_default_with_background">
        <div class="card_background" :style="'background-image:url('+image+')'"></div>
        <div class="card-body">
            <div class="card-title card-title-small">
                <router-link :to="path">{{title}}</router-link>
            </div>
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
    color: cornflowerblue;
  }
}
</style>
