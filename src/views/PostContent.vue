<template>
  <div class="page_content">
    <div class="container">
      <div class="row row-lg-eq-height">

        <!-- Post Content -->
        <div
          class="col-lg-9"
          v-show="currentArticle.id !== undefined"
        >
          <div class="post_content">

            <!-- Top Panel -->
            <div
              class="post_panel post_panel_top d-flex flex-row align-items-center justify-content-start"
              v-if="currentArticle.id !== undefined"
            >

              <div class="author_image">
                <div><img
                    :src="currentArticle.author.avatar"
                    alt=""
                  ></div>
              </div>

              <div class="post_meta">
                <router-link :to="'/authors/'+currentArticle.author.id">
                  {{currentArticle.author.name}}
                </router-link>
                <span>{{currentArticle.created_at}}</span>
              </div>

            </div>

            <!-- Post Body -->

            <div class="post_body">
              <p
                v-html="currentArticle.content"
                v-highlight
              ></p>

              <!-- Post Tags -->
              <div class="post_tags">
                <ul>
                  <li
                    class="post_tag"
                    v-for="tag in currentArticle.tags"
                    :key="tag.id"
                  >
                    <router-link :to="'/tags/'+tag.id">{{tag.name}}</router-link>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Similar Posts -->
            <div class="similar_posts">

              <!-- Post Comment -->
              <div class="post_comment">
                  <div v-if="$store.state.isLogin">
                  <img :src="$store.state.user.avatar" alt="" class="social-avatar">
                  <span>{{$store.state.user.name}}</span>
                  </div>
                  <div v-else>
                  <span class="post_comment_title">
                    发表评论
                  </span>
                  <a @click.prevent="duchref">
                  <icon-svg
                    style="cursor: pointer;"
                    name="github"
                  ></icon-svg>
                  </a>
                  </div>
                <div class="row">
                  <div class="col-xl-8">
                    <div class="post_comment_form_container">
                      <textarea id="emojiarea"></textarea>
                      <button
                        type="submit"
                        class="comment_button"
                        @click.prevent="postComment"
                      >提交</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Comments -->
              <div
                class="comments"
                v-if="visableComments.length > 0"
              >
                <div class="comments_title">评论列表</div>
                <div class="row">
                  <div class="col-xl-8">
                    <div class="comments_container">
                      <ul class="comment_list">

                        <template v-for="(comment, index) in visableComments">
                          <li
                            class="comment"
                            :key="comment.id"
                          >
                            <div class="comment_body">
                              <div class="comment_panel d-flex flex-row align-items-center justify-content-start">

                                <div class="comment_author_image">
                                  <div><img
                                      class="reply-image"
                                      :src="comment.author.avatar !== '' ? comment.author.avatar : '/images/comment_author_1.jpg'"
                                      alt=""
                                    ></div>
                                </div>

                                <small class="post_meta">
                                  <!-- <router-link :to="'/author/'+comment.author.id"> -->
                                  {{comment.author.name}}
                                  <!-- </router-link> -->
                                  <span>{{comment.created_at}}</span>
                                </small>
                                <button
                                  type="button"
                                  class="reply_button ml-auto"
                                  data-toggle="modal"
                                  data-target="#myModal"
                                  @click="reply(comment, index)"
                                >回复 Ta</button>
                              </div>
                              <div class="comment_content">
                                <p
                                  v-html="comment.body"
                                  v-highlight
                                ></p>
                              </div>
                            </div>

                            <!-- Reply -->
                            <ul class="comment_list">

                              <li
                                class="comment"
                                v-for="reply in comment.replies"
                                :key="reply.id"
                              >
                                <div class="comment_body">
                                  <div class="comment_panel d-flex flex-row align-items-center justify-content-start">
                                    <div class="comment_author_image">
                                      <div><img
                                          class="reply-image"
                                          :src="reply.author.avatar !== '' ? reply.author.avatar : '/images/comment_author_2.jpg'"
                                          alt=""
                                        ></div>
                                    </div>
                                    <small class="post_meta"><a href="#">{{reply.author.name}}</a><span>{{reply.created_at}}</span></small>
                                  </div>
                                  <div class="comment_content">
                                    <p
                                      v-html="reply.body"
                                      v-highlight
                                    ></p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </template>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="load_more"
            @click="loadMoreComments"
            v-if="showLoadMoreBar"
          >
            <div
              id="load_more"
              class="load_more_button text-center trans_200"
            >加载更多评论</div>
          </div>
          <div v-if="loading">
            <loading />
          </div>
          <div
            class="load_more"
            @click="fold"
            v-if="loadData"
          >
            <div
              id="load_more"
              class="load_more_button text-center trans_200"
            >折叠</div>
          </div>

          <hr />

        </div>

        <div
          class="col-lg-9 duc-loading"
          v-if="currentArticle.id === undefined"
        >
          <loading />
        </div>

        <!-- Sidebar -->
        <div
          class="col-lg-3"
          v-if="currentArticle.id !== undefined"
        >
          <blog-siderbar />
        </div>

        <!-- 模态框 -->
        <div
          class="modal fade"
          id="myModal"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">

              <!-- 模态框头部 -->
              <div class="modal-header">
                <h4 class="modal-title">回复: {{replyComment.author === undefined ? '' : replyComment.author.name}}</h4>
                <!-- <code>{{replyComment.body}}</code> -->
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                >&times;</button>
              </div>

              <!-- 模态框主体 -->
              <div class="modal-body">
                <textarea id="modal-emojiarea"></textarea>
                <!-- <textarea type="text" class="form-control" v-model="modalValue" placeholder="...."/> -->
              </div>

              <!-- 模态框底部 -->
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  @click="doReply"
                >回复</button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import BlogSiderbar from '@views/BlogSiderbar'
