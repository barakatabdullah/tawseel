<template>
 
  <footer>
    <div class="container">
      <div >
        <small class="rights">© 2022 Tawseel Co.</small>
      </div>

      <div class="icons-box">
        <span class="icon"><UilWhatsappAlt></UilWhatsappAlt></span>
        <span class="icon"><UilInstagramAlt></UilInstagramAlt></span>
        <span class="icon"><UilFacebook></UilFacebook></span>
        
        
      </div>
    </div>
  </footer>

</template>

<script>
import { UilFacebook } from '@iconscout/vue-unicons';
import { UilInstagramAlt } from '@iconscout/vue-unicons';
import { UilWhatsappAlt } from '@iconscout/vue-unicons';
export default {
components:{
  UilFacebook,
  UilInstagramAlt,
  UilWhatsappAlt
}
}
</script>

<style lang="scss">
  @import "../../scss/main.scss";



  footer{
   position: absolute;
    padding:.5rem 0 ;
    bottom: 0;
    right: 0;
    left: 0;
    background: $color-tertiary;
  }

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: $grid-width;
    margin: 0 auto;
  }

  .rights{
    color:$color-white;
  }

  .icons-box{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }

  .icon{
    color: $color-white;
    font-size: 3.5rem;
  }
</style>