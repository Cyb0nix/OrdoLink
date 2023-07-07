<script setup>
 import HeaderUsers from '../components/HeaderUsers.vue';
 import FooterHome from '../components/FooterHome.vue';
</script>

<template>
    <main  class="h-full bg-white">
        <HeaderUsers />
        <div class="flex flex-col items-center justify-center mt-10 -ml-96">
            <div class="grid grid-cols-2 gap-8 lg:grid-cols-2">
                <p class="flex-grow-0 text-sky-500 mr-28 text-4xl font-inter mb-4">Vos ordonnances</p>
                <!-- <div class="relative flex-grow mr-20">
                    <input
                    class="w-80 rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                    placeholder="Date ou Médecin"
                    type="name"
                    id="Recherche"
                    />
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="name">Recherche une ordonnace</label>
                </div> -->
            </div>
        </div>

        <section class="mt-4 flex flex-col items-center justify-center mb-16">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-[900px] col-start-2">
                <table class="w-full border-collapse flex flex-col items-center justify-center">
                    <tbody  class="border-2 rounded-xl border-sky-200">
                        <tr>
                            <th class="py-2 px-40 text-center text-sky-500">Date</th>
                            <th class="py-2 px-40 text-center text-sky-500">Médecin</th>
                            <th class="py-2 px-40 text-center text-sky-500">Récupérée</th>
                        </tr>

                        <tr v-for="ordo in ordonnanceList"
                        @click="afficherOrdonnance(ordo.ordonnance.id)" class="hover:bg-sky-100 cursor-pointer"
                        >
                            <td class="py-6 mx-40 text-center text-black">Ordonnance du {{ converDate(ordo.ordonnance.prescription_date) }}</td>
                            <td class="py-6 mx-40 text-center text-black">{{ ordo.medecin.firstname + ' ' + ordo.medecin.lastname }}</td>
                            <td class="py-6 mx-40 text-center text-black" 
                            :class="{ 'text-green-600': ordo.prescriptions[0].given == true, 'text-red-500': ordo.prescriptions[0].given == false }"
                            >
                                {{ ordo.prescriptions[0].given == true ? 'Oui' : 'Non' }}
                            </td>
                        </tr>
                    </tbody>
                </table>                        
            </div>
        </section>


        <!-- <div class="flex flex-col items-center justify-center mt-10 -ml-52">
            <div class="grid grid-cols-2 gap-8 lg:grid-cols-2 -ml-20">
                <p class="flex-grow-0 text-sky-500 mr-[75px] text-4xl font-inter mb-4 ">Vos ordonnaces passé</p>
            </div>
        </div>

        <section class="mt-4 flex flex-col items-center justify-center mb-10">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-[900px] col-start-2">
                <table class="w-full border-collapse flex flex-col items-center justify-center">
                    <tbody  class="border-2 rounded-xl border-sky-200">
                        <tr>
                            <th class="py-2 px-40 text-center text-sky-500">Date</th>
                            <th class="py-2 px-40 text-center text-sky-500">Médecin</th>
                            <th class="py-2 px-40 text-center text-sky-500">Renouvellement</th>
                        </tr>
                        <tr>
                            <td class="py-2 mx-40 text-center text-black">Ordonnance du 02/04/23</td>
                            <td class="py-2 mx-40 text-center text-black">Médecin</td>
                            <td class="py-2 mx-40 text-center text-black">1/2</td>
                        </tr>
                    </tbody>
                </table>                        
            </div>
        </section> -->

        <FooterHome />
    </main>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Patient',
    data() {
        return {
            patientID: '8b8236b4-fc37-4cae-89bb-115c856cd379',
            OrdoIDlist: [],
            ordonnanceList: [], 
        }
    },
    methods: {
        async getOrdonnance(id) {
            let token = localStorage.getItem('token');
            
            let response = await fetch('https://ordolink.fly.dev/api/ordonnances/get/' + id, { 
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                "Authorization": token
                },
            });

            const data = await response.json();

            return data;
        },
        async getOrdonnanceList() {
            let token = localStorage.getItem('token');
            let type = localStorage.getItem('type');

            let response = await fetch('https://ordolink.fly.dev/api/patients/ordonnances/' + type, { 
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                "Authorization": token
                },
            });
            const data = await response.json();
            console.log("data : ", data);
            
            console.log("data.ordonnances.length : ", data.ordonnances.length);

            for (let i = 0; i < data.ordonnances.length; i++) {
                console.log("data.ordonnances[i].id : ", data.ordonnances[i].id);
                const ordonnance = await this.getOrdonnance(data.ordonnances[i].id);
                this.ordonnanceList.push(ordonnance);
            }
            console.log("ordonnanceList : ", this.ordonnanceList);


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
        this.getOrdonnanceList();
        // this.getOrdonnance('3856499e-c60b-47f3-a244-2ef2b5690c58');
    }
})


</script>