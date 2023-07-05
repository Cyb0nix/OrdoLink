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
                        @click.prevent="logout"
                        >
                        Log out
                        </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'HeaderMedecin',
        data () {
            return {
                activePage: null,
            };
        },
        props: {
            msg: String,
        },
        methods: {
            rooter: function (path) {
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
        mounted() {
            this.activePage = this.$route.name;
        },
    });
</script>   