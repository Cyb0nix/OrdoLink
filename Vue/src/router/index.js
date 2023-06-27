import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import PatientHome from '../views/Patient.vue'
import MedecinOrdonnance from '../views/MedecinCreerOrdonnance.vue'
import MedecinListePatient from '../views/MedecinListePatient.vue'
import AdminCreerCompte from '../views/AdminCreerCompte.vue'

async function routGard(to, from, next) {
  if (localStorage.getItem('token') != null) {
    try {
      const response = await fetch('https://ordolink.fly.dev/api/users/state', {
        method: 'GET',
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      });
      console.log("response : " + response);

      if (response.status == 200) {
        next();
      } else {
        next('/Login');
      }
    } catch (error) {
      console.log(error);
      next('/Login');
    }
  } else {
    next('/Login');
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
      beforeEnter: routGard
    },
    {
      path: '/medecin/liste-patient',
      name: 'medecin-liste-patient',
      component: MedecinListePatient,
    },
    {
      path: '/medecin/ordonnance',
      name: 'medecin-ordonnance',
      component: MedecinOrdonnance,
      // beforeEnter: routGard
    },
    {
      path: '/admin/creer-compte',
      name: 'admin-creer-compte',
      component: AdminCreerCompte,
      beforeEnter: routGard
    }
  ]
})

export default router
