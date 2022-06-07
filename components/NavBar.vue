<template >
  <div class="nav _container">
    <nuxt-link class="nav__link-logo" to="main">
      <p class="nav__logo">LOGO</p>
    </nuxt-link>

    <ul class="nav__links">
      <li>
        <nuxt-link
          class="nav__link"
          to="about"
          :class="{ 'nav__link--activ': $route.fullPath == '/about' }"
        >
          About</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="nav__link"
          to="products"
          :class="{ 'nav__link--activ': $route.fullPath == '/products' }"
        >
          Products</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="nav__link"
          to="labels"
          :class="{ 'nav__link--activ': $route.fullPath == '/labels' }"
        >
          Labels</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="nav__link"
          to="for-partners"
          :class="{ 'nav__link--activ': $route.fullPath == '/for-partners' }"
        >
          For partners</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="nav__link"
          to="contact"
          :class="{ 'nav__link--activ': $route.fullPath == '/contact' }"
        >
          Contact</nuxt-link
        >
      </li>
    </ul>
    <div
      class="burger-menu burger-menu--closed"
      :class="{
        'burger-menu--opened': isBurgerMenuOpen,
      }"
      @click="openBurgerMenu"
    ></div>

    <transition name="fade">
      <burger-menu v-if="isBurgerMenuOpen" @bgrMenuClose="closeBurgerMenu()" />
    </transition>
  </div>
</template>



<script>
import BurgerMenu from "./BurgerMenu.vue";
export default {
  name: "NavBar",
  components: {
    BurgerMenu,
  },
  data() {
    return {
      isBurgerMenuOpen: false,
    };
  },
  methods: {
    openBurgerMenu() {
      if (this.isBurgerMenuOpen) {
        document.body.style.overflow = "auto";
        this.isBurgerMenuOpen = false;
      } else {
        this.isBurgerMenuOpen = true;
        document.body.style.overflow = "hidden";
      }
    },
    closeBurgerMenu() {
      document.body.style.overflow = "auto";
      this.isBurgerMenuOpen = false;
    },
  },
};
</script>



<style lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: transparent;
  width: 100%;
  padding-top: 38px;
  padding-bottom: 38px;

  @include max860 {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  &__logo {
    font-family: "Pontiff Wide";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 80px;
    min-width: fit-content;
    color: $mainTextColor;
    margin: 0px;

    &:hover {
      opacity: 0.5;
    }

    @include max860 {
      font-family: "Pontiff Wide";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 60px;
      text-transform: uppercase;
    }
  }

  &__links {
    text-transform: uppercase;
    box-sizing: border-box;
    display: inline;
    list-style: none;
    color: $mainTextColor;
    font-family: "Minigap", sans-serif;
    font-size: 20px;
    line-height: 24px;
    padding-left: 20px;
    margin: 0px;

    @include max860 {
      display: none;
    }

    & > li {
      display: inline-block;
      margin-right: 32px;
    }

    & > li:last-child {
      margin-right: 0;
    }
  }

  &__link-logo {
    text-decoration: none;
    z-index: 20;
  }

  &__link {
    text-decoration: none;
    color: $mainTextColor;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      top: 23px;
      left: 0;
      width: 100%;
      height: 2px;
      background: $accentColor;
      opacity: 0;
    }

    &:hover::after {
      color: $accentColor;
      // transition: $hover-trans-dur;
      opacity: 1;
    }

    &--activ {
      &::after {
        position: absolute;
        content: "";
        top: 23px;
        left: 0;
        width: 100%;
        height: 2px;
        background: $accentColor;
        opacity: 1;
      }
    }
  }

  .burger-menu {
    display: none;
    width: 32px;
    height: 32px;
    position: relative;
    box-sizing: border-box;
    z-index: 20;

    &--closed {
      @include max860 {
        display: block;

        &::after {
          content: "";
          width: 100%;
          height: 3px;
          background: $burgerColor;
          position: absolute;
          bottom: 10px;
          left: 0px;
        }

        &::before {
          content: "";
          width: 100%;
          height: 3px;
          background: $burgerColor;
          position: absolute;
          top: 10px;
          left: 0px;
        }
      }
    }

    &--opened {
      @include max860 {
        display: block;

        &::after {
          content: "";
          width: 100%;
          height: 3px;
          background: $burgerColor;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        &::before {
          content: "";
          width: 100%;
          height: 3px;
          background: $burgerColor;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

  /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
