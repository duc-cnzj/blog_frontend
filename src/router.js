import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@views/BlogHome'
import BlogContent from '@views/BlogContent'

const PostHome = () => import('@views/PostHome')
const PostContent = () => import('@views/PostContent')
const CategoryContent = () => import('@views/CategoryContent')
const CategoryHome = () => import('@views/CategoryHome')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        home: BlogHome,
        content: BlogContent
      }
    },
    {
      path: '/articles/:id',
      components: {
        home: PostHome,
        content: PostContent
      }
    },
    {
      path: '/categories',
      components: {
        home: CategoryHome,
        content: CategoryContent
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
