import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MyLikes',
    name: 'MyLikes',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyLikes.vue')
  },
  {
    path: '/VideoContent',
    name: 'VideoContent',
    component: () => import(/* webpackChunkName: "VideoContent" */ '../views/VideoContent.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
