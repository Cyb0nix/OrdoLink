<template>
    <header class="border-b-2 border-sky-400">
        <div class="max-w-full px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
            <div class="flex items-center justify-between">
                <div class="text-center sm:text-left">
                    <div class="flex items-center justify-start">
                        <img
                            src="@/assets/Img/LogoOrdoLink.svg"
                            alt="Logo OrdoLink"
                            class="h-14 w-14 mr-4"
                        />
                    </div>
                </div>

                <div class="hidden md:block">
                    <nav aria-label="Global">
                    <ul class="flex items-center gap-16 text-xl">
                        <router-link to="/">
                            <li>
                                <a class="text-sky-500 transition hover:text-sky-500/30" href="/" @click="rooter('/medecins')">
                                    Accueil
                                </a>
                            </li>
                        </router-link>

                        <li>
                            <a class="text-sky-500 transition hover:text-sky-500/30" href="/" @click="rooter('/Ordonnance')">
                                Mes ordonnances
                            </a>
                        </li>
                    </ul>
                    </nav>
                </div>
                
                <div class="flex items-center">
                    <div class="flex-grow"></div> 
                        <button
                        class="block rounded-lg bg-sky-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-900 focus:outline-none focus:ring"
                        type="button"
                        @click="logout"
                        >
                        Logout
                        </button>
                </div>

                <!-- <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <a href="#" class="block shrink-0">
                            <img
                            alt="Man"
                            src="https://s1.qwant.com/thumbr/474x474/9/3/653d043f1e24615c19edf59968f1dec12a3fdbb8c908c3e8df25b2bcbd8bc5/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.1LRUIB2OXVePxD5hQm4fqwHaHa%26pid%3DApi&q=0&b=1&p=0&a=0"
                            class="h-10 w-10 rounded-full object-cover"
                            />
                            <span class="text-sky-500">Profile</span>
                        </a>
                    </div>
                    
                    <div class="block md:hidden ml-4">
                        <button
                            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        </button>
                    </div>
                </div> -->
                
            </div>
        </div>
    </header>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'HeaderMedecin',
        props: {
            msg: String,
        },
        methods: {
            rooter: function (path) {
                console.log('path = ' + path);
                this.$router.push(path);
            },
            async logout() {
                const token = localStorage.getItem('token');

                await fetch('https://ordolink.fly.dev/api/users/logout', {
                    method: "POST",
                    headers: {
                    "Authorization": token
                    }
                });
                    localStorage.removeItem('token');
                    this.$router.push('/');
            },
        },
    });
</script>