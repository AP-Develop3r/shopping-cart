import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import  Home from "../components/Home.vue"


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Home,



  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router;

  // beforeEnter