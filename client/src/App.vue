<template>
  <div>
    <PWA></PWA>
    <SiteHeader @toggle-backdrop="toggleBackdrop" :toggle="toggle"></SiteHeader>
    <div class="backdrop" :class="toggle ? 'show' : ''"></div>
    <div class="view-container">
      <router-view />
    </div>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import PWA from "./PWA.vue";
export default {
  components: {
    SiteHeader,
    SiteFooter,
    PWA
},
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleBackdrop: function (toggle) {
      this.toggle = toggle;
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0%;
  font-family: LibreFranklin, arial, helvetica, sans-serif;
  // position: absolute;
}
.view-container {
  overflow: auto;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.show {
  display: block !important;
}
</style>
