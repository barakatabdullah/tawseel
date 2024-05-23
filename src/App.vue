<template>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    //font
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap');
  
    @import "./scss/main.scss";
    body {
      font-family: 'Cairo', sans-serif;
      font-weight: 400;
      font-size: $default-font-size;
      line-height: 1.7;
      color: $color-gray-dark;
    }
</style>