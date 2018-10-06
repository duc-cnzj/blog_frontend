<template>
    <nav aria-label="Page navigation example" v-if="shouldPaginate">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled" v-show="prevUrl" @click="page--">
                <span class="page-link" href="#" tabindex="-1">Previous</span>
            </li>
            <li class="page-item" v-show="nextUrl" @click="page++">
                <span class="page-link" href="#">Next</span>
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
      prevUrl: true,
      nextUrl: true
    }
  },

  watch: {
    dataSet () {
      this.page = this.dataSet.current_page
      this.prevUrl = this.dataSet.prev_page_url
      this.nextUrl = this.dataSet.next_page_url
    },

    page () {
      this.broadcast().updateUrl()
    }
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
      history.pushState(null, null, '?page=' + this.page)
    }
  }

}
</script>

<style lang="scss" scoped>
.page-item {
    cursor: pointer;
}
</style>
