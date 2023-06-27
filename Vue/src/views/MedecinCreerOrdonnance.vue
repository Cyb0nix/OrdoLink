<script setup>
 import HeaderMedecin from '../components/HeaderMedecin.vue';
 import FooterHome from '../components/FooterHome.vue';
</script>

<template>
  <main  class="h-full bg-white">
    <HeaderMedecin />
    
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold font-poppins text-sky-500 mt-12">
        Créer une ordonnance
      </h1>
      <p class="text-sm font-medium text-gray-500 mb-6">
        Remplissez le formulaire ci-dessous pour créer une ordonnance
      </p>
    </div>
    
    <section class="mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="border-2 rounded-xl border-sky-200 lg:col-span-3 lg:p-12">
           <form action="" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="absolute left-3 -top-3 bg-white text-slate-600 font-bold text-lg px-2" for="firstname">Nom patient</label>
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-300"
                  placeholder="Nom patient"
                  type="text"
                  id="firstname"
                />
              </div>

              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Prénom patient"
                  type="text"
                  id="lastname"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Prénom patient</label>
              </div>
            </div>
            
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-gray-400"
                  placeholder="Date de naissance"
                  type="date"
                  id="date"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="date">Date de naissance</label>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label class="sr-only" for="phone">Phone</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
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
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Option 1 </span>
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
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Option 2 </span>
                </label>
              </div>

              <div>
                <input
                  class="peer sr-only"
                  id="option3"
                  type="radio"
                  tabindex="-1"
                  name="option"
                />

                <label
                  for="option3"
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Option 3 </span>
                </label>
              </div>
            </div>

            <div>
              <label class="sr-only" for="message">Message</label>

              <textarea
                class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm resize-none"
                placeholder="Message"
                rows="3"
                id="message"
              ></textarea>
            </div>

            <div class="mt-4">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-sky-500 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Ajouter une ordonnance
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    

    <FooterHome />
  </main>
</template>

