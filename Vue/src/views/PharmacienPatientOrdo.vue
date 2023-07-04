<script setup>
 import FooterHome from '../components/FooterHome.vue';
 import HeaderPharmacien from '../components/HeaderPharmacien.vue';
 import AfficherOrdonnance from './AfficherOrdonnance.vue';
</script>

<template>
  <main  class="h-full bg-white min-h-screen">
    <HeaderPharmacien />
    <section class="flex flex-col items-left justify-center lg:ml-96 mt-12 ">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-[900px] col-start-2 ml-14 ">
        <p class="text-sky-500 text-4xl font-inter -mb-[30px] font-bold">Rechercher une ordonnance</p>
        <div class="flex flex-row mb-10">
          <div class="relative flex-grow mr-10">
            <input
              class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
              placeholder="Nom"
              type="text"
              id="lastname"
              v-model="lastnamePatient"
            />
            <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-s px-2" for="lastname">Nom du Patient</label>
          </div>
          <div class="relative flex-grow mr-10">
            <input
              class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
              placeholder="Prénom"
              type="text"
              id="firstname"
              v-model="firstnamePatient"
            />
            <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-s px-2" for="firstname">Prénom du patient</label>
          </div>
          <div class="relative flex-grow mr-10">
            <input
              class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
              placeholder="Numéro d'ordonnance"
              type="text"
              id="order-number"
              v-model="ordonnanceId"
            />
            <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-s px-2" for="order-number">Numéro de l'ordonnance</label>
          </div>

          <button 
          type="button"
          class="flex items-center justify-center bg-sky-500 rounded-lg w-10 h-10 text-white mt-[5px]"
          @click="getOrdonnance()"
          >
            <img
              src="@/assets/Img/loupe.png"
              alt="loupe"
              class="w-[25px]"
            />
          </button>
        </div>
      </div>
    </section>

    <AfficherOrdonnance v-if="this.ordoShow"
      :ordoID="ordonnanceId"
    />

    <FooterHome/>
  </main>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'PharmacienPatientOrdo',
  data() {
    return {
      ordonnanceId: '',
      firstnamePatient: '',
      lastnamePatient: '',
      ordoShow: false,
    };
  },
  methods: {
    getOrdonnance() {
      console.log("ordonnanceId: " + this.ordonnanceId);
      this.ordoShow = true;
    },
  },
};
</script>


<style>
.patient{
width: 800px;
height: 46px;
margin: auto;
display: flex;
flex-direction: row;
border-radius: 10px;
border: 1px solid #B2E2F9;
background: #FFF;
}
.nom{
  color: #000;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2%;
}
.histo{
width: 244px;
height: 46px;
flex-shrink: 0;
border: 1px solid #B2E2F9;
background: rgba(78, 102, 142, 0.00);
margin-left: 31.7%;
margin-top: -1px;
color: black;
}
.create{
width: 244px;
height: 46px;
flex-shrink: 0;
border: 1px solid #B2E2F9;
background: rgba(78, 102, 142, 0.00);
margin-left: 0%;
margin-top: -1px;
color: black;
border-radius: 0 10px 10px 0;
}
</style>
