<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <footer-section></footer-section>
</template>

<script>
import FooterSection from './FooterSection.vue';

import NavBar from './NavBar.vue';
export default {
  components: { NavBar, FooterSection},

}
</script>

<style lang="scss">

</style>