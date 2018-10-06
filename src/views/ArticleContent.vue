<template>
    <div class="page_content">
        <div class="container">
            <div class="row row-lg-eq-height">
                <div class="col-lg-9 offset-lg-1">
                    <div class="section_content">

                        <div class="card-deck-wrapper duc">
                            <div class="card-deck">
                                <small-card-with-image image="images/post_1.jpg" path="'/articles/'+popularArticles[0].id" title="popularArticles[0].title" author="popularArticles[0].author.name" author_url="'/authors/'+popularArticles[0].author.id" created_at="popularArticles[0].created_at" desc="popularArticles[0].desc" />
                                <small-card-with-image image="images/post_1.jpg" path="'/articles/'+popularArticles[0].id" title="popularArticles[0].title" author="popularArticles[0].author.name" author_url="'/authors/'+popularArticles[0].author.id" created_at="popularArticles[0].created_at" desc="popularArticles[0].desc" />
                                <small-card-with-image image="images/post_1.jpg" path="'/articles/'+popularArticles[0].id" title="popularArticles[0].title" author="popularArticles[0].author.name" author_url="'/authors/'+popularArticles[0].author.id" created_at="popularArticles[0].created_at" desc="popularArticles[0].desc" />

                            </div>
                            <div class="card-deck">
                                <small-card-with-image image="images/post_1.jpg" path="'/articles/'+popularArticles[0].id" title="popularArticles[0].title" author="popularArticles[0].author.name" author_url="'/authors/'+popularArticles[0].author.id" created_at="popularArticles[0].created_at" desc="popularArticles[0].desc" />
                                <small-card-with-image image="images/post_1.jpg" path="'/articles/'+popularArticles[0].id" title="popularArticles[0].title" author="popularArticles[0].author.name" author_url="'/authors/'+popularArticles[0].author.id" created_at="popularArticles[0].created_at" desc="popularArticles[0].desc" />
                                <small-card-with-image image="images/post_1.jpg" path="'/articles/'+popularArticles[0].id" title="popularArticles[0].title" author="popularArticles[0].author.name" author_url="'/authors/'+popularArticles[0].author.id" created_at="popularArticles[0].created_at" desc="popularArticles[0].desc" />
                            </div>
                            <div class="card-deck">
                                <small-card-with-image image="images/post_1.jpg" path="'/articles/'+popularArticles[0].id" title="popularArticles[0].title" author="popularArticles[0].author.name" author_url="'/authors/'+popularArticles[0].author.id" created_at="popularArticles[0].created_at" desc="popularArticles[0].desc" />
                                <small-card-with-image image="images/post_1.jpg" path="'/articles/'+popularArticles[0].id" title="popularArticles[0].title" author="popularArticles[0].author.name" author_url="'/authors/'+popularArticles[0].author.id" created_at="popularArticles[0].created_at" desc="popularArticles[0].desc" />
                                <small-card-with-image image="images/post_1.jpg" path="'/articles/'+popularArticles[0].id" title="popularArticles[0].title" author="popularArticles[0].author.name" author_url="'/authors/'+popularArticles[0].author.id" created_at="popularArticles[0].created_at" desc="popularArticles[0].desc" />

                            </div>
                        </div>

                        <paginator />
                        <hr />
                    </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import SmallCardWithImage from '@c/SmallCardWithImage'
import Paginator from '@c/Paginator'

export default {
  components: {
    SmallCardWithImage, Paginator
  }
}
</script>

<style lang="scss" scoped>
.duc {
  margin-bottom: 30px;
}
</style>
