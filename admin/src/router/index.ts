import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

import ResourceCrud from '../views/ResourceCrud.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        name: 'home', path: '/', component: Home
      },
      {
        name: 'course', path: '/:resource/list', component: ResourceCrud,props:true
      },
      

    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
