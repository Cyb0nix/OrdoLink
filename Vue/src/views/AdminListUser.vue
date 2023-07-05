<script setup>
 import FooterHome from '../components/FooterHome.vue';
 import HeaderAdmin from '../components/HeaderAdmin.vue';


</script>

<template>
  <main  class="h-full bg-white">
    <HeaderAdmin />
    <section class="max-w-screen-xl mx-auto flex flex-col justify-center mb-6">
      <p class="my-6 font-normal text-3xl leading-11 font-bold text-center text-sky-500">Liste des utilisateurs</p>
      <div class="profil">
        <table class="user-table">
          <thead>
            <tr>
              <th class="text-sky-500">ID</th>
              <th class="text-sky-500">Email</th>
              <th class="text-sky-500">Is admin ?</th>
              <th class="text-sky-500">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in this.users" class="text-sky-300">
              <td>{{ user.id}}</td>
              <td>{{ user.email}}</td>
              <td>{{ user.admin}}</td>
              <td>
                <button class="text-gray-600 transition hover:text-red-600" @click="() => deleteUser(user)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
              </td>

            </tr>
          </tbody>
        </table>

      </div>
    </section>
    <FooterHome />
  </main>
</template>

<script>
export default {
  name: "AdminListUser",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      const token = localStorage.getItem('token');

      const response = await fetch(this.$api_url + "users/all", {
        method: "GET",
        headers: {
          "Authorization": token
        }
      });
      console.log("response users = ", response);
      this.users = await response.json();
      console.log("users", this.users);
    },
    async deleteUser(user) {
        console.log("user clicked", user);
          const token = localStorage.getItem('token');
          await fetch(this.$api_url + `users/delete/${user.id}`, {
            method: "DELETE",
            headers: {
              "Authorization": token
            }
          });
          this.getUsers();
        },
  },
  mounted() {
    this.getUsers();
  },
}
</script>
<style scoped>
  .user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1%;

}

.user-table th,
.user-table td {
  padding: 8px;
  border: 1px solid #ccc;
}

.user-table th {
  font-weight: bold;
  background-color: #f0f0f0;
  text-align: center;
}
</style>
