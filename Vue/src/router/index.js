import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import PatientHome from '../views/Patient.vue'
import MedecinOrdonnance from '../views/MedecinCreerOrdonnance.vue'


function routGard(to, from, next) {
  if (localStorage.getItem('token') === null) {
    next('/Login')
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/patient',
      name: 'patient',
      component: PatientHome,
    },
    {
      path: '/medecin/ordonnance',
      name: 'medecin-ordonnance',
      component: MedecinOrdonnance,
      beforeEnter: routGard
    },

  ]
})

export default router
