<script setup>
  defineProps({
    firstname: String,
    lastname: String,
  });
</script>

<template>
  <div class=" border-2 rounded-md border-sky-200">
    <div class="grid grid-cols-2 gap-8 lg:grid-cols-2 ">
        <h3 class="text-black text-lg flex justify-left items-center pl-20 font-bold my-2">
            {{ firstname + ' ' + lastname }}
        </h3>

        <div class="grid grid-cols-2 lg:grid-cols-2 ">
            <RouterLink to="/medecin/historique-ordonnance">
                <button class="w-full text-black px-2 py-3 text-sm font-medium hover:text-white transition hover:bg-sky-200 focus:outline-none border-x-2 border-sky-200">
                    Historique des ordonnances
                </button>
            </RouterLink>

            <RouterLink to="/medecin/ordonnance">
                <button class="w-full text-black px-2 py-3 text-sm font-medium hover:text-white transition hover:bg-sky-200 focus:outline-none focus:ring">
                    Créer une ordonnance
                </button>
            </RouterLink>
        </div>
            
    </div>
    
  </div>
</template>