import _ from 'lodash'
import Loading from '@c/Loading'
import { mapState, mapActions, mapMutations } from 'vuex'
import { postComments, getCommentsByArticleId } from '@api/api'
import 'emojionearea'
import 'jquery-textcomplete'
import $ from 'jquery'

window.emojioneVersion = '4.0'

export default {
  components: { BlogSiderbar, Loading },

  data () {
    return {
      loadMore: false,
      loading: false,
      commentNum: 3,
      loadData: false,
      modalValue: '',
      postContent: '',
      replyComment: {},
      replyIndex: '',
      comments: []
    }
  },

  created () {
    if (this.currentArticle.id !== undefined) {
      console.log(`article.${this.currentArticle.id}.comments`)

      this.listen()
    }
    if (this.token && !this.isLogin) {
      console.log(this.token, this.isLogin)
      this.me().then(() => {
        console.log('用户信息获取成功')
      }).catch(() => {
        this.setToken('')
      })
    }
  },

  computed: {
    ...mapState({ currentArticle: 'currentArticle', token: 'token', isLogin: 'isLogin', user: 'user' }),

    githubUrl () {
      return process.env.VUE_APP_URL + '/login/github'
    },

    visableComments () {
      if (this.loadData) {
        return this.comments
      }

      return _.take(this.comments, this.commentNum)
    },

    showLoadMoreBar () {
      if (this.comments === undefined) {
        return false
      }
      return !this.loadMore && this.comments.length > this.commentNum
    }
  },

  watch: {
    $route: function (to, from) {
      console.log('leave')
      window.Echo.leave(`article.${this.$store.state.currentArticle.id}.comments`)
      this.loadMore = false
      this.loading = false
      this.loadData = false
      this.fetchComments()
    },
    currentArticle: function (o, n) {
      this.listen()
    }
  },

  mounted () {
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    this.fetchComments()
    let vm = this
    this.$nextTick(() => {
      let emoji = $('#emojiarea').emojioneArea({
        buttonTitle: '使用 tab 快速打开表情',
        pickerPosition: 'bottom',
        searchPlaceholder: '快速搜索表情',
        placeholder: '你的评论...（tips：使用 : 或者 Tab 快速呼出表情）',
        tonesStyle: 'bullet',
        saveEmojisAs: 'image',
        useInternalCDN: true
      })

      emoji[0].emojioneArea.on('keyup', function (btn, event) {
        vm.postContent = $('#emojiarea')
          .data('emojioneArea')
          .getText()
      })
      emoji[0].emojioneArea.on('emojibtn.click', function (btn, event) {
        vm.postContent = $('#emojiarea')
          .data('emojioneArea')
          .getText()
      })

      let modalEmoji = $('#modal-emojiarea').emojioneArea({
        buttonTitle: '使用 tab 快速打开表情',
        pickerPosition: 'bottom',
        searchPlaceholder: '快速搜索表情',
        placeholder: '你的回复...',
        tonesStyle: 'bullet',
        saveEmojisAs: 'image',
        useInternalCDN: true
      })

      modalEmoji[0].emojioneArea.on('keyup', function (btn, event) {
        vm.modalValue = $('#modal-emojiarea')
          .data('emojioneArea')
          .getText()
      })
      modalEmoji[0].emojioneArea.on('emojibtn.click', function (btn, event) {
        vm.modalValue = $('#modal-emojiarea')
          .data('emojioneArea')
          .getText()
      })
    })
  },

  methods: {
    ...mapMutations({ setToken: 'set_token' }),
    ...mapActions(['me']),
    listen () {
      console.log(`article.${this.$store.state.currentArticle.id}.comments`)

      window.Echo.channel(`article.${this.$store.state.currentArticle.id}.comments`)
        .listen('CommentCreated', (e) => {
          if (e.comment_id === 0) {
            this.comments.unshift(e)
          } else {
            for (let index = 0; index < this.comments.length; index++) {
              if (this.comments[index].id === e.comment_id) {
                console.log(index)

                this.comments[index]['replies'].push(e)
                break
              }
            }
          }
        })
    },
    duchref () {
      window.open(this.githubUrl, 'newwindow', 'height=500, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')

      var that = this
      window.addEventListener('message', function (e) {
        that.me(e.data).then(() => {
          console.log('用户信息获取成功')
          that.setToken(e.data)
        }).catch(() => {
          that.setToken('')
        })
      }, false)
    },

    fold () {
      this.loading = false
      this.loadMore = false
      this.loadData = false
    },
    async fetchComments () {
      const comments = await getCommentsByArticleId(this.$route.params.id)
      this.comments = comments.data
    },

    async postComment () {
      if (!this.postContent) {
        window.toastr.warning('评论内容不能为空')
        return
      }

      let obj = {
        articleId: this.currentArticle.id,
        postContent: this.postContent,
        token: this.token,
        socketId: window.Echo.socketId()
      }

      const data = await postComments(obj)

      this.postContent = ''
      $('#emojiarea')
        .data('emojioneArea')
        .setText('')
      window.toastr.info('提交成功')
      this.comments.unshift(data.data)
    },

    async doReply () {
      if (!this.modalValue) {
        window.toastr.warning('回复内容不能为空')
        return
      }

      const data = await postComments({
        articleId: this.currentArticle.id,
        postContent: this.modalValue,
        commentId: this.replyComment.id,
        token: this.token,
        socketId: window.Echo.socketId()
      })

      this.modalValue = ''
      $('#modal-emojiarea')
        .data('emojioneArea')
        .setText('')
      window.toastr.success('回复成功')

      if (data.data.comment_id === 0) {
        this.comments.unshift(data.data)
      } else {
        for (let index = 0; index < this.comments.length; index++) {
          if (this.comments[index].id === data.data.comment_id) {
            console.log(index)

            this.comments[index]['replies'].push(data.data)
            break
          }
        }
      }
    },

    reply (comment, index) {
      console.log('reply-index: ' + index)

      this.replyComment = comment
      this.replyIndex = index
    },

    loadMoreComments () {
      this.loading = true
      this.loadMore = true

      setTimeout(() => {
        this.loading = false
        this.loadData = true
      }, 500)
    }
  }
}
</script>

