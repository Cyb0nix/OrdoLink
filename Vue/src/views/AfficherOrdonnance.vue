  <script setup>
  import FooterHome from '../components/FooterHome.vue';
  import HeaderAfficherOrdonnance from '../components/HeaderAfficherOrdonnance.vue';
  </script>

  <template>
    <main  class="h-full bg-white">
      <HeaderAfficherOrdonnance/>
      
      
      <section class="max-w-full min-w-xl px-4 sm:py-12 sm:px-6 lg:py-20 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 max-w-5xl min-w-xl max-h-screen min-h-screen mx-auto -mt-10">
          <div class="border-2 rounded-xl border-sky-200 lg:p-12">
            <div class="relative bg-white">
              <div class="grid grid-cols-2 lg:grid-cols-2 ml-4">
                <div class="relative">
                  <div class="w-[170px] h-[49px] text-cyan-600 text-[24px] text-[24px] font-normal">Will SMITH</div>
                  <div class="w-[170px] h-[49px] text-cyan-600 text-[24px] text-[22px] font-normal -mt-2">Docteur</div>
                  <div class="w-[261px] h-[49px] text-cyan-600 text-[24px] text-[22px] font-normal -mt-6">Médecine Générale</div>
                  <div class="w-[443px] h-[49px] text-cyan-600 text-[24px] text-[22px] font-normal -mt-2">Diplomé de la faculté de Villejuif</div>
                  <div class="grid grid-cols-2 lg:grid-cols-2 mt-20">
                    <img class="w-[146px] h-[51px]" src="../assets/QRcode1.png" />
                    <img class="w-[156px] h-[51px]" src="../assets/QRcode1.png" />
                  </div>
                </div>

                
                <div class="relative ml-28">
                  <div class="w-[343px] h-[77px]">
                    <div class= "w-[343px] h-[49px] left-0 top-0 absolute text-cyan-600 text-[22px] font-normal">30-32 Avenue de la République</div>
                    <div class="w-[343px] h-[49px] left-0 top-[28px] absolute text-cyan-600 text-[22px] font-normal">94 800, Villejuif</div>
                  </div>

                  <div class="w-[353px] h-[49px text-cyan-600 text-[24px] font-normal mt-8">Tél. Cabinet : 00 00 06 90 00<br/>doctor.will.smith@gmail.com</div>
      
                  <div class="w-[353px] h-[49px]absolute text-cyan-600 text-[24px] font-normal mt-20">Villejuif, 14 janvier 2025</div>
                </div>
              </div>
              
              <div class="w-[561px] h-[49px] text-black text-[28px] font-normal ml-4 mt-16 mb-10">Cédric Yoganathan, né le 12/09/22</div>
              
              <div class="grid grid-cols-3 lg:grid-cols-3 ml-4">
                <div class="relative w-1/4">
                  <div class="h-[31px] text-black text-[24px] font-bold">1</div>
                  <div class="h-[31px] text-black text-[24px] font-bold">2</div>
                  <div class="h-[31px] text-black text-[24px] font-bold">3</div>
                </div>

                <div class="relative">
                    <div class="w-[934px] h-[77px] relative">
                        
                        <div class="w-[577px] h-[31px] text-black text-[24px] font-normal">Doliprane 1000mg Cpr Plq/8</div>
                        <div class="w-[732px] h-[31px] text-black text-[20px] font-light">Prendre par voie orale, 1 comprimé toutes les 6 heures, si fièvre et douleur</div>
                    </div>
                    <div class="w-[934px] h-[77px] relative">
                        
                        <div class="w-[577px] h-[31px] text-black text-[24px] font-normal">Advil 400mg cp encr: B/20</div>
                        <div class="w-[732px] h-[31px] text-black text-[20px] font-light">Prendre 1 comprimé le matin, midi et soir</div>
                    </div>
                    <div class="w-[934px] h-[77px] relative">
                        
                        <div class="w-[577px] h-[31px] text-black text-[24px] font-normal">Voltarene emulgel 1% gel flacon : FI press/100ml</div>
                        <div class="w-[732px] h-[31px] text-black text-[20px] font-light">Faire une application le matin, midi et soir, pendant 7 jours</div>
                    </div>
                </div>
                
                <div class="relative">
                  <div class="w-[122px] h-[49px] text-center text-cyan-600 text-[24px] font-normal">Quantité</div>
                  <div class="w-[37px] h-[31px] text-center text-neutral-500 text-[24px] font-light">1/2</div>
                  <div class="w-[37px] h-[31px] text-center text-red-400 text-[24px] font-light">5/5</div>
                  <div class="w-[37px] h-[31px] text-center text-neutral-500 text-[24px] font-light">0/1</div>
                </div>
              </div>
              
              <div class="w-[105px] h-[109px] left-[899px] top-[1212px] absolute rounded border border border border border-cyan-600"></div>
          </div>
          </div>
        </div>
      </section>

      <FooterHome />
    </main>
  </template>
