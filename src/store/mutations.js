import * as types from './mutation-types'

export default {
  [types.SET_CURRENT_ARTICLE] (state, { article }) {
    state.currentArticle = article
  },

  [types.SET_TRENDING_ARTICLES] (state, { trendingArticles }) {
    state.trendingArticles = trendingArticles
  },

  [types.SET_CATEGORIES] (state, { categories }) {
    state.categories = categories
  }
}
