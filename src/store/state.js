import { getToken } from '@/utils/token'

export default {
  currentArticle: {},
  trendingArticles: [],
  topArticles: [],
  categories: [],
  welcome: false,
  search: '',
  user: {
    id: null,
    name: '',
    avatar: '',
    lastLoginAt: ''
  },
  isLogin: false,
  token: getToken()
}
