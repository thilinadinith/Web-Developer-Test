<template>
<div class="header">
    <BRow>
    <BCol>
        <div class="logo"> <i class="icon-logo"></i></div>
    </BCol>
    <BCol class=" desktop">
        <b-nav class="nav-items pull-right">
            <b-nav-item active>   <router-link to="/">Product</router-link></b-nav-item>
            <b-nav-item><router-link to="/about">News</router-link></b-nav-item>
            <b-nav-item><router-link to="/about">Contact</router-link></b-nav-item>
            <b-nav-item><i class="icon-delete-icon"></i></b-nav-item>
        </b-nav>
    </BCol>
    <BCol class="mobile">
         <b-nav  class="pull-right">
             <b-nav-item class="mobile-menu">menu</b-nav-item>
            <b-nav-item class="mobile-menu-button"><Bbutton class="navbar-toggler navbar-light"><span class="navbar-toggler-icon"></span></Bbutton></b-nav-item>
        </b-nav>
    </BCol>
    </BRow>
</div>

</template>

<script>

export default {
    name: "SiteHeader",
    data() {
           return {count:1}
    },
    onMounted() {
            console.log(`The initial count is ${this.count.value}.`)
    }
};
</script>

<style scoped lang="scss">
    .logo{
        padding: 10px 0px;
        i{
            font-size: 24px;
        }
    }
</style>