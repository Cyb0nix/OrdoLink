<script setup>
import { ref } from 'vue';
import HeaderUsers from '../components/HeaderUsers.vue';
import FooterHome from '../components/FooterHome.vue';

</script>

<template>
  <main  class="h-full bg-white">
    <HeaderUsers />
    
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
        <div class="border-2 rounded-xl border-sky-300 lg:col-span-3 lg:p-12">
           <form action="" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  :placeholder="`${ patient.firstname }`"
                  type="text"
                  id="firstname"
                  v-model="patient.firstname"
                  disabled
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Nom patient</label>
              </div>

              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  :placeholder="`${ patient.lastname }`"
                  type="text"
                  id="lastname"
                  v-model="patient.lastname"
                  disabled
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="lastname">Prénom patient</label>
              </div>
            </div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Numéro de sécurité sociale"
                  type="text"
                  id="NumSecu"
                  v-model="patient.num_secu"
                  disabled
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="date">Numéro de sécurité sociale</label>
              </div>
            </div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"></div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Nom médicament 0"
                  type="text"
                  id="medcicine-0"
                  v-model="prescriptions[0].medecine"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Medicament 0</label>
              </div>

              <div class="relative">
                <input
                  class="w-screen-md rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Quantité"
                  type="number"
                  id="quantity-0"
                  v-model="prescriptions[0].quantity"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="lastname">Quantité</label>
              </div>
            </div>
            
            <div>
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Posologie médicament 0"
                  type="text"
                  id="posologie-0"
                  v-model="prescriptions[0].posologie"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Posologie</label>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"></div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Nom médicament 1"
                  type="text"
                  id="medcicine-1"
                  v-model="prescriptions[1].medecine"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Medicament 0</label>
              </div>

              <div class="relative">
                <input
                  class="w-screen-md rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Quantité"
                  type="number"
                  id="quantity-1"
                  v-model="prescriptions[1].quantity"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="lastname">Quantité</label>
              </div>
            </div>
            
            <div>
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Posologie médicament 1"
                  type="text"
                  id="posologie-1"
                  v-model="prescriptions[1].posologie"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Posologie</label>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"></div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Nom médicament 2"
                  type="text"
                  id="medcicine-2"
                  v-model="prescriptions[2].medecine"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Medicament 0</label>
              </div>

              <div class="relative">
                <input
                  class="w-screen-md rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Quantité"
                  type="number"
                  id="quantity-2"
                  v-model="prescriptions[2].quantity"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="lastname">Quantité</label>
              </div>
            </div>
            
            <div>
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Posologie médicament 2"
                  type="text"
                  id="posologie-2"
                  v-model="prescriptions[2].posologie"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Posologie</label>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"></div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Nom médicament 3"
                  type="text"
                  id="medcicine-3"
                  v-model="prescriptions[3].medecine"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Medicament 0</label>
              </div>

              <div class="relative">
                <input
                  class="w-screen-md rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Quantité"
                  type="number"
                  id="quantity-3"
                  v-model="prescriptions[3].quantity"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="lastname">Quantité</label>
              </div>
            </div>
            
            <div>
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Posologie médicament 3"
                  type="text"
                  id="posologie-3"
                  v-model="prescriptions[3].posologie"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Posologie</label>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"></div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Nom médicament 4"
                  type="text"
                  id="medcicine-4"
                  v-model="prescriptions[4].medecine"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Medicament 0</label>
              </div>

              <div class="relative">
                <input
                  class="w-screen-md rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Quantité"
                  type="number"
                  id="quantity-4"
                  v-model="prescriptions[4].quantity"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="lastname">Quantité</label>
              </div>
            </div>
            
            <div>
              <div  class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-500"
                  placeholder="Posologie médicament 4"
                  type="text"
                  id="posologie-4"
                  v-model="prescriptions[4].posologie"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Posologie</label>
              </div>
            </div>


            

            <!-- Ads medication Rows
            <div v-for="(medication, index) in medications" :key="index">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div class="relative lg:mt-4">
                  <input
                    class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-300"
                    :placeholder="`Nom médicament ${index + 1}`"
                    type="text"
                    :id="`medcicine-${index+1}`"
                    v-model="prescriptions[index+1].medicine"
                  />
                  <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" :for="`medcicine-${index+1}`">Medicament {{ index + 1 }}</label>
                </div>

                <div class="relative lg:mt-4">
                  <input
                    class="w-screen-md rounded-lg border-2 border-sky-300 p-3 text-sm text-black"
                    placeholder="Quantité"
                    type="number"
                    :id="`quantity-${index+1}`"
                    v-model="prescriptions[index+1].quantity"
                  />
                  <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" :for="`quantity-${index+1}`">Quantité</label>
                </div>
              </div>

              <div class="lg:mt-4 lg:mb-4">
                <div  class="relative">
                  <input
                    class="w-full rounded-lg border-2 border-sky-300 p-3 text-sm text-gray-300"
                    :placeholder="`Posologie médicament ${index + 1}`"
                    type="text"
                    :id="`posologie-${index+1}`"
                    v-model="prescriptions[index+1].posologie"
                  />
                  <label class="absolute left-3 -top-3 bg-white text-sky-300 font-bold text-lg px-2" for="firstname">Posologie</label>
                </div>
              </div>
            </div>
            
            Add Medication Button
            <div class="flex justify-end">
              <button
                type="button"
                class="inline-flex items-center -mt-2 mb-2 px-4 py-2 font-medium text-white bg-sky-400 rounded-lg hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
                @click="addMedicationRow"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
            </div> -->

            <div class="mt-4">
              <button
                type="button"
                class="inline-block w-full rounded-lg bg-sky-600 px-5 py-3 font-medium text-white sm:w-auto"
                @click="createOrdonnance(this.$route.params.id)"
              >
                Créer une ordonnance
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </section>
   <FooterHome />
  </main>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MedecinCreerOrdonnance',
  data() {
    return {
      patient:{
        firstname: null,
        lastname: null,
        num_secu: null,
      },

      prescriptions: [
        {
          medecine: null,
          quantity: null,
          posologie: null,
          renewale: "0",
          given: false,
        },
        {
          medecine: null,
          quantity: null,
          posologie: null,
          renewale: "0",
          given: false,
        },
        {
          medecine: null,
          quantity: null,
          posologie: null,
          renewale: "0",
          given: false,
        },
        {
          medecine: null,
          quantity: null,
          posologie: null,
          renewale: "0",
          given: false,
        },
        { 
          medecine: null,
          quantity: null,
          posologie: null,
          renewale: "0",
          given: false,
        }
      ],
        
      
      activePage: null,
    };
  },
  methods: {
    async getPatientInfo(){
      let token = localStorage.getItem('token');

      let response = await fetch('https://ordolink.fly.dev/api/patients/get/'+ this.$route.params.id, { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": token
        },
      });
      const data = await response.json();
      console.log(JSON.stringify(data));
      this.patient = data.patient;
    },

    async createOrdonnance(id) {
    let token = localStorage.getItem('token');

    let type_id = localStorage.getItem('type_id');

    const patient_id = id;

    const prescription_date = new Date(Date.now() + 1000 * 3600 * 24).toUTCString();

    this.prescriptions = this.prescriptions.filter(element => element.medecine !== null);

    try {
      let response = await fetch('http://ordolink.fly.dev/api/ordonnances/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: 
          JSON.stringify({
          patient_id : patient_id,
          medecin_id: type_id,
          prescription_date: prescription_date,
          prescriptions: this.prescriptions,
          }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    };

      this.$router.push('/medecin/liste-patient');
    
    }
  },
  created() {
    this.getPatientInfo();
  },
  
};
</script>