<template>
<HomeMainImage :compData="this.imagecenterComp"></HomeMainImage>
<HomeSubContainer :compData="this.textSubComp"></HomeSubContainer>
<HomeSubContainer :compData="this.textImgComp"></HomeSubContainer>
  <div class="container">
    <Home msg="Welcome to Your Vue.js App" />
  </div>

</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import HomeMainImage from "@/components/HomeMainImage.vue";
import {getImage} from "@/mixin/mixin-utils"
import HomeSubContainer from "../components/HomeSubContainer.vue"

export default {
  /* eslint-disable */
  name: "HomeView",
  components: {
    Home,
    HomeMainImage,
    HomeSubContainer
},
  data(){
    return{
      imagecenterComp:{},
      textSubComp:{},
      textImgComp:{},
    }
      
  },

  created () {
  },
  mounted () {
      this.imagecenterComp = {
          imageurl:getImage ('homepage-feature-extra-large-3'),
          subText :"APPS unveils new studio",
          headerText :"Lagom"
      }
      this.textSubComp = {
          imageurl:"",
          subTextOne :"Apps is an innovation and experience design agency. ",
          subTextTwo :"We exist to create a better future with you.",
          headerText :"Innovation and experience design agency. ",
          buttonText : "Products"
      }
      this.textImgComp = {
          imageurl:getImage ('homepage-side-img'),
          subTextOne :"Apps is an innovation and experience design agency. ",
          subTextTwo :"We exist to create a better future with you.",
          headerText :"Innovation and experience design agency. ",
          buttonText : "Products"
      }

  }
};
</script>
