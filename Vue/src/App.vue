<template>

<router-view></router-view>
</template>

<script>

import HomePagePharmanotlog from "./views/HomePagePharmanotlog.vue";
import HomePageMednotlog from "./views/HomePageMednotlog.vue";
import HomePageOrdonotlog from "./views/HomePageOrdonotlog.vue";
import HomePageNotifnotlog from "./views/HomePageNotifnotlog.vue";
export default {
  name: "App",
  components: {
    HomePagePharmanotlog,
    HomePageMednotlog,
    HomePageOrdonotlog,
    HomePageNotifnotlog
},
};
</script>

<style>
</style>
