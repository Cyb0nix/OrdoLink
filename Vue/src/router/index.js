import { createRouter, createWebHistory } from 'vue-router'
import HomePagePharmanotlog from '../views/HomePagePharmanotlog.vue'
import HomePageMednotlog from '../views/HomePageMednotlog.vue'
import HomePageOrdonotlog from "../views/HomePageOrdonotlog.vue";
import HomePageNotifnotlog from "../views/HomePageNotifnotlog.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePagePharmanotlog',
      component: HomePagePharmanotlog
    },
    {
      path: '/',
      name: 'HomePageMednotlog',
      component: HomePageMednotlog
    },
    {
      path: '/',
      name: 'HomePageNotifnotlog',
      component: HomePageNotifnotlog
    },
    {
      path: '/',
      name: 'HomePageOrdonotlog',
      component: HomePageOrdonotlog
    },
  ]
})

export default router
