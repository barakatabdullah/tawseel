<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
    props:{
        link:{
            type:Boolean,
            required:false,
            default:null
        },
        to:{
            type:String,
            required:false,
            default:'/'
        },
        mode:{
            type:String,
            required:false,
            default:null
        }

    }
}
</script>

<style lang="scss" scoped>
@import "../../scss/main.scss";
button,
a{
    width: inherit;
    text-decoration: none;
    display: inline-block;
    font-weight: 500;
    border: 1px solid $color-primary;
    border-radius: 2rem;
    cursor: pointer;
    color: $color-white;
    padding:  0.6rem 2rem;
    background: $color-primary;
    transition: all ease .3s;

}
a:hover,
a:active,
button:hover,
button:active{
    background: $color-primary-dark;
    border: $color-primary-dark;
}

.flat{
    background-color: transparent;
  color: $color-primary;
  border: none;
}

.outline{
    background-color: transparent;
  border-color: $color-primary;
  color: $color-primary;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
    background: $color-primary-light-2;
}


</style>