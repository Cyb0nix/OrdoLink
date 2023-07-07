<script setup>
 import HeaderUsers from '../components/HeaderUsers.vue';
 import FooterHome from '../components/FooterHome.vue';
 import LignePatient from '../components/LignePatient.vue';
</script>

<template>
  <main  class="h-full bg-white">
    <HeaderUsers />
    
    <section class="grid grid-cols-2 max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">

      <!-- Formulaire de création d'un patient -->
      <!-- TODO: le faire responsive -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-4/5 col-start-1 ml-10">
        <div class="border-2 rounded-xl border-sky-200 lg:p-12">
          <form action="" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <p class="text-sky-500 text-center text-3xl font-inter mb-10">Créer un patient</p>
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Name"
                  type="lname"
                  id="lastname"
                  v-model="patient.lastname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="name">Nom</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="First Name"
                  type="fname"
                  id="firstname"
                  v-model="patient.firstname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="firstname">Prénom</label>
              </div>
            </div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="N° Sécurité social"
                  type="num"
                  id="numSecu"
                  v-model="patient.num_secu"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Numéro de sécurité social</label>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 ">
              <div class="relative mt-4">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Email"
                  type="email"
                  id="email"
                  v-model="patient.email"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Email</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Mot de passe"
                  type="text"
                  id="password"
                  v-model="patient.password"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Mot de passe</label>
              </div>
            </div>

            <div class="flex justify-center">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-sky-500 px-5 py-3 font-medium text-white sm:w-auto mt-6"
                @click="createPatient"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
      

      <!-- Liste des patients -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-screen max-w-screen-lg col-start-2 ml-20">
        <div class="border-2 rounded-xl border-sky-200 lg:p-12">
           <form action="" class="space-y-4">
              <div class="flex">
                <p class="flex-grow-0 text-sky-500 mr-[75px] text-4xl font-inter mb-10">Liste des patients</p>
                <!-- <div class="relative flex-grow mr-20">
                  <input
                    class="w-3/4 rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                    placeholder="Nom ou Numéro de sécurité social"
                    type="name"
                    id="Recherche"
                  />
                  <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="name">Recherche un patient</label>
                </div> -->
              </div>

            <LignePatient 
            v-for="p in patientsList"
            :key="p.id"
            :firstname="p.firstname"
            :lastname="p.lastname"
            :id="p.id"
            />

          </form>
        </div>
      </div>
    </section>
    

    <FooterHome />
  </main>
</template>


<script>
import { defineProps } from 'vue';

export default {
  data() {
    return {
      patientsList: [],
      patient: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        num_secu: '',
        medecin_id: '',
      },
    };
  },
  methods: {
    async getPatientsList() {
      let token = localStorage.getItem('token');
      let typeID = localStorage.getItem('type');

      let response = await fetch('https://ordolink.fly.dev/api/medecins/patients/' + typeID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": token
        },
      });
      const data = await response.json();
      console.log("data getPatientsList : ", data)
      this.patientsList = data.patients;
    },
    async createPatient() {
      const token = localStorage.getItem('token');

      this.patient.medecin_id = localStorage.getItem('type');
      console.log("this.patient.medecin_id : ", this.patient.medecin_id)

      let response = fetch('https://ordolink.fly.dev/api/patients/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": token,
        },
        body: JSON.stringify(this.patient)
      });

      const data = await (await response).json();
      console.log("data patient : ", data)
      this.getPatientsList();
    }
  },
  mounted() {
    this.getPatientsList();

    // this.getMedecinId();
  },
};

</script>
