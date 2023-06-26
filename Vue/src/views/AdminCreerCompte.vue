<script setup>
  import HeaderAdmin from '../components/HeaderAdmin.vue';
  import FooterHome from '../components/FooterHome.vue';
</script>

<template>
  <main  class="h-full bg-white">
    <HeaderAdmin />
    
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold font-poppins text-sky-500 mt-12">
        Créer un compte
      </h1>
      <p class="text-sm font-medium text-gray-500 mb-4">
        Remplissez le formulaire ci-dessous pour créer un compte pour un médecin ou un pharmacien
      </p>
    </div>

    <section class="mx-auto max-w-screen-lg px-4 pb-16 sm:py-8 sm:px-6 lg:py-10 lg:px-8 mb-10">
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
                  v-model="user.firstname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="firstname">Nom</label>
              </div>

              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Prénom"
                  type="text"
                  id="lastname"
                  v-model="user.flastname"
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
                  v-model="user.rpps"
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
                  user.medtype = "Medecin"
                  @click="Medecin = !Medecin"
                />

                <label
                  for="option1"
                  class="block w-full rounded-lg border text-gray-300 border-gray-300 p-3 hover:border-sky-700 peer-checked:bg-sky-600 peer-checked:text-white"
                  tabindex="0"
                  
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
                  user.medtype = "Pharmacien"
                />

                <label
                  for="option2"
                  class="block w-full rounded-lg border text-gray-300 border-gray-300 p-3 hover:border-sky-700 peer-checked:bg-sky-600 peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Pharmacien </span>
                </label>
              </div>
            </div>
            
            <div v-if="Medecin">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:my-6 ">
                <div class="relative">
                    <input
                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400 invalid:border-pink-500 invalid:text-pink-600"
                    placeholder="Adresse email"
                    type="email"
                    id="email"
                    v-model="user.email"
                    />
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="email">Email</label>
                </div>

                <div class="relative">
                    <input
                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                    placeholder="Numéro de téléphone"
                    type="tel"
                    id="phone"
                    v-model="user.phone"
                    />
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2 " for="phone">Numéro de téléphone</label>
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mb-4">
                <div class="relative">
                    <input
                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                    placeholder="Adresse"
                    type="text"
                    id="adress"
                    v-model="user.adress"
                    />
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="adress">Adresse</label>
                </div>

                <div class="relative">
                    <input
                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                    placeholder="Nom cabinet médical"
                    type="text"
                    id="cabinet"
                    v-model="user.cabinet"
                    />
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="cabinet">Nom cabinet médical</label>
                </div>
              </div>
            </div>
            

            <div class="mt-4">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-sky-500 px-5 py-3 font-medium text-white sm:w-auto"
                @click="creerCompte"
              >
                Créer le compte
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <FooterHome />
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
              user: {
                firstname: '',
                lastname: '',
                medtype: '',
                rpps: '',
                email: '',
                phone: '',
                adress: '',
                cabinet: '',
              },

            }

        },
        methods: {
            creerCompte: function () {
                console.log('user = ' + this.user);
                console.log('user.firstname = ' + this.user.firstname);
                console.log('user.lastname = ' + this.user.lastname);
                console.log('user.medtype = ' + this.user.medtype);
                console.log('user.rpps = ' + this.user.rpps);
                console.log('user.email = ' + this.user.email);
                console.log('user.phone = ' + this.user.phone);
                console.log('Medecin = ' + this.Medecin);
                console.log('user.adress = ' + this.user.adress);
                console.log('user.cabinet = ' + this.user.cabinet);

            },
        },
    });
</script>
