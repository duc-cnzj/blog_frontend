<template>
    <div class="card card_small_with_image grid-item duc" :class="animate" @mousemove="mousemove = true" @mouseout="mousemove=false">
        <div class="card-body">
            <div class="card-title card-title-small">
                <router-link :to="path">{{title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['image', 'path', 'title', 'author', 'created_at', 'author_url', 'desc'],
  data () {
    return {
      mousemove: false
    }
  },
  computed: {
    animate () {
      return this.mousemove ? ['animated', 'tada', 'delay-1s'] : []
    }
  }
}
</script>

<style lang="scss" scoped>
.duc {
    transition: all .5s ease-out;
  a {
    text-shadow: #fc0 1px 0 10px;
    font-size: 30px
  }

  &:hover {
      transform: scale(1.1);
      box-shadow: 2px 2px 5px red;
  }

  text-align: center;
}
</style>
