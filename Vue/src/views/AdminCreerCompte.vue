<script setup>
 import HeaderAdmin from '../components/HeaderAdmin.vue';
//  import FooterAdmin from '../components/FooterAdmin.vue';
</script>

<template>
  <main  class="h-full bg-white">
    <HeaderAdmin />
    
    <section class="mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="border-2 rounded-xl border-sky-200 lg:col-span-3 lg:p-12">
           <form action="" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-300"
                  placeholder="Nom"
                  type="text"
                  id="firstname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="firstname">Nom</label>
              </div>

              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Prénom"
                  type="text"
                  id="lastname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Prénom</label>
              </div>
            </div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                  placeholder="Numéro RPPS"
                  type="text"
                  id="rpps"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="date">Numéro RPPS</label>
              </div>
            </div>

            <div class="mx-auto grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div>
                <input
                  class="peer sr-only"
                  id="option1"
                  type="radio"
                  tabindex="-1"
                  name="option"
                />

                <label
                  for="option1"
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-sky-950 peer-checked:border-sky-950 peer-checked:bg-sky-950 peer-checked:text-white"
                  tabindex="0"
                  @click="Medecin = !Medecin"
                >
                  <span class="text-sm font-medium"> Médecin </span>
                </label>
              </div>

              <div>
                <input
                  class="peer sr-only"
                  id="option2"
                  type="radio"
                  tabindex="-1"
                  name="option"
                />

                <label
                  for="option2"
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-sky-950 peer-checked:border-sky-950 peer-checked:bg-sky-950 peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Pharmacien </span>
                </label>
              </div>
            </div>
            
            <div v-if="Medecin">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div class="relative">
                    <input
                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    />
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="email">Email</label>
                </div>

                <div class="relative">
                    <input
                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    />
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="phone">Numéro de téléphone</label>
                </div>
                </div>
            </div>
            

            <div class="mt-4">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-sky-500 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Créer le compte
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- <FooterAdmin /> -->
  </main>
</template>


<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'AdminCreerCompte',
        props: {
            msg: String,
        },
        data() {
            return {
            Medecin: false,
            }
        },
    });
</script>
