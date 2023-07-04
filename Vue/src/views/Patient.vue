<script setup>
 import HeaderPatient from '../components/HeaderPatient.vue';
 import FooterHome from '../components/FooterHome.vue';
</script>

<template>
    <main  class="h-full bg-white">
        <HeaderPatient />
        <div class="flex flex-col items-center justify-center mt-10 -ml-48">
            <div class="grid grid-cols-2 gap-8 lg:grid-cols-2">
                <p class="flex-grow-0 text-sky-500 mr-[75px] text-4xl font-inter mb-10">Vos ordonnaces en cours</p>
                <div class="relative flex-grow mr-20">
                    <input
                    class="w-80 rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                    placeholder="Date ou Médecin"
                    type="name"
                    id="Recherche"
                    />
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="name">Recherche une ordonnace</label>
                </div>
            </div>
        </div>

        <section class="mt-4 flex flex-col items-center justify-center">
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
        </section>


        <div class="flex flex-col items-center justify-center mt-10 -ml-52">
            <div class="grid grid-cols-2 gap-8 lg:grid-cols-2 -ml-20">
                <p class="flex-grow-0 text-sky-500 mr-[75px] text-4xl font-inter mb-10 ">Vos ordonnaces passé</p>
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
        </section>

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
        }
    },
    methods: {
        async getOrdonnanceList() {
            let token = localStorage.getItem('token');

            let response = await fetch('https://localhost:3000/api/patients/ordonnaces/'+ this.patientID, { 
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                "Authorization": token
                },
            });
            console.log("response : ", response);
            const data = await response.json();
            console.log("data ordonnancesList : ", data);

        },
    },
    mounted() {
        this.getOrdonnanceList();
    }
})


</script>