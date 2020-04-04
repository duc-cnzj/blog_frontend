<template>
  <div>
    <header
      class="header"
      :class="scrollClass"
    >
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header_content d-flex flex-row align-items-center justify-content-start">
              <div class="logo">
                <router-link to="/">duc's blog</router-link>
              </div>
              <nav class="main_nav">
                <ul>
                  <li
                    v-for="(l, i) in links"
                    :key="i"
                  >
                    <router-link
                      :to="l.link"
                      exact
                    >{{ l.title }}</router-link>
                  </li>
                </ul>
              </nav>
              <div class="search_container ml-auto">
                <div class="weather">
                  <div class="temperature">+10°</div>
                  <img
                    class="weather_icon"
                    src="/images/cloud.png"
                    alt=""
                  >
                </div>
                <form v-on:submit.prevent="onSubmit">
                  <input
                    id="search_input"
                    type="search"
                    class="header_search_input"
                    required="required"
                    autocomplete="off"
                    placeholder="搜索文章....😄"
                    v-model="searchField"
                  />
                  <img
                    class="header_search_icon"
                    src="/images/search.png"
                    alt=""
                  >
                </form>
              </div>

              <div
                class="hamburger ml-auto menu_mm"
                @click="menuActive=!menuActive"
              >
                <i
                  class="fa fa-bars trans_200 menu_mm"
                  aria-hidden="true"
                ></i>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </header>

    <div
      class="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400"
      :class="menuActiveClass"
    >
      <div
        class="menu_close_container"
        @click="menuActive=!menuActive"
      >
        <div class="menu_close">
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="logo menu_mm"><a href="#">duc's blog</a></div>
      <div class="search">
        <form v-on:submit.prevent="onSubmit">
          <input
            type="search"
            class="header_search_input menu_mm"
            required="required"
            placeholder="搜索文章....😄"
            v-model="searchField"
          />
          <img
            class="header_search_icon menu_mm"
            src="/images/search_2.png"
            alt=""
          >
        </form>
      </div>
      <nav class="menu_nav">
        <ul class="menu_mm">
          <li
            v-for="(l, i) in links"
            :key="i"
            class="menu_mm"
          >
            <router-link
              :to="l.link"
              exact
            >{{ l.title }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ['links', 'scrolled'],
  data () {
    return {
      searchField: '',
      menuActive: false
    }
  },
  computed: {
    scrollClass () {
      return this.scrolled ? ['scrolled'] : []
    },

    menuActiveClass () {
      return this.menuActive ? ['active'] : []
    }
  },

  methods: {
    onSubmit () {
      this.$router.push({ path: '/articles', query: { searchField: this.searchField } })
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-active {
  color: #bfa;
}

.header {
  border-radius: 0 0 10px 10px;
}
</style>
