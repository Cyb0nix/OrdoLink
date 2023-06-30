<script setup>
    defineProps({
        firstame: String,
        lastname: String,        
  })
</script>

<template>
    <div class="patient">
        <h3 class="nom"> {{ firstname }} {{ lastname }}</h3>
        <RouterLink to="/medecin/historique-ordonnance">
            <button class="histo">Historique des ordonnances</button>
        </RouterLink>

        <RouterLink to="/medecin/ordonnance">
            <button class="create">Créer une ordonnance</button>
        </RouterLink>
    </div>
</template>

<style>
.patient{
width: 800px;
height: 46px;
margin: auto;
display: flex;
flex-direction: row;
border-radius: 10px;
border: 1px solid #B2E2F9;
background: #FFF;
}
.nom{
  color: #000;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2%;
}
.histo{
width: 244px;
height: 46px;
flex-shrink: 0;
border: 1px solid #B2E2F9;
background: rgba(78, 102, 142, 0.00);
margin-left: 31.7%;
margin-top: -1px;
color: black;
}
.create{
width: 244px;
height: 46px;
flex-shrink: 0;
border: 1px solid #B2E2F9;
background: rgba(78, 102, 142, 0.00);
margin-left: 0%;
margin-top: -1px;
color: black;
border-radius: 0 10px 10px 0;
}
</style>
