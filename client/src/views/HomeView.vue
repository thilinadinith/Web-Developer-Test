<template>
  <div class="component-container">
    <HomeMainImage :compData="this.imagecenterComp"></HomeMainImage>
    <HomeSubContainer :compData="this.textSubComp"></HomeSubContainer>
    <HomeSubContainer :compData="this.textImgComp"></HomeSubContainer>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeMainImage from "@/components/HomeMainImage.vue";
import { getImage } from "@/mixin/mixin-utils";
import HomeSubContainer from "../components/HomeSubContainer.vue";

export default {
  /* eslint-disable */
  name: "HomeView",
  components: {
    HomeMainImage,
    HomeSubContainer,
  },
  data() {
    return {
      imagecenterComp: {},
      textSubComp: {},
      textImgComp: {},
    };
  },

  created() {},
  mounted() {
    this.imagecenterComp = {
      desktopImageurl: getImage("homepage-feature-extra-large-3"),
      mobileImageurl: getImage("mobile-image"),
      subText: "APPS unveils new studio",
      headerText: "Lagom",
    };
    this.textSubComp = {
      imageurl: "",
      subTextOne: "Apps is an innovation and experience design agency. ",
      subTextTwo: "We exist to create a better future with you.",
      headerText: "Innovation and experience design agency. ",
      buttonText: "Products",
    };
    this.textImgComp = {
      imageurl: getImage("homepage-side-img"),
      subTextOne: "Apps is an innovation and experience design agency. ",
      subTextTwo: "We exist to create a better future with you.",
      headerText: "Innovation and experience design agency. ",
      buttonText: "Products",
    };
  },
};
</script>
