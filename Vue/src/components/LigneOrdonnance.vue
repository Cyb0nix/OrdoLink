<script setup>
defineProps({
  firstname: String,
  lastname: String,
  prescription_date: String,
});
</script>

<template>
    <div class=" border-2 rounded-md border-sky-200 mt-6">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <h3 class="text-black text-lg flex justify-center items-center font-medium mx-2 my-2 lg:col-span-2">Ordonnance du {{ prescription_date }}</h3>
            <h3 class="text-black text-lg flex justify-left items-left font-medium my-2"> {{ firstname + ' ' + lastname }}</h3>
            <!-- <img src="@/assets/Img/pdfdl.png" class="h-8 mx-auto my-auto" alt="pdf" /> -->
        </div>
    </div>
</template>


<script>
export default {
  name: 'LigneOrdonnance',
  data() {
    return {
    };
  },
  methods: {
    async getOrdonnanceInfo() {
        let token = localStorage.getItem('token');

        
    }
  },
};
</script>
