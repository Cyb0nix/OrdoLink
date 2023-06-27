<script setup>
import { ref } from 'vue';
import HeaderMedecin from '../components/HeaderMedecin.vue';
import FooterHome from '../components/FooterHome.vue';

const medications = ref([]); // Reactive array to store medication rows

function addMedicationRow() {
  medications.value.push({});
}

</script>

<template>
  <main  class="h-full bg-white">
    <HeaderMedecin />
    
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold font-poppins text-sky-500 mt-12">
        Créer une ordonnance
      </h1>
      <p class="text-sm font-medium text-gray-500 mb-6">
        Remplissez le formulaire ci-dessous pour créer une ordonnance
      </p>
    </div>
    
    <section class="mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="border-2 rounded-xl border-sky-200 lg:col-span-3 lg:p-12">
           <form action="" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-300"
                  placeholder="Nom patient"
                  type="text"
                  id="firstname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="firstname">Nom patient</label>
              </div>

              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Prénom patient"
                  type="text"
                  id="lastname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Prénom patient</label>
              </div>
            </div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                  placeholder="Numéro de sécurité sociale"
                  type="text"
                  id="NumSecu"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="date">Numéro de sécurité sociale</label>
              </div>
            </div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"></div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-300"
                  placeholder="Nom médicament"
                  type="text"
                  id="medcicine"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="firstname">Medicament</label>
              </div>

              <div class="relative">
                <input
                  class="w-screen-md rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Quantité"
                  type="text"
                  id="quantity"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Quantité</label>
              </div>
            </div>

            <!-- Ads medication Rows -->
            <div v-for="(medication, index) in medications" :key="index">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div class="relative">
                  <input
                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-300"
                    :placeholder="`Nom médicament ${index + 1}`"
                    type="text"
                    :id="`medcicine-${index+1}`"
                  />
                  <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" :for="`medcicine-${index+1}`">Medicament {{ index + 1 }}</label>
                </div>

                <div class="relative">
                  <input
                    class="w-screen-md rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                    placeholder="Quantité"
                    type="text"
                    :id="`quantity-${index+1}`"
                  />
                  <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" :for="`quantity-${index+1}`">Quantité</label>
                </div>
              </div>
            </div>
            
            <!-- Add Medication Button -->
            <div class="flex justify-end">
              <button
                type="button"
                class="inline-flex items-center -mt-4 mb-4 px-4 py-2 font-medium text-white bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
                @click="addMedicationRow"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
            </div>

            <div>
              <label class="sr-only" for="message">Message</label>

              <textarea
                class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm resize-none"
                placeholder="Message"
                rows="3"
                id="message"
              ></textarea>
            </div>

            <div class="mt-4">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-sky-500 px-5 py-3 font-medium text-white sm:w-auto"
                @click.prevent="imprimer"
              >
                Ajouter une ordonnance
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </section>
   <FooterHome />
  </main>
</template>