<template>
    <section class="numbers-section">

        <div class="numbers-heading">
            <p class="paragraph-1">لماذا خدمة توصيل هي الأفضل</p>
            <h2>تميز بأفضل خدمة توصيل <span>في اليمن</span></h2>
            <p class="paragraph-2">تطبيق التوصيل الأكثر تحميلاً في اليمن والعديد من الميزات المختلفة</p>
        </div>

        <div class="row numbers-box">
            <div class="col-1-of-3">
                <img src="../../assets/numbers-section/price.png" alt="price" class="numbers-icon price">
                <p class="numbers-text">سعر التوصيل يبدأ من</p>
                <p id="number1" class="number">300</p>
                <span>ريال</span>
            </div>

            <div class="col-1-of-3">
                <img src="../../assets/numbers-section/downloads.png" alt="downloads" class="numbers-icon downloads">
                <p class="numbers-text">وصل التطبيق لأكثر من</p>
                <p id="number2" class="number">300</p>
                <span>تحميل</span>
            </div>
            
            <div class="col-1-of-3">
                <img src="../../assets/numbers-section/clients.png" alt="clients" class="numbers-icon clients">
                <p class="numbers-text">أكثر من</p>
                <p id="number3" class="number">50</p>
                <span>عميل سعيد</span>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                animated: false,
            }
        },
        mounted() {

                this.animateNumber();

        },

        methods: {
            animateNumber() {
                    window.addEventListener("scroll",function (){
                        if (!this.animated && document.documentElement.scrollTop > 700) {
                    var price = setInterval(deliveryPrice, 10);
                    var downloads = setInterval(appDownloads, 10);
                    var cilents = setInterval(cilentsNumber, 10);
                    let count1 = 1;
                    let count2 = 1;
                    let count3 = 1;

                    function deliveryPrice() {
                        count1++;
                        document.querySelector("#number1").innerHTML = count1;
                        if (count1 == 300) {
                            clearInterval(price);
                        };
                    }

                    function appDownloads() {
                        count2++;
                        document.querySelector("#number2").innerHTML = count2 + "k";

                        if (count2 == 300) {
                            clearInterval(downloads);
                        };
                    }

                    function cilentsNumber() {
                        count3++;
                        document.querySelector("#number3").innerHTML = count3 + "k";

                        if (count3 == 50) {
                            clearInterval(cilents);
                        };
                    }

                    this.animated = true;
                }
            
            
                    })
                    
               
        }
    }
    }
    

</script>

<style lang="scss">
@import "../../scss/main.scss";

.numbers-section {
    padding: 15rem 0;
    background: $color-gray-light-1;
}

.numbers-heading {
    text-align: center;
    margin-bottom: 5rem;

    .paragraph-1 {
        font-size: 2rem;
        color: $color-primary;
        font-weight: 600;
        margin-bottom: .9rem;
    }

    .paragraph-2 {
        font-size: 2rem;
        color: $color-gray-dark-2;
        margin: .9rem 0;
    }

    h2 {
        font-size: 4rem;
        color: $color-tertiary;

        span {
            color: $color-primary;
        }
    }
}

.numbers-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4rem;
}

.col-1-of-3 {
    width: 100%;
    padding: 3rem;
    background-color: $color-white;
    border-radius: .5rem;
    align-items: center;
    text-align: center;
    color: $color-tertiary;
    transition: all .3s;

    &:hover {
        transform: scale(1.08);
        box-shadow: 0 1rem 1rem  rgba($color-gray-dark-2, .1);
    }


    & span {
        font-size: 2.5rem;
        margin-top: -3rem;
        display: block;
    }

    &:nth-child(2) {
        color: $color-primary;
    }
}

.number {
    display: block;
    font-size: 7rem;
    font-weight: 700;


}

.numbers-icon {
    max-width: 40%;
    display: block;
    margin: 0 auto;


}

.numbers-text {
    margin-bottom: -3rem;
    font-weight: 500;
}


</style>