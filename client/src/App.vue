<template>
  <SiteHeader></SiteHeader>
  <div class="view-container">
      <router-view />
  </div>
  <SiteFooter></SiteFooter>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue"
import SiteFooter from "./components/SiteFooter.vue"
export default {
  components:{
    SiteHeader,
    SiteFooter    
  },

}
</script>

<style lang="scss">
 body {
  margin: 0%;
  font-family:LibreFranklin,arial,helvetica,sans-serif;
  }
  .view-container{
     overflow:auto;
      width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
