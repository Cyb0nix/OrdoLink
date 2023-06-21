import { createRouter, createWebHistory } from 'vue-router'
import HomePagePharmanotlog from '../views/HomePagePharmanotlog.vue'
import HomePageMednotlog from '../views/HomePageMednotlog.vue'
import HomePageOrdonotlog from "../views/HomePageOrdonotlog.vue";
import HomePageNotifnotlog from "../views/HomePageNotifnotlog.vue";
const routes = [
  {
    path: '/ordonotlog',
    name: 'HomePageOrdonotlog',
    component: HomePageOrdonotlog
  },
  {
    path: '/',
    name: 'HomePageMednotlog',
    component: HomePageMednotlog
  },
  {
    path: '/notifnotlog',
    name: 'HomePageNotifnotlog',
    component: HomePageNotifnotlog
  },
  {
    path: '/pharmanotlog',
    name: 'HomePagePharmanotlog',
    component: HomePagePharmanotlog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
