import * as types from './mutation-types'
import { getArticleBy, getTrendingArticles, getCategories } from '@api/api'

export default {
  async getArticleBy ({ commit }, id) {
    const article = await getArticleBy(id)

    commit(types.SET_CURRENT_ARTICLE, { article: article.data })
  },

  async getTrendingArticles ({ commit }) {
    const trendingArticles = await getTrendingArticles()

    commit(types.SET_TRENDING_ARTICLES, {
      trendingArticles: trendingArticles.data
    })
  },

  async getCategories ({ commit }) {
    const categories = await getCategories()

    commit(types.SET_CATEGORIES, {
      categories: categories.data
    })
  }
}
