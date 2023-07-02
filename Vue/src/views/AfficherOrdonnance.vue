  <script setup>
  import FooterHome from '../components/FooterHome.vue';
  import HeaderAfficherOrdonnance from '../components/HeaderAfficherOrdonnance.vue';
  </script>

  <template>
    <main  class="h-full bg-white">
      <HeaderAfficherOrdonnance/>
      
      <div class="flex flex-col items-left justify-center lg:ml-96">
        <h1 class="text-3xl font-bold font-poppins text-sky-500 mt-6 lg:pl-14 lg:mb-4">
          Ordonnance du 14/01/2025
        </h1>
      </div>
      
      <section class="max-w-full min-w-xl px-4 sm:py-12 sm:px-6 lg:py-12 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 max-w-5xl min-w-xl min-h-screen mx-auto -mt-10">
          <div class="border-2 rounded-xl border-sky-200 lg:p-12">
            <div class="relative bg-white">
              <div class="grid grid-cols-2 lg:grid-cols-2 ml-4">
                <div class="relative">
                  <div class="w-[170px] h-[49px] text-cyan-600 text-[24px] text-[24px] font-normal">Will SMITH</div>
                  <div class="w-[170px] h-[49px] text-cyan-600 text-[24px] text-[22px] font-normal ">Docteur</div>
                  <div class="w-[261px] h-[49px] text-cyan-600 text-[24px] text-[22px] font-normal -mt-4">Médecine Générale</div>
                  <div class="w-[443px] h-[49px] text-cyan-600 text-[24px] text-[22px] font-normal ">Diplomé de la faculté de Villejuif</div>
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

                  <div class="w-[353px] h-[49px text-cyan-600 text-[24px] font-normal mt-4">Tél. Cabinet : 00 00 06 90 00<br/>doctor.will.smith@gmail.com</div>
      
                  <div class="w-[353px] h-[49px]absolute text-cyan-600 text-[24px] font-normal mt-28">Villejuif, 14 janvier 2025</div>
                </div>
              </div>
              
              <div class="w-[561px] h-[49px] text-black text-[28px] font-normal ml-4 mt-28 mb-16">Cédric Yoganathan, né le 12/09/22</div>
              
              <div class="grid grid-cols-3 lg:grid-cols-3">
                <div></div>
                <div></div>
                <div class="ml-28 w-[122px] h-[49px] text-center text-cyan-600 text-[24px] font-normal">Quantité</div>
              </div>
              
              <!-- Liste des médicements -->
              <div v-for="(medicine, index) in MedicineList" :key="index" class="mb-8">
                <div class="grid grid-cols-3 lg:grid-cols-3 ml-4">
                  <div class="grid grid-cols-3 lg:grid-cols-3">
                    <div class="relative mt-4">
                      <div class="w-[30px] h-[30px] text-black text-[24px] font-bold">{{index+1}}</div>
                    </div>

                    <div class="relative mt-4">
                      <div class="relative">
                        <div class="w-[500px] h-[31px] text-black text-[24px] font-normal">{{medicine.name}}</div>
                        <div class="w-[500px] h-[31px] text-black text-[20px] font-light">{{medicine.description}}</div>
                      </div>
                    </div>
                  </div>

                  <div></div>

                  <div class="relative mt-4 -ml-4">
                    <div class="ml-40 w-[50px] h-[50px] text-center text-neutral-500 text-[24px] font-light">{{medicine.quantity}}</div>
                  </div>
                </div>
              </div> 

              <div class="grid grid-cols-5 lg:grid-cols-5 ml-96 mt-80 ">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div class="w-[105px] h-[109px] rounded border border border border border-cyan-600"></div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <!-- <FooterHome /> -->
    </main>
  </template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AfficherOrdonnance',
  data() {
    return {
      medecin: {
        firstName: 'Will',
        lastName: 'Smith',
        type: 'Docteur',
        addresse: '30-32 Avenue de la République',
        phone_number: '00 00 06 90 00',
        email: '',
      },
      patient: {
          firstName: 'Cédric',
          lastName: 'Yoganathan',
          birthDate: '12/09/22',
      },
      MedicineList: [ //pour tester si l'affichage fonctionne
        {
          name: 'Doliprane 1000mg Cpr Plq/8',
          description: 'Prendre par voie orale, 1 comprimé toutes les 6 heures, si fièvre et douleur',
          quantity: '1/2',
        },
        {
          name: 'Doliprane 1000mg Cpr Plq/8',
          description: 'Prendre par voie orale, 1 comprimé toutes les 6 heures, si fièvre et douleur',
          quantity: '1/2',
        },
        {
          name: 'Doliprane 1000mg Cpr Plq/8',
          description: 'Prendre par voie orale, 1 comprimé toutes les 6 heures, si fièvre et douleur',
          quantity: '1/2',
        },
        {
          name: 'Doliprane 1000mg Cpr Plq/8',
          description: 'Prendre par voie orale, 1 comprimé toutes les 6 heures, si fièvre et douleur',
          quantity: '1/2',
        },
        {
          name: 'Doliprane 1000mg Cpr Plq/8',
          description: 'Prendre par voie orale, 1 comprimé toutes les 6 heures, si fièvre et douleur',
          quantity: '1/2',
        },
        {
          name: 'Doliprane 1000mg Cpr Plq/8',
          description: 'Prendre par voie orale, 1 comprimé toutes les 6 heures, si fièvre et douleur',
          quantity: '1/2',
        },
        {
          name: 'Doliprane 1000mg Cpr Plq/8',
          description: 'Prendre par voie orale, 1 comprimé toutes les 6 heures, si fièvre et douleur',
          quantity: '1/2',
        },
        {
          name: 'Doliprane 1000mg Cpr Plq/8',
          description: 'Prendre par voie orale, 1 comprimé toutes les 6 heures, si fièvre et douleur',
          quantity: '1/2',
        }
      ]
    }
  },
})
  
</script>