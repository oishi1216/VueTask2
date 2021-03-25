import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page_1 from "../components/Page_1.vue"
import Page_2 from "../components/Page_2.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page1',
    name: 'page1',
    component: Page_1
  },
  {
    path: '/page2',
    name: 'page12',
    component: Page_2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
