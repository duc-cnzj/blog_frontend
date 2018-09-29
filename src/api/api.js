import ajax from './ajax'

const BASE_URL = process.env.VUE_APP_URL

export const getNavLinks = () => ajax(`${BASE_URL}/nav_links.json`)
export const getHomeArticles = () => ajax(`${BASE_URL}/home_articles.json`)
export const getCategories = () => ajax(`${BASE_URL}/categories.json`)
export const getNewestArticles = () => ajax(`${BASE_URL}/newest_articles.json`)
export const getPopularArticles = () => ajax(`${BASE_URL}/popular_articles.json`)
