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
    async routeNext() {
      let token = localStorage.getItem('token');

      let response = await fetch('https://ordolink.fly.dev/api/users/state', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

      const data = await response.json();
      console.log("data userType = ", data);
      
      if (data.type == 'medecin') {
        this.$router.push('/medecin/liste-patient');
      } else if (data.type == 'patient') {
        this.$router.push('/patient');
      } else if (data.type == 'pharmacien') {
        this.$router.push('/pharmacien');
      } else {
        this.$router.push('/admin/creer-compte');
      }
    },
    async login() {
      let response = await fetch('https://ordolink.fly.dev/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: this.user.email, password: this.user.password, }),
      });

      const data = await response.json();
      console.log("data = ", data);
      console.log("token login = ", data.token);

      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('type', JSON.stringify(data.type_id));
        localStorage.setItem('user', JSON.stringify(data.user_id));
        this.routeNext(data.user_id);
      } else {
        this.rep = data.message;
      }
    },
  },
});
</script>