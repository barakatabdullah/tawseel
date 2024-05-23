<template>
  <section class="download-section">
    <div class="row back-shape">
      <div class="download-box">

        <div>
          <img class="download-img" src="../../assets/download-section/tawseel-app.png" alt="TawseelApp">
        </div>

        <div class="cta-container" >
          <h2 class="heading-secondery">حمل التطبيـق الآن</h2>
          
          <div class="btn-container">
          <a href="#">
            <img class="store-btn" src="../../assets/download-section/appStore.png" alt="App Store">
          </a>
          <a href="#">
            <img class="store-btn" src="../../assets/download-section/AppleStore.png" alt="App Store">
          </a>
        </div>
        </div>

      </div>
    </div>

  </section>



</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import "../../scss/main.scss";

    .download-section {
      padding: 20rem 0;
      background: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
      background-size: cover;
      position: relative;
    }

    .back-shape {
     
      position: relative;

    }

    .download-box {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-column-gap: 2rem;
      margin-top: -15rem;
      position: absolute;
    }

    .download-img {
      max-width: 100%;
      margin-top: -10rem;
    }


    .heading-secondery {
      top: 10%;
      font-size: 3rem;
      display: block;
      color: $color-white;
      margin: 14% 3rem 2rem auto;


    }

    .btn-container {
      display: block;
      max-width: 80%;
      position: relative;


    }

    .store-btn {
      max-width: 50%;
    }

</style>