<style lang="scss" socped>
@import "~emojionearea/dist/emojionearea.css";

.page_content {
  background: #f7f7f7;
}
.category {
  margin-top: 80px;
}

/*********************************
6.1 Post Panel
*********************************/

.post_panel {
  height: 108px;
  z-index: 10;
  margin-top: 40px;
}

.author_image div {
  width: 58px;
  height: 58px;
  border: solid 5px #ffffff;
  border-radius: 50%;
  overflow: hidden;
}
.author_image div img {
  max-width: 100%;
}
.post_panel .post_meta {
  font-family: "Ubuntu", sans-serif;
  color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 0;
}
.post_panel .post_meta a,
.post_panel .post_meta span {
  display: inline-block;
  position: relative;
  font-family: "Ubuntu", sans-serif;
  color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
  font-weight: 500;
}
.post_panel .post_meta span {
  margin-left: 10px;
  padding-left: 5px;
}
.post_panel .post_meta span::before {
  display: block;
  position: absolute;
  top: 1px;
  left: -4px;
  content: "•";
}
.post_share span {
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.2);
  letter-spacing: 0.075em;
  font-weight: 700;
  margin-right: 28px;
}
.post_share_list {
  display: inline-block;
}
.post_share_item {
  display: inline-block;
}
.post_share_item:not(:last-child) {
  margin-right: 15px;
}
.post_share_item a i {
  font-size: 14px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.fa-facebook {
  color: #3b5999;
}
.fa-twitter {
  color: #55acee;
}
.fa-google {
  color: #dd4b39;
}
.post_share_item:hover a i {
  color: rgba(0, 0, 0, 0.2);
}

/*********************************
6.2 Post Body
*********************************/

.post_body {
  padding-left: 40px;
  padding-top: 59px;
  padding-right: 40px;
  padding-bottom: 45px;
  background: #ffffff;
  border-radius: 6px;
}
.post_p {
  font-size: 16px;
  line-height: 1.875;
  color: rgba(0, 0, 0, 0.8);
}
.post_body figure {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 43px;
}
.post_body figure img {
  max-width: 100%;
}
.post_body figcaption {
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.3);
  text-align: center;
  margin-top: 8px;
}
.post_quote {
  padding-top: 58px;
  padding-bottom: 58px;
  padding-left: 30px;
  padding-right: 30px;
}
.post_quote .post_p {
  font-weight: 600;
  font-size: 16px;
}
.post_quote_source {
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 21px;
}
.post_tags {
  margin-top: 40px;
}
.post_tag {
  display: inline-block;
  width: auto;
  height: 24px;
  border: solid 1px #d7d7d7;
  border-radius: 3px;
  background: transparent;
  margin-bottom: 5px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.post_tag:not(:last-child) {
  margin-right: 6px;
}
.post_tag a {
  display: block;
  line-height: 22px;
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
}
.post_tag:hover {
  background: #ededed;
  border-color: #ededed;
}
.bottom_panel {
  margin-top: 0;
}

/*********************************
6.3 Similar Posts
*********************************/

.similar_posts {
  margin-top: 15px;
}

/*********************************
6.4 Post Comment
*********************************/

.post_comment {
  margin-top: 70px;
}
.post_comment_title {
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
}
.post_comment_form_container {
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  padding-bottom: 40px;
  margin-top: 44px;
}
.comment_input {
  display: inline-block;
  width: calc(50% - 15px);
  height: 42px;
  border: none;
  outline: none;
  border-bottom: solid 1px #cccccc;
  background: transparent;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input:first-child {
  margin-right: 25px;
}
.comment_input:hover,
.comment_text:hover {
  border-color: rgba(0, 0, 0, 1);
}
.comment_text {
  width: 100%;
  height: 90px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: solid 1px #cccccc;
  padding-top: 11px;
  margin-top: 23px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input::-webkit-input-placeholder,
.comment_text::-webkit-input-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(0, 0, 0, 0.3);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input:-moz-placeholder,
.comment_text:-moz-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(0, 0, 0, 0.3);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input::-moz-placeholder,
.comment_text::-moz-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(0, 0, 0, 0.3);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input:-ms-input-placeholder,
.comment_text:-ms-input-placeholder {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: rgba(0, 0, 0, 0.3);
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_input::input-placeholder,
.comment_text::input-placeholder {
  color: rgba(0, 0, 0, 1);
}

.comment_input:hover::-webkit-input-placeholder,
.comment_text:hover::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 1);
}
.comment_input:hover:-moz-placeholder,
.comment_text:hover:-moz-placeholder {
  color: rgba(0, 0, 0, 1);
}
.comment_input:hover::-moz-placeholder,
.comment_text:hover::-moz-placeholder {
  color: rgba(0, 0, 0, 1);
}
.comment_input:hover:-ms-input-placeholder,
.comment_text:hover:-ms-input-placeholder {
  color: rgba(0, 0, 0, 1);
}
.comment_input:hover::input-placeholder,
.comment_text:hover::input-placeholder {
  color: rgba(0, 0, 0, 1);
}
.comment_button {
  width: 143px;
  height: 36px;
  background: rgba(45, 223, 128, 0.1);
  color: rgba(45, 223, 128, 1);
  border: none;
  outline: none;
  border-radius: 18px;
  cursor: pointer;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
  margin-top: 24px;
}
.comment_button:hover {
  background: rgba(45, 223, 128, 1);
  color: #ffffff;
}

/*********************************
6.5 Comments
*********************************/

.comments {
  margin-top: 70px;
}
.comments_title {
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
}
.comments_container {
  width: 100%;
  margin-top: 44px;
}
.comment_list > li {
  margin-bottom: 15px;
}
.comment {
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
}
.comment_body {
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 30px;
  padding-right: 30px;
}
.comment_author_image {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
}
.comment_body .post_meta {
  margin-top: 0;
  margin-left: 18px;
}
.reply_button {
  width: 76px;
  height: 28px;
  background: rgba(45, 223, 128, 0.1);
  color: rgba(45, 223, 128, 1);
  border: none;
  outline: none;
  border-radius: 18px;
  cursor: pointer;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.reply_button:hover {
  background: rgba(45, 223, 128, 1);
  color: #ffffff;
}
.comment_content {
  margin-top: 22px;
}
.comment ul li {
  border-top: solid 1px #e5e5e5;
}

.duc-loading {
  // height: 20vh;
}

.reply-image {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.social-avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
}
</style>
