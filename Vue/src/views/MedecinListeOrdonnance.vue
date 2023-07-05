<script setup>
 import HeaderUsers from '../components/HeaderUsers.vue';
 import FooterHome from '../components/FooterHome.vue';
 import LigneOrdonnance from '../components/LigneOrdonnance.vue';
</script>

<template>
  <main  class="h-full min-h-screen bg-white">
    <HeaderUsers />
    
    <section class="grid grid-cols-2 max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">

      <!-- Formulaire de création d'un patient -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-4/5 col-start-1 ml-10">
        <div class="border-2 rounded-xl border-sky-200 lg:p-12">
          <form action="" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <p class="text-sky-500 text-center text-3xl font-inter mb-10">"Photo"</p>
              <div class="relative mb-20">
                <label class="absolute -left-3 top-3 bg-white text-sky-200 font-bold text-lg px-2" for="name">Nom : {{ patient.lastname }}</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative mb-20">
                <label class="absolute -left-3 top-3 bg-white text-sky-200 font-bold text-lg px-2" for="firstname">Prénom : {{ patient.firstname }}</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative mb-20">
                <label class="absolute -left-3 top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Email : {{ patient.email }}</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative mb-40">
                <label class="absolute -left-3 top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Numéro de sécurité social : {{ patient.num_secu }}</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      

      <!-- Liste des patients -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-[900px] col-start-2 ml-20">
        <div class="border-2 rounded-xl border-sky-200 lg:p-12"> 
           <form action="" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 ">
              <p class="text-sky-500 text-4xl font-inter flex items-center justify-center -mt-[20px]">Ordonnance valable</p>
            </div>

            <div v-for="ordo in ordonnancesList">
              <ligne-ordonnance
              v-if="ordo.given == false"
              :firstname="patient.firstname"
              :lastname="patient.lastname"
              :prescription_date="converDate(ordo.prescription_date)"
              @click="afficherOrdonnance(ordo.ordonnance_id)"
              />
            </div>
            
          </form>
        </div>
      </div>
      
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-[900px] col-start-2 ml-20 mt-20">
        <div class="border-2 rounded-xl border-sky-200 lg:p-12 w-full"> 
           <form action="" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 ">
              <p class="text-sky-500 text-4xl font-inter flex items-center justify-center -mt-[20px]">Historique des ordonnaces</p>
            </div>

            <div v-for="ordo in ordonnancesList">
              <ligne-ordonnance
              v-if="ordo.given == true"
              :firstname="patient.firstname"
              :lastname="patient.lastname"
              :prescription_date="converDate(ordo.prescription_date)"
              @click="afficherOrdonnance(ordo.ordonnance_id)"
              />
            </div>

          </form>
        </div>
      </div>
    </section>
    

    <FooterHome />
  </main>
</template>

<script>
export default {
  name: 'MedecinListeOrdonnance',
  data() {
    return {
      medecinID: 'c4854e71-8012-4a16-b151-14634bbe72f7',
      ordonnancesList: [],
      patient: {
        firstname: "",
        lastname: "",
        email: "",
        num_secu: "",
      },
      
    };
  },
  methods: {
    async getPatientInfo() {
      let token = localStorage.getItem('token'); 
      
      let response = await fetch('https://ordolink.fly.dev/api/medecins/patients/' + this.medecinID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": token
        },
      });
      const data = await response.json();
      console.log(data);
      this.patient = data.patients.find(p => p.id == this.$route.params.id);
    },
    async getOrdonnaceList() {
      let token = localStorage.getItem('token');

      let response = await fetch('https://ordolink.fly.dev/api/medecins/ordonnaces/'+ this.medecinID, { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": token
        },
      });

      const data = await response.json();
      console.log("data ordonnancesList : ", data);

      this.ordonnancesList = data.ordonnaces;
      this.medecinID = data.ordonnaces[0].medecin_id;
    },
    converDate(date) {
      // convertire la date au format 2023-07-03T00:00:00.000Z en 03/07/2023
      let dateArray = date.split('T');
      let dateArray2 = dateArray[0].split('-');
      let dateFinal = dateArray2[2] + '/' + dateArray2[1] + '/' + dateArray2[0];
      return dateFinal;
    },
    afficherOrdonnance(id) {
      this.$router.push('/ordonnance/' + id);
    }
  },
  mounted() {
    this.getPatientInfo();

    this.getOrdonnaceList();
  }
};
</script>