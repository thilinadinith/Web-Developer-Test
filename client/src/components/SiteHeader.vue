<template>
  <div class="header">
    <BRow>
      <BCol>
        <div class="logo"><i class="icon-logo"></i></div>
      </BCol>
      <BCol class="desktop">
        <b-nav class="nav-items pull-right">
          <b-nav-item active>
            <router-link to="/">Product</router-link></b-nav-item
          >
          <b-nav-item><router-link to="/cart">News</router-link></b-nav-item>
          <b-nav-item><router-link to="/cart">Contact</router-link></b-nav-item>
          <b-nav-item><i class="icon-delete-icon"></i></b-nav-item>
        </b-nav>
      </BCol>
      <BCol class="mobile">
        <b-nav class="pull-right">
          <b-nav-item class="mobile-menu"><p>menu</p></b-nav-item>
          <b-nav-item class="mobile-menu-button"
            ><Bbutton @click="toggleMenu()" class="navbar-toggler navbar-light"
              ><span class="navbar-toggler-icon"></span></Bbutton
          ></b-nav-item>
        </b-nav>
      </BCol>
    </BRow>
  </div>
  <ul @click="toggleMenu()" class="toggle-items" :class="{ show: toggle }">
    <li><router-link to="/">Product</router-link></li>
    <li><router-link to="/cart">News</router-link></li>
    <li><router-link to="/cart">Contact</router-link></li>
    <li>
      <router-link to="/"><i class="icon-delete-icon"></i></router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SiteHeader",
  data() {
    return { toggle: false };
  },

  methods: {
    toggleMenu: function () {
      this.toggle = !this.toggle;
      this.$emit("toggle-backdrop", this.toggle);
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  padding: 10px 0px;
  i {
    font-size: 24px;
  }
}
.mobile {
  .nav {
    align-items: center;
    p {
      text-transform: uppercase;
      margin: 0px;
    }
  }
}
.show {
  display: block;
}
</style>