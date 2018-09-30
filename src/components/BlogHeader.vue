<template>
    <div>
        <header class="header">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="header_content d-flex flex-row align-items-center justify-content-start">
                            <div class="logo"><a href="#">duc's blog</a></div>
                            <nav class="main_nav">
                                <ul>
                                    <li v-for="(l, i) in links" :key="i">
                                        <router-link :to="l.link" exact>{{ l.title }}</router-link>
                                    </li>
                                </ul>
                            </nav>
                            <div class="search_container ml-auto">
                                <div class="weather">
                                    <div class="temperature">+10°</div>
                                    <img class="weather_icon" src="images/cloud.png" alt="" >
                            </div>
                                    <form action="#">
                                        <input type="search" class="header_search_input" required="required" placeholder="搜索文章....😄" />
                                        <img class="header_search_icon" src="images/search.png" alt="">
                                </form>
                                </div>

                                <div class="hamburger ml-auto menu_mm">
                                    <i class="fa fa-bars trans_200 menu_mm" aria-hidden="true"></i>
                                </div>
                                <!-- </div> -->
                            </div>
                        </div>
                    </div>
                </div>
        </header>

        <div class="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
            <div class="menu_close_container">
                <div class="menu_close">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="logo menu_mm"><a href="#">Avision</a></div>
            <div class="search">
                <form action="#">
                    <input type="search" class="header_search_input menu_mm" required="required" placeholder="搜索文章....😄"/>
                    <img class="header_search_icon menu_mm" src="images/search_2.png" alt="">
                </form>
            </div>
            <nav class="menu_nav">
                <ul class="menu_mm">
                    <li v-for="(l, i) in links" :key="i" class="menu_mm">
                        <router-link :to="l.link" exact>{{ l.title }}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  props: ['links']
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
