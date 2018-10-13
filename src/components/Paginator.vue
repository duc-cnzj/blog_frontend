<template>
    <nav aria-label="Page navigation example" v-if="shouldPaginate">
        <ul class="pagination justify-content-center">
            <li class="page-item" v-show="prevUrl" @click="page--">
                <span class="page-link" href="#" tabindex="-1">👈</span>
            </li>
            <li class="page-item" v-show="nextUrl" @click="page++">
                <span class="page-link" href="#">👉</span>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  props: ['dataSet'],

  data () {
    return {
      page: 1,
      prevUrl: '',
      nextUrl: ''
    }
  },

  watch: {
    dataSet () {
      this.page = this.dataSet.current_page
      this.prevUrl = this.dataSet.prev
      this.nextUrl = this.dataSet.next
    },

    page () {
      this.broadcast().updateUrl()
    }
  },

  created () {
    this.page = this.dataSet.current_page
    this.prevUrl = this.dataSet.prev
    this.nextUrl = this.dataSet.next
  },

  computed: {
    shouldPaginate () {
      return !!this.prevUrl || !!this.nextUrl
    }
  },

  methods: {
    broadcast () {
      return this.$emit('changed', this.page)
    },

    updateUrl () {
      // history.pushState(null, null, 'articles?page=' + this.page)
      // this.$router.
    }
  }

}
</script>

<style lang="scss" scoped>
.page-item {
    cursor: pointer;
}
</style>
