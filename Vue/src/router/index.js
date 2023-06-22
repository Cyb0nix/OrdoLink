import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MedecinOrdonnance from '../views/MedecinCreerOrdonnance.vue'

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
    }
  ]
})

export default router
