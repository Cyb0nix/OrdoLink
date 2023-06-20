<script setup>
 import HeaderHome from '../components/HeaderHome.vue'; 
 import FooterHome from '../components/FooterHome.vue';
</script>

<template>
  <main>
    <HeaderHome />
     
    <h2>TEST</h2>
    <FooterHome />
  </main>
</template>

<style scoped>
  main {
    padding: 0 0 40px;
    background-color: white;
  }

  h2 {
    margin: 40px 0 0;
    font-weight: 400;
    text-align: center;
    color: #000;
  }


</style>
