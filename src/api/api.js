import ajax, { axios } from './ajax'

const BASE_URL = process.env.VUE_APP_URL

export const getNavLinks = () => ajax(`${BASE_URL}/nav_links`)

export const getHomeArticles = () => ajax(`${BASE_URL}/home_articles`)

export const getCategories = () => ajax(`${BASE_URL}/categories`)

export const getNewestArticles = () => ajax(`${BASE_URL}/newest_articles`)

export const getArticles = (page = 1) =>
  ajax(`${BASE_URL}/articles`, {
    params: {
      page
    }
  })

export const getPopularArticles = () => ajax(`${BASE_URL}/popular_articles`)

export const getTrendingArticles = () => ajax(`${BASE_URL}/trending_articles`)

export const getTopArticles = () => ajax(`${BASE_URL}/top_articles`)

export const getArticleBy = id => ajax(`${BASE_URL}/articles/${id}`)

export const elasticSearch = query =>
  ajax(`${BASE_URL}/search_articles?q=${query}`)

export const getCommentsByArticleId = id =>
  ajax(`${BASE_URL}/articles/${id}/comments`)

export const postComments = ({
  articleId,
  postContent,
  commentId = 0,
  token = '',
  socketId
}) => {
  return axios({
    method: 'post',
    data: {
      content: postContent,
      comment_id: commentId
    },
    url: `${BASE_URL}/articles/${articleId}/comments`,
    headers: {
      Authorization: token,
      'X-Socket-ID': socketId
    }
  })
}
