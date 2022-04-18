import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buttons',
    name: 'Buttons',

    component: () => import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },
  {
    path: '/dropdowns',
    name: 'Dropdowns',
    component: () => import(/* webpackChunkName: "dropdowns" */ '../views/Dropdowns.vue')
  },
  {
    path: '/inputs',
    name: 'Inputs',
    component: () => import(/* webpackChunkName: "inputs" */ '../views/Inputs.vue')
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import(/* webpackChunkName: "lists" */ '../views/Lists.vue')
  },
  {
    path: '/menus',
    name: 'Menus',
    component: () => import(/* webpackChunkName: "menus" */ '../views/Menus.vue')
  },
  {
    path: '/modals',
    name: 'Modals',
    component: () => import(/* webpackChunkName: "modals" */ '../views/Modals.vue')
  },
  {
    path: '/pickers',
    name: 'Pickers',
    component: () => import(/* webpackChunkName: "pickers" */ '../views/Pickers.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import(/* webpackChunkName: "progress" */ '../views/Progress.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
