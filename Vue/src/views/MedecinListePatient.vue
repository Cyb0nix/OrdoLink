<script setup>
 import HeaderMedecin from '../components/HeaderMedecin.vue';
 import FooterHome from '../components/FooterHome.vue';
 import LignePatient from '../components/LignePatient.vue';
</script>

<template>
  <main  class="h-full bg-white">
    <HeaderMedecin />
    
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
                  type="name"
                  id="lastname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="name">Nom</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="First Name"
                  type="firstname"
                  id="firstname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="firstname">Prénom</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Email"
                  type="email"
                  id="email"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Email</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="N° Sécurité social"
                  type="password"
                  id="password"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Numéro de sécurité social</label>
              </div>
            </div>
            <div class="flex justify-center">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-sky-500 px-5 py-3 font-medium text-white sm:w-auto mt-8"
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
                <div class="relative flex-grow mr-20">
                  <input
                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                    placeholder="Name"
                    type="name"
                    id="lastname"
                  />
                  <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="name">Recherche un patient</label>
                </div>
            </div>

            <LignePatient 
            v-for="patient in patientsList"
            :key="patient.id"
            :firstame="patient.firstname"
            :lastname="patient.lastname"
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
  props: {
    patientsList: Array,
  },
  computed: {
    async patientsList() {
      let response = await fetch('https://ordolink.fly.dev/api/users/get', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      let data = await response.json();
      return data;
    },
  },
};

</script>
