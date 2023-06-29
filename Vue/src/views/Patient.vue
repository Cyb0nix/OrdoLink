<script setup>
 import HeaderPatient from '../components/HeaderPatient.vue';
 import FooterHome from '../components/FooterHome.vue';
</script>

<template>
    <main  class="h-full bg-white">
        <HeaderPatient />
        <section class="grid grid-cols-1 max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-[900px] col-start-2">
                <div class="lg:p-12 -ml-20"> 
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                        <div class="flex items-center">
                            <p class="text-sky-500 text-4xl font-inter mb-10 -mt-[20px]">Vos ordonnaces en cours</p>
                            <div class="relative flex-grow ml-10 -mt-[50px]">
                                <input
                                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                                    placeholder="Search"
                                    type="Search"
                                    id="Search"
                                />
                                <label class="absolute left-3 -top-3 bg-white text-sky-500 font-bold text-lg px-2" for="name">Rechercher une ordonnace</label>
                            </div>
                        </div>
                    </div>

                    <table class="border-collapse">
                        <thead>
                            <tr>
                            <th class="py-2 px-40 text-sky-500">Référence</th>
                            <th class="py-2 px-40 text-sky-500">Date</th>
                            <th class="py-2 px-40 text-sky-500">Médecin</th>
                            <th class="py-2 px-40 text-sky-500">Utilisation</th>
                            <th class="py-2 px-40 text-sky-500">Télécharger</th>
                            </tr>
                        </thead>
                        <tbody class="border-2 rounded-xl border-sky-200">
                            <tr class="border-b">
                            <td class="py-2 px-20 text-center text-black">Ordonnance n*123123</td>
                            <td class="py-2 px-20 text-center text-black">20 mai 2023</td>
                            <td class="py-2 px-20 text-center text-black">Médecin</td>
                            <td class="py-2 px-20 text-center text-black">1/2</td>
                            <td class="py-2 px-20"><img src="@/assets/Img/pdfdl.png" class="pdfimg1"></td>
                            </tr>
                            <tr class="border-b">
                            <td class="py-2 px-20 text-center text-black">Ordonnance n*123123</td>
                            <td class="py-2 px-20 text-center text-black">20 mai 2023</td>
                            <td class="py-2 px-20 text-center text-black">Médecin</td>
                            <td class="py-2 px-20 text-center text-black">1/2</td>
                            <td class="py-2 px-20"><img src="@/assets/Img/pdfdl.png" class="pdfimg1"></td>
                            </tr>
                            <tr class="border-b">
                            <td class="py-2 px-20 text-center text-black">Ordonnance n*123123</td>
                            <td class="py-2 px-20 text-center text-black">20 mai 2023</td>
                            <td class="py-2 px-20 text-center text-black">Médecin</td>
                            <td class="py-2 px-20 text-center text-black">1/2</td>
                            <td class="py-2 px-20"><img src="@/assets/Img/pdfdl.png" class="pdfimg1"></td>
                            </tr>
                        </tbody>
                    </table>                        
                </div>
            </div>
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-[900px] col-start-2">
                <div class="lg:p-12 -ml-20"> 
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 ">
                        <p class="text-sky-500 text-4xl font-inter mb-10 -mt-[20px]">Vos ordonnaces passées</p>
                    </div>
                    <table class="border-collapse">
                        <thead>
                            <tr>
                            <th class="py-2 px-40 text-sky-500">Référence</th>
                            <th class="py-2 px-40 text-sky-500">Date</th>
                            <th class="py-2 px-40 text-sky-500">Médecin</th>
                            <th class="py-2 px-40 text-sky-500">Utilisation</th>
                            <th class="py-2 px-40 text-sky-500">Télécharger</th>
                            </tr>
                        </thead>
                        <tbody class="border-2 rounded-xl border-sky-200">
                            <tr class="border-b">
                            <td class="py-2 px-20 text-center text-black">Ordonnance n*123123</td>
                            <td class="py-2 px-20 text-center text-black">20 mai 2023</td>
                            <td class="py-2 px-20 text-center text-black">Médecin</td>
                            <td class="py-2 px-20 text-center text-black">2/2</td>
                            <td class="py-2 px-20"><img src="@/assets/Img/pdfdl.png" class="pdfimg1"></td>
                            </tr>
                            <tr class="border-b">
                            <td class="py-2 px-20 text-center text-black">Ordonnance n*123123</td>
                            <td class="py-2 px-20 text-center text-black">20 mai 2023</td>
                            <td class="py-2 px-20 text-center text-black">Médecin</td>
                            <td class="py-2 px-20 text-center text-black">2/2</td>
                            <td class="py-2 px-20"><img src="@/assets/Img/pdfdl.png" class="pdfimg1"></td>
                            </tr>
                            <tr class="border-b">
                            <td class="py-2 px-20 text-center text-black">Ordonnance n*123123</td>
                            <td class="py-2 px-20 text-center text-black">20 mai 2023</td>
                            <td class="py-2 px-20 text-center text-black">Médecin</td>
                            <td class="py-2 px-20 text-center text-black">2/2</td>
                            <td class="py-2 px-20"><img src="@/assets/Img/pdfdl.png" class="pdfimg1"></td>
                            </tr>
                        </tbody>
                    </table>                        
                </div>
            </div>
        </section>

        <FooterHome />
    </main>
</template>

<style>
.pdfimg1{
  width: 10%;
  height: 100%;
  margin-left: 45%;
}
</style>