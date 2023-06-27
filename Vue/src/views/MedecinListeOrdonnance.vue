<script setup>
 import HeaderMedecin from '../components/HeaderMedecin.vue';
 import FooterHome from '../components/FooterHome.vue';
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
              <p class="text-sky-500 text-center text-3xl font-inter mb-10">"Photo"</p>
              <div class="relative mb-20">
                <label class="absolute -left-3 top-3 bg-white text-sky-200 font-bold text-lg px-2" for="name">Nom :</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative mb-20">
                <label class="absolute -left-3 top-3 bg-white text-sky-200 font-bold text-lg px-2" for="firstname">Prénom :</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative mb-20">
                <label class="absolute -left-3 top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Email :</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative mb-40">
                <label class="absolute -left-3 top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Numéro de sécurité social :</label>
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
              <p class="text-sky-500 text-4xl font-inter flex items-center justify-center -mt-[20px]">Ordonnance valable de "Nom/Prénom"</p>
            </div>

            <!-- En faire un component -->
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            
          </form>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-[900px] col-start-2 ml-20 mt-20">
        <div class="border-2 rounded-xl border-sky-200 lg:p-12 w-full"> 
           <form action="" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 ">
              <p class="text-sky-500 text-4xl font-inter flex items-center justify-center -mt-[20px]">Historique des ordonnaces de "Nom/Prénom"</p>
            </div>

            <!-- En faire un component -->
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
            <div class="patient"><h3 class="nom">Ordonnance du 20 Mai 2023 / "Nom/Prénom"</h3><img src="@/assets/Img/pdfdl.png" class="pdfimg"></div>
          </form>
        </div>
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

.pdfimg{
  width: 4%;
  height: 80%;
  margin-left: 52%;
  margin-top: 0.7%;
  margin-right: 1%;
}
</style>
