<template>
  <header class="header-background">
    <div class="row heading__box">

      <div class="col-1-of-2">
        <h1 class="heading-primary">خدمة توصيل الطعام <span>الأكبر والأوسع انتشاراً</span> في اليمن<span class="heading-secondary">توصيل الطعام من أفخم المطاعم في اليمن</span></h1>
      </div>

      <div class="col-1-of-2">
        <img class="header__img" src="../../assets/header/header-img.png" alt="header img" />
      </div>

    </div>
  </header>

</template>

<script>

</script>

<style lang="scss">
    @import "../../scss/main.scss";

    .header-background {

      padding-top: 10rem;
      background: url('../../assets/backgrounds/funding-bg.svg'),;
      background-size: 100%;
      background-position: top;
      
   
    }

    .heading__box {
      padding-bottom: 8rem;
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-column-gap: 3rem;
      position: relative;



    }

    .col-1-of-2 {
      position: relative;
      display: inline-block;
    }

    .heading-primary {

      color: $color-tertiary;
      font-size: 5rem;
      top: 20%;
      position: absolute;
      display: block;

      span {
        display: block;
        color:$color-primary;
      }

      .heading-secondary{
        color:$color-gray-dark-2;
        margin-top: 3rem;
        font-size: 2.5rem;
        font-weight: 500;
      }

    }

    .header__img {
      max-width: 100%;
      left: 0;

    }

    
</style>