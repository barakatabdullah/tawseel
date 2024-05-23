<template>
  <main>
    <header-section></header-section>
    <numbers-section></numbers-section>
    <download-section></download-section>
    <using-section></using-section>
    <reviews-section></reviews-section>
    <joinus-section></joinus-section>
  </main>
</template>
<script>
import HeaderSection from "../../components/sections/HeaderSection.vue"
import NumbersSection from "../../components/sections/NumbersSection.vue"
import DownloadSection from "../../components/sections/DownloadSection.vue"
import UsingSection from "../sections/UsingSection.vue"
import ReviewsSection from "../sections/ReviewsSection.vue"
import JoinusSection from "../sections/JoinusSection.vue"
/* eslint-disable */
export default {
  components: {
    HeaderSection,
    NumbersSection,
    DownloadSection,
    UsingSection,
    ReviewsSection,
    JoinusSection,
  },
};
</script>
<style lang="scss">
@import "../../scss/main.scss";

main {
  margin: 0 auto;
}
</style>
