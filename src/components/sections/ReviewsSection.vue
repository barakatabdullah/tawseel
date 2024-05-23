<template>
    <section class="reviews-section">
        <div class="row reviews-box">
            <div class="reviews-heading">
                <p class="paragraph-1">آراء العملاء</p>
                <h2 >لماذا اختارنا<span>عملائنا</span></h2>
            </div>
            <div class="slider">

                <div class="slider-item" id="slider-item-1">
                    <div class="profile-photo">
                        <img :src="Image">
                    </div>
                    <div class="slider-content">
                        <p class="paragraph-2">{{Text}}</p>
                        <h5>{{Name}}</h5>
                        <span>{{Sub}}</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
 export default {
     data() {
             return {
                 Id: 0,
                 Name: '',
                 Sub: '',
                 Text: '',
                 Image: null,



                 testimonials: [{
                         id: 1,
                         name: 'محمد العليي',
                         sub: 'العليي للصرافة',
                         text: 'من أفضل خدمات التوصيل في اليمن خدمة ممتازة وسرعة في التوصيل وجودة في الخدمة.من أفضل خدمات التوصيل في اليمن خدمة ممتازة وسرعة في التوصيل وجودة في الخدمة.',
                         image: require('../../assets/reviews-section/profile-4.jpg'),
                     },
                     {
                         id: 2,
                         name: 'صادق علي',
                         sub: 'سحابة سوفت',
                         text: ' من أفضل خدمات التوصيل في اليمن خدمة ممتازة وسرعة في التوصيل وجودة في الخدمة خدمة ممتازة وسرعة في التوصيل وجودة في الخدمة خدمة ممتازة وسرعة في التوصيل وجودة في الخدمة .',
                         image: require('../../assets/reviews-section/profile-2.jpg')
                     },
                     {
                         id: 3,
                         name: 'حسن محمد',
                         sub: 'بلاتفورم',
                         text: ' من أفضل خدمات التوصيل في اليمن خدمة ممتازة وسرعة في التوصيل وجودة في الخدمة خدمة ممتازة وسرعة في التوصيل وجودة في الخدمة خدمة ممتازة وسرعة في التوصيل وجودة في الخدمة .',
                         image: require('../../assets/reviews-section/profile-3.jpg')
                     },
                 ]

             }

         },
         mounted() {
             setInterval(() => {

                 this.changeTestimonial()
             }, 3000);
         },
         methods: {

             changeTestimonial() {

                 if (this.Id < this.testimonials.length) {

                     this.Name = this.testimonials[this.Id].name;
                     this.Text = this.testimonials[this.Id].text;
                     this.Sub = this.testimonials[this.Id].sub;
                     this.Image = this.testimonials[this.Id].image;
                     document.querySelector(".slider").classList.add('fadeIn');
                     this.Id++;
                     setTimeout(function () {
                         document.querySelector(".slider").classList.remove('fadeIn')
                     }, 1000)

                 } else {
                     this.Id = 0;
                 }



             },


         }

     }
</script>

<style lang="scss">
@import "../../scss/main.scss";

.reviews-section{
    width: 100%;
    padding: 5rem 0;
}
.reviews-box{
    padding: 5rem;
    max-width: $grid-width;
    position: relative;
    
}

.reviews-heading {
    text-align: center;
    margin-bottom: 5rem;

    .paragraph-1 {
        font-size: 2rem;
        color: $color-primary;
        font-weight: 600;
        margin-bottom: .9rem;
    }

    h2 {
        font-size: 4rem;
        color: $color-tertiary;

        span {
            color: $color-primary;
        }
    }
}
.paragraph-2 {
        font-size: 1.8rem;
        color: $color-gray-dark-2;
        margin: 1.5rem 0;
    }

.slider{
   
   text-align: center;
   transition: all .3s ease;

  
}
.fadeIn{
    animation:moveTop ease-out .3s ;
}
 .slider-item{
    width: 70vw;
    margin-left: 14.5vw;
    
 }


 .profile-photo{
    margin: 0 auto;
    width: 15rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;

    img{
        display: block;
        width: 100%;
    }
 }
 .slider-content{
    margin-top: 2rem;

    h5{
        font-size: 2rem;
        color: $color-primary;  
    }
    span{
        color:$color-gray-dark-2;
        font-size: 1.8rem;
    }
 }



</style>