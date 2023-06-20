<template>
  <HomePagePharmanotlog  />
</template>

<script>

import HomePagePharmanotlog from "./views/HomePagePharmanotlog.vue";
import HomePageMednotlog from "./views/HomePageMednotlog.vue";
import HomePageOrdonotlog from "./views/HomePageOrdonotlog.vue";
import HomePageNotifnotlog from "./views/HomePageNotifnotlog.vue";
export default {
  name: "App",
  components: {
    HomePagePharmanotlog: HomePagePharmanotlog,
    HomePageMednotlog: HomePageMednotlog,
    HomePageOrdonotlog: HomePageOrdonotlog,
    HomePageNotifnotlog: HomePageNotifnotlog,
},
};
</script>

<style>
</style>
