import { createRouter, createWebHistory } from 'vue-router';
import { config } from '../../config.js'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import PatientHome from '../views/Patient.vue'
import MedecinCreerOrdonnance from '../views/MedecinCreerOrdonnance.vue'
import MedecinListePatient from '../views/MedecinListePatient.vue'
import AdminCreerCompte from '../views/AdminCreerCompte.vue'
import MedecinListeOrdonnance from '../views/MedecinListeOrdonnance.vue'
import AfficherOrdonnance from '../views/AfficherOrdonnance.vue'
import Pharmacien from '../views/PharmacienPatientOrdo.vue'
import AdminListUser from '../views/AdminListUser.vue'


async function routGard(to, from, next) {   //ne marche pas
  let token = localStorage.getItem('token');
  
  const response = await fetch('https://ordolink.fly.dev/api/users/state', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
  console.log("response : ", response);
  
  if (response.status == 200) {
    next();
  }
  else {
    next('/Login');
  }
}

const router = createRouter({
  history: createWebHistory('/OrdoLink/'),
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
      // beforeEnter: routGard
    },
    {
      path: '/medecin/liste-ordonnance/:id',
      name: 'medecin-liste-ordonnance',
      component: MedecinListeOrdonnance,
      // beforeEnter: routGard
    },
    {
      path: '/medecin/liste-patient',
      name: 'medecin-liste-patient',
      component: MedecinListePatient,
      // beforeEnter: routGard
    },
    {
      path: '/medecin/ordonnance/:id',
      name: 'medecin-ordonnance',
      component: MedecinCreerOrdonnance,
      // beforeEnter: routGard
    },
    {
      path: '/admin/creer-compte',
      name: 'admin-creer-compte',
      component: AdminCreerCompte,
      // beforeEnter: routGard
    },
    {
      path: '/ordonnance/:id',
      name: 'afficher-ordonnance',
      component: AfficherOrdonnance,
      // beforeEnter: routGard
    },
    {
      path: '/pharmacien',
      name: 'pharmacien',
      component: Pharmacien,
      // beforeEnter: routGard
    },
    {
      path: '/admin',
      name: 'admin-liste-user',
      component: AdminListUser,
      // beforeEnter: routsGard
    },
  ]
})


export default router
