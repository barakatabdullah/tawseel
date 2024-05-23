<template>
  <section class="joinus-section">
    <div class="row joinus-box">
      <div class="col1">
        <div>
            <p class="paragraph-1">انضم إلينا</p>
            <h2>كن جزء من فريقنا وسجل <span> كـ كابتن توصيل</span></h2>
            <div class="btn-set">
            <base-button link="true" to="/about">سجل الآن</base-button>
          </div>
          </div>
      </div>
      <div class="col1">
        <img src="../../assets/join-us/delivery-guy.svg" >
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'
export default {
  components: { BaseButton },

}
</script>

<style lang="scss">
@import "../../scss/main.scss";

.joinus-section{
  padding-top: 8rem;
  padding-bottom:18rem ;
  background: $color-gray-light-1;
}

.joinus-box{
  max-width: $grid-width;
  display: grid;
  grid-template-columns:1fr 2fr;
  grid-gap: 3rem;
}

.col1{
  position: relative;
  display: flex;
  align-items: center;
  h2 {
        font-size: 3rem;
        color: $color-tertiary;

        span {
            color: $color-primary;
           display: block;
        }
}
}

.paragraph-1 {
        font-size: 2rem;
        color: $color-primary;
        font-weight: 600;
        margin-bottom: .9rem;
    }
.btn-set{
  margin-top: 2rem;
  font-size: 2rem;
  width: 20rem;
  text-align: center;
}


</style>