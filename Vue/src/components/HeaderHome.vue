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

                <div>
                    <h2 class="text-3xl font-bold font-poppins text-sky-500">
                        OrdoLink
                    </h2>
                </div>
                <div class="flex items-center">
                    <div class="flex-grow"></div> 
                        <button
                        class="block rounded-lg bg-sky-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                        type="button"
                        @click.prevent="login"
                        >
                        Sign in
                        </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderHome",
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        async login() {
            let token = localStorage.getItem('token');

            if (token == null) {
                this.$router.push('/login');
            }
            else{
                let response = await fetch('https://ordolink.fly.dev/api/users/state', {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                    },
                });

                const data = await response.json();
                
                if (data.type == 'medecin') {
                    this.$router.push('/medecin/liste-patient');
                } else if (data.type == 'patient') {
                    this.$router.push('/patient');
                } else if (data.type == 'pharmacien') {
                    this.$router.push('/pharmacien');
                } else {
                    this.$router.push('/admin/creer-compte');
                }
            }
                
        }
    },
};
</script>