import * as types from './mutation-types'
import {
  getArticleBy,
  getTrendingArticles,
  getCategories,
  getTopArticles
} from '@api/api'
import { login, me } from '@/api/user'
import router from '../router'

export default {
  async getArticleBy ({ commit }, id) {
    try {
      const article = await getArticleBy(id)

      commit(types.SET_CURRENT_ARTICLE, { article: article.data })
    } catch (err) {
      if (err.response && err.response.status === 404) {
        window.toastr.warning('该文章不存在！')
        router.go(-1)
      }
    }
  },

  async getTrendingArticles ({ commit }) {
    const trendingArticles = await getTrendingArticles()

    commit(types.SET_TRENDING_ARTICLES, {
      trendingArticles: trendingArticles.data
    })
  },

  async getTopArticles ({ commit }) {
    const topArticles = await getTopArticles()

    commit(types.SET_TOP_ARTICLES, {
      topArticles: topArticles.data
    })
  },

  async getCategories ({ commit }) {
    const categories = await getCategories()

    commit(types.SET_CATEGORIES, {
      categories: categories.data
    })
  },

  welcomeUser ({ commit }) {
    commit(types.WELCOME)
  },

  loginUser ({ commit }) {
    login().then(res => {
      console.log(res.data)
    })
  },

  me ({ commit }) {
    me().then(({ data }) => {
      commit(types.SETUSER, data)
    })
  }
}
