<script setup>
 import FooterHome from '../components/FooterHome.vue';
 import HeaderPharmacien from '../components/HeaderPharmacien.vue';
 import { pdf } from 'vue-pdf';

</script>

<template>
  <main  class="h-full bg-white">
    <HeaderPharmacien />
    <section class="grid grid-cols-2 max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-[900px] col-start-2 ml-10">
        <p class="text-sky-500 text-4xl font-inter -mb-[30px]">Rechercher un patient</p>
        <div class="flex flex-row">
          <div class="relative flex-grow mr-20">
            <input
              class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
              placeholder="Nom"
              type="text"
              id="lastname"
            />
            <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-s px-2" for="lastname">Nom du Patient</label>
          </div>
          <div class="relative flex-grow mr-20">
            <input
              class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
              placeholder="Prénom"
              type="text"
              id="firstname"
            />
            <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-s px-2" for="firstname">Prénom du patient</label>
          </div>
          <div class="relative flex-grow mr-20">
            <input
              class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
              placeholder="Numéro d'ordonnance"
              type="text"
              id="order-number"
            />
            <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-s px-2" for="order-number">Numéro de l'ordonnance</label>
          </div>
          <button class="flex items-center justify-center bg-sky-500 rounded-lg w-10 h-10 text-white mt-[5px]">
            <img
              src="@/assets/Img/loupe.png"
              alt="loupe"
              class="w-[25px]"
            />
          </button>
        </div>
        <pdf src="@/assets/Img/Ordonnance.pdf"></pdf>        
      </div>
    </section>
    <FooterHome />
  </main>
</template>

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
