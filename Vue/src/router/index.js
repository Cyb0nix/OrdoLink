import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MedecinOrdonnance from '../views/MedecinCreerOrdonnance.vue'
import LoginPage from '../views/LoginPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/medecin/ordonnance',
      name: 'medecin-ordonnance',
      component: MedecinOrdonnance
    },
    {
      path: '/Login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})

export default router
