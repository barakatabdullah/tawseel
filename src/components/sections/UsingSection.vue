<template>
  <section class="using-section">

    <div class="using-heading">
      <p class="paragraph-1">كيف يعمل التطبيق</p>
      <h2>نجعل حياتك أكثر <span>سهولة</span></h2>
      <p class="paragraph-2">يمكنك استخدام التطبيق لطلب طعامك من مطاعمك المفضلة و بخطوات بسيطة  </p>
    </div>
    <div class="row using-box">
      <div class="using-col">
        <img src="../../assets/using-section/basket.svg" alt="اختر طلبك">
        <h3>1.اختيار الطلب</h3>
        <p>يتم اختيار المطعم ثم الاختيار من بين أصناف الطعام المتوفرة في المطعم.</p>
      </div>
      <div class="using-col">
        <img src="../../assets/using-section/loc.svg" alt="حدد وسيلة الدفع والموقع">
        <h3>2.تحديد الموقع </h3>
        <p>بعد اختيار الطلب يتم تحديد موقعك على الخريطة ووسيلة الدفع.</p>
      </div>
      <div class="using-col">
        <img src="../../assets/using-section/on-way.svg" alt="طلبك في الطريق إليك">
        <h3>3.الطلب في الطريق إليك</h3>
        <p>بعد تنفيذ الطلب يتم تجهيزة وتوصيله إليك بعناية.</p>
      </div>
      <div class="using-col">
        <img src="../../assets/using-section/food.svg" alt="صحة وهناء">
        <h3>4.صحة وهناء</h3>
        <p>استمتع بوجبتك المفضلة أينما تكون</p>
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

.using-section {
  padding: 17rem 0;
  background: $color-gray-light-1;
}

.using-heading {
  text-align: center;

  .paragraph-1{
    font-size: 2rem;
    color: $color-primary;
    font-weight: 600;
    margin-bottom: .9rem;
  }

  .paragraph-2{
    font-size: 2rem;
    color: $color-gray-dark-2;
    margin: .9rem 0;
  }

  h2{
    font-size: 4rem;
    color: $color-tertiary;

    span{
      color: $color-primary;
    }
  }
}

.using-box {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-column-gap: 2rem;
  padding: 4rem 0;


}

.using-col{
  text-align: center;
  padding: 1rem;
  img{
    display: block;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    
  }

  h3{
    color: $color-gray-dark-2;
    margin-bottom: 1rem;
    
  }
}

</style>