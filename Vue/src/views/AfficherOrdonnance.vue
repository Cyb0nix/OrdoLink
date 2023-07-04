  <script setup>
  import FooterHome from '../components/FooterHome.vue';
  import HeaderAfficherOrdonnance from '../components/HeaderAfficherOrdonnance.vue';
  
  // defineProps({
  //   // ordonnanceID: String,
  //   firstname: String,
  //   lastname: String,
  // });
  </script>

  <template>
    <main  class="h-full bg-white">
     
      <div class="flex flex-col items-left justify-center lg:ml-96">
        <h1 class="text-3xl font-medium font-poppins text-sky-500 mt-6 lg:pl-14 lg:mb-4">
          Ordonnance du {{ prescription_date }}
        </h1>
      </div>
      
      <section class="max-w-full min-w-xl px-4 sm:py-12 sm:px-6 lg:py-12 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 max-w-5xl min-w-xl min-h-screen mx-auto -mt-10">
          <div class="border-2 rounded-xl border-sky-200 lg:p-12">
            <div class="relative bg-white">
              <div class="grid grid-cols-2 lg:grid-cols-2 ml-4">
                <div class="relative">
                  <div class="w-[170px] h-[49px] text-cyan-600 text-[24px] text-[24px] font-normal"> {{ medecin.firstname + ' ' +  medecin.lastname }}</div>
                  <div class="w-[170px] h-[49px] text-cyan-600 text-[24px] text-[22px] font-normal  ">Médecin</div>
                   <div class="w-[261px] h-[49px] text-cyan-600 text-[24px] text-[22px] font-normal -mt-4"> Généraliste <!--{{ medecin.type }} --> </div>
                  <div class="w-[443px] h-[49px] text-cyan-600 text-[24px] text-[22px] font-normal ">Diplomé de la faculté de Paris</div>
                  <div class="grid grid-cols-2 lg:grid-cols-2 mt-20">
                    <img class="w-[146px] h-[51px]" src="../assets/QRcode1.png" />
                    <img class="w-[156px] h-[51px]" src="../assets/QRcode1.png" />
                  </div>
                </div>

                
                <div class="relative ml-28">
                  <div class="w-[343px] h-[77px]">
                    <div class= "w-[343px] h-[49px] left-0 top-0 absolute text-cyan-600 text-[24px] font-normal"> {{ medecin.adresse }} </div>
                  </div>

                  <div class="w-[353px] h-[49px] text-cyan-600 text-[24px] font-normal -mt-8 mb-4">
                    Tél. Cabinet : {{ medecin.phone_number }}
                  </div>
      
                  <div class="w-[353px] h-[49px]absolute text-cyan-600 text-[24px] font-normal mt-44">Villejuif, {{ prescription_date }} </div> 
                </div>
              </div>
              
              <div class="w-[561px] h-[49px] text-black text-[28px] font-medium ml-4 mt-28 mb-16">Patient : {{ patient.firstname + ' ' + patient.lastname }}</div>
                
              <div>
                <div class="grid grid-cols-3 lg:grid-cols-3 ml-6">
                  <div></div>
                  <div></div>
                  <div class="ml-20 w-[122px] h-[49px] text-center text-cyan-600 text-[24px] font-normal">Renouvellement</div>
                </div>
                
                <!-- Liste des médicements -->
                <div v-for="(medicine, index) in prescription" :key="index" class="mb-8">
                  <div class="grid grid-cols-3 lg:grid-cols-3 ml-4">
                    <div class="grid grid-cols-3 lg:grid-cols-3">
                      <div class="relative mt-4">
                        <div class="w-[30px] h-[30px] text-black text-[24px] font-bold">{{index+1}}</div>
                      </div>

                      <div class="relative mt-4">
                        <div class="relative">
                          <div class="w-[500px] h-[31px] text-black text-[24px] font-normal">{{medicine.medecine}}</div>
                          <div class="w-[500px] h-[31px] text-black text-[20px] font-light">{{medicine.posologie}}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div class="relative mt-4">
                        <div class="w-full h-[31px] text-black text-[24px] font-normal text-right">{{medicine.quantity}} boites</div>
                      </div>
                    </div>

                    <div class="relative mt-6 -ml-4">
                      <div 
                      class="ml-40 w-[50px] h-[50px] text-center text-neutral-500 text-[24px] font-medium" 
                      :class="{ 'text-green-600': medicine.renewale > 0, 'text-red-500': medicine.renewale  === 0 }">
                        {{medicine.renewale}}
                      </div>
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
        </div>
      </section>

    </main>
  </template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AfficherOrdonnance',
  data() {
    return {
      ordonnanceId: '',
      ordonnance: [],
      medecin: [],
      prescription: [],
      prescription_date: '',
      patient: [],
    }
  },
  methods: {
    ordonnanceid() {
      if (this.$route.params.id) {
        this.ordonnanceId = this.$route.params.id;
      }
      else {
        this.ordonnanceId = 'ff1c2dd7-1a5f-4e4a-affc-293d52f4ed70';
      }
    },
    converDate(date) {
      // convertire la date au format 2023-07-03T00:00:00.000Z en 03/07/2023
      let dateArray = date.split('T');
      let dateArray2 = dateArray[0].split('-');
      let dateFinal = dateArray2[2] + '/' + dateArray2[1] + '/' + dateArray2[0];
      return dateFinal;
    },
    async getOrdonnance() {
      let token = localStorage.getItem('token');

      let response = await fetch('https://ordolink.fly.dev/api/ordonnances/get/' + this.ordonnanceId, { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": token
        },
      });

      const data = await response.json();
      console.log("data getOrdonnance : ", data);

      this.ordonnance = data.ordonnance;
      this.prescription = data.prescriptions;
      this.prescription_date = this.converDate(data.ordonnance.prescription_date);
      this.medecin = data.medecin;
      this.patient = data.patient;
    }
  },
  mounted() {
    this.ordonnanceid();
    this.getOrdonnance();
    
  }
})
  
</script>