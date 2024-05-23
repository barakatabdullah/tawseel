<template>
  <nav>
    <div class="container">
      <a class="logo" href="/">
        <img src="..\..\assets\logo\tawseel-logo-name.svg" alt="tawseel-logo" />
      </a>
      <div>
        <ul class="nav__menu">
          <li v-for="item in navSections" :key="item.title">
            <router-link class="nav__item" :to="{ name: item.name }">{{
              item.title
            }}</router-link>
          </li>
        </ul>
      </div>
      <div @click="toggle" class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navSections: [
        { title: "الرئيسية", name: "Home" },
        { title: "من نحن", name: "About" },
        { title: "العروض" },
        { title: "تواصل" },
      ],
    };
  },
  mounted() {
    window.onscroll = () => {
      this.showBG();
    };
  },
  methods: {
    toggle() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav__menu");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    },
    showBG() {
      const navbar = document.querySelector("nav");
      if (document.documentElement.scrollTop > 40) {
        navbar.classList.add("navbar-fixed");
      } else {
        navbar.classList.remove("navbar-fixed");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/main.scss";
nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  transition: 0.5s ease-out;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  height: 10rem;
  max-width: $grid-width;
  margin: 0 auto;
}
.navbar-fixed {
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba($color-gray-dark-2, 0.2);
}

.logo {
  width: 15rem;
  cursor: pointer;
  padding: auto;
}

.nav__menu {
  list-style: none;

  & li {
    display: inline-block;
    margin-right: 4rem;

    &:first-child {
      font-weight: 700;
    }
  }
}

.nav__item {
  color: $color-tertiary;
  font-size: $default-font-size;
  font-weight: 00;
  text-decoration: none;
  transition: all 0.5s ease 0s;

  &:hover {
    color: $color-primary;
  }
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 2.5rem;
  height: 0.3rem;
  margin: 0.5rem auto;
  background-color: $color-tertiary;
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(0.8rem) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-0.8rem) rotate(-45deg);
  }

  .nav__menu {
    position: fixed;
    top: -100%;
    right: 0;
    flex-direction: column;
    background-color: $color-tertiary;
    width: 100%;
    text-align: center;
    transition: all 0.3s;

    & li {
      margin: 1.6rem 0;
      display: block;
    }
  }

  .nav__item {
    color: $color-white;
  }

  .nav__menu.active {
    top: 10rem;
  }
}
</style>
