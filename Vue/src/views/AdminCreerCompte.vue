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
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-300"
                  placeholder="Nom"
                  type="fname"
                  id="firstname"
                  v-model="user.firstname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="firstname">Nom</label>
              </div>

              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Prénom"
                  type="lname"
                  id="lastname"
                  v-model="user.lastname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Prénom</label>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">
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

              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                  placeholder="Date d'expiration du RPPS"
                  type="date"
                  id="rpps"
                  v-model="user.rpps_expiration"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="date">Expiration RPPS</label>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Email"
                  type="text"
                  id="email"
                  v-model="user.email"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Email</label>
              </div>

              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Mot de passe"
                  type="text"
                  id="password"
                  v-model="user.password"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Mot de passe</label>
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
                  @click="MedecinSelected = true"
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
                  @click="MedecinSelected = false"
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
            
            <div v-if="MedecinSelected">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:my-6 ">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div class="relative">
                    <select
                      name="MedecinType"
                      id="MedecinType"
                      class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                      v-model="Medecin.type_id"
                    >
                      <option value="">Please select</option>
                      <option v-for="typeMed in medecinTypes" :value="typeMed.id" :key="typeMed.id"> {{ typeMed.medecin_type }} </option>                    
                    </select>
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="HeadlineAct">Type de médecin</label>
                  </div>

                  <div class="relative">
                      <input
                      class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                      placeholder="Nom du cabinet"
                      type="text"
                      id="cabinet"
                      v-model="Medecin.name"
                      />
                      <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2 " for="phone">Nom du cabinet</label>
                  </div>
                </div>
                <div class="relative">
                    <input
                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                    placeholder="Numéro de téléphone"
                    type="tel"
                    id="phone"
                    v-model="Medecin.phone_number"
                    />
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2 " for="phone">Numéro de téléphone</label>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:mb-4">
                <div class="relative">
                    <input
                    class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                    placeholder="Adresse"
                    type="text"
                    id="adress"
                    v-model="this.adresse"
                    />
                    <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="adress">Adresse</label>
                </div>
                
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div class="relative">
                      <input
                      class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                      placeholder="Code postal"
                      type="text"
                      id="codePostal"
                      v-model="this.codePostal"
                      />
                      <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="adress">Code Postal</label>
                  </div>

                  <div class="relative ">
                      <input
                      class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                      placeholder="Ville"
                      type="text"
                      id="ville"
                      v-model="this.ville"
                      />
                      <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="adress">Ville</label>
                  </div>
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
        data() {
            return {
              MedecinSelected: false,
              adresse: '',
              codePostal: '',
              ville: '',
              medecinTypes: [],
              user: {
                email: '',
                password: '', //zSoSS@tcYEA7JPxr
                firstname: '', 
                lastname: '',
                rpps: '',
                rpps_expiration: '',
              },
              Medecin: {
                rpps: '',
                phone_number: '',
                lastname: '',
                firstname: '',
                email: '',
                password: '',
                adresse: '',
                name: '',
                rpps_expiration: '',
                type_id: '',
              },
              
            }

        },
        methods: {
          updateAddress() {
            this.Medecin.adresse = `${this.adresse}, ${this.codePostal} ${this.ville}`;
          },
          async getMedcinType() {
            const token = localStorage.getItem('token');
            let response = fetch('http://ordolink.fly.dev/api/medecins/types', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
              },
            });

            const data = await (await response).json();
            console.log("data : ", data)
            this.medecinTypes = data.types;

            if (data.success == false) {
              console.log("Erreur lors de la récupération des types de médecins");
            }
          },

          async creerCompteMedecin() {
            this.Medecin.rpps = this.user.rpps
            this.Medecin.lastname = this.user.lastname
            this.Medecin.firstname = this.user.firstname
            this.Medecin.email = this.user.email
            this.Medecin.password = this.user.password
            this.Medecin.rpps_expiration = this.user.rpps_expiration
            
            const token = localStorage.getItem('token');

            let response = fetch('http://ordolink.fly.dev/api/medecins/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "Authorization": token,
              },
              body: JSON.stringify(this.Medecin)
            });

            console.log("Ca log ouuuuuuuu ? ")
            const data = await (await response).json();
            console.log("data Medecin : ", data)

            if (data.success) {
              alert("Compte créé avec succès")
            } else {
              alert("Erreur lors de la création du compte")
            }
          },
          async creerComptePharmacien() {
            console.log("user : ", this.user)

            const token = localStorage.getItem('token');
            let response = fetch('http://ordolink.fly.dev/api/pharmaciens/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "Authorization": token,
              },
              body: JSON.stringify(this.user)
            });

            const data = await (await response).json();
            console.log("data Pharmacien : ", data)

            if (data.success) {
              alert("Compte créé avec succès")
            } else {
              alert("Erreur lors de la création du compte")
            }
          },
          creerCompte: function () {
            console.log("MedecinSelected : ", this.MedecinSelected)
            if (this.MedecinSelected) {
              this.creerCompteMedecin()
            } else {
              this.creerComptePharmacien()
            }
          }
        },
        mounted() {
          this.getMedcinType();
        },
        watch : {
          adresse: 'updateAddress',
          codePostal: 'updateAddress',
          ville: 'updateAddress',
        },
    });
</script>
