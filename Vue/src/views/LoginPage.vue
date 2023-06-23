<script setup>
 import FooterHome from '../components/FooterHome.vue';
 import HeaderLogin from '../components/HeaderLogin.vue';
</script>

<template>
  <main  class="h-full bg-white">
    <HeaderLogin />
    
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-5xl font-bold font-poppins text-sky-500 mt-20">
        Login
      </h1>
    </div>
    
    <section class="mx-auto max-w-screen-lg px-4 sm:py-12 sm:px-6 lg:py-20 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-16 w-1/2 mx-auto -mt-10">
        <div class="border-2 rounded-xl border-sky-200 lg:p-12">
           <form action="" class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Email"
                  type="email"
                  id="email"
                  v-model="user.email"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Email</label>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
              <div class="relative">
                <input
                  class="w-full rounded-lg border-2 border-sky-200 p-3 text-sm text-black"
                  placeholder="Mot de passe"
                  type="password"
                  id="password"
                  v-model="user.password"
                />
                <label class="absolute left-3 -top-3 bg-white text-sky-200 font-bold text-lg px-2" for="lastname">Mot de passe</label>
              </div>
            </div>
            <div class="flex justify-center">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-sky-500 px-5 py-3 font-medium text-white sm:w-auto mt-8"
                @click.prevent="login"
              >
                Se connecter
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
import { useRouter } from 'vue-router';

// récupérer un token et le stocker dans le local storage

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      rep: "",
    };
  },
  methods: {
    async login() {
      let loginResponse = await this.$http.post('https://ordolink.fly.dev/api/users/login', this.user);

      this.rep = loginResponse.data;
      if (loginResponse.data.token === null) {
        console.log(this.rep.message);
      }
      else{
        localStorage.setItem('token', loginResponse.data.token);
        this.$router.push('/patient');
      }
      
      console.log(this.rep);
    },
  },
});
</script>