import ajax from './ajax'

const BASE_URL = process.env.VUE_APP_URL

export const getNavLinks = () => ajax(`${BASE_URL}/nav_links`)
export const getHomeArticles = () => ajax(`${BASE_URL}/home_articles`)
export const getCategories = () => ajax(`${BASE_URL}/categories`)
export const getNewestArticles = () => ajax(`api/newest_articles.json`)
export const getPopularArticles = () => ajax(`api/popular_articles.json`)
export const getTrendingArticles = () => ajax(`api/trending_articles.json`)
export const getArticleBy = (id) => ajax(`${BASE_URL}/articles/${id}`)

export const postComments = ({ articleId, postContent, commentId = 0 }) => ajax(`${BASE_URL}/articles/${articleId}/comments`, {
  content: postContent,
  comment_id: commentId
}, 'post')
