<template >
  <div class="burger-menu-page _container" @click.="$emit('bgrMenuClose')">
    <ul class="burger-menu-page__links">
      <li>
        <nuxt-link
          class="burger-menu-page__link"
          to="main"
          :class="{
            'burger-menu-page__link--activ': $route.fullPath == '/main',
          }"
          @click.native="$emit('bgrMenuClose')"
        >
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="burger-menu-page__link"
          to="about"
          :class="{
            'burger-menu-page__link--activ': $route.fullPath == '/about',
          }"
          @click.native="$emit('bgrMenuClose')"
        >
          About</nuxt-link
        >
      </li>
      <li id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <nuxt-link
              class="burger-menu-page__link"
              to="products"
              :class="{
                'burger-menu-page__link--activ': $route.fullPath == '/products',
              }"
              @click.native="$emit('bgrMenuClose')"
            >
              Products</nuxt-link
            >
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <ul class="accordion-content">
              <li>
                <a class="accordion-content__accordion-link" href="#"
                  >All products overview</a
                >
              </li>
              <li>
                <a class="accordion-content__accordion-link" href="#"
                  >Knock Knock</a
                >
              </li>
              <li>
                <a class="accordion-content__accordion-link" href="#"
                  >Coffee App</a
                >
              </li>
              <li>
                <a class="accordion-content__accordion-link" href="#"
                  >Digital Valet
                </a>
              </li>
              <li>
                <a class="accordion-content__accordion-link" href="#"
                  >Hands Republic</a
                >
              </li>
            </ul>
          </div>
        </div>
      </li>
      <!-- <li>
        <nuxt-link
          class="burger-menu-page__link"
          to="products"
          :class="{
            'burger-menu-page__link--activ': $route.fullPath == '/products',
          }"
          @click.native="$emit('bgrMenuClose')"
        >
          Products</nuxt-link
        >
        <ul class="accordion-content">
          <li>
            <a class="accordion-content__accordion-link" href="#"
              >All products overview</a
            >
          </li>
          <li>
            <a class="accordion-content__accordion-link" href="#"
              >Knock Knock</a
            >
          </li>
          <li>
            <a class="accordion-content__accordion-link" href="#">Coffee App</a>
          </li>
          <li>
            <a class="accordion-content__accordion-link" href="#"
              >Digital Valet
            </a>
          </li>
          <li>
            <a class="accordion-content__accordion-link" href="#"
              >Hands Republic</a
            >
          </li>
        </ul>
      </li> -->
      <li>
        <nuxt-link
          class="burger-menu-page__link"
          to="labels"
          :class="{
            'burger-menu-page__link--activ': $route.fullPath == '/labels',
          }"
          @click.native="$emit('bgrMenuClose')"
        >
          Labels
        </nuxt-link>
        <ul class="accordion-content">
          <li>
            <a class="accordion-content__accordion-link" href="#"
              >All labels overview</a
            >
          </li>
          <li>
            <a class="accordion-content__accordion-link" href="#"
              >Tribal Hands</a
            >
          </li>
          <li>
            <a class="accordion-content__accordion-link" href="#"
              >Digital Chiefs</a
            >
          </li>
          <li>
            <a class="accordion-content__accordion-link" href="#">Powwows </a>
          </li>
          <li>
            <a class="accordion-content__accordion-link" href="#"
              >Tribal Cyber</a
            >
          </li>
        </ul>
      </li>
      <li>
        <nuxt-link
          class="burger-menu-page__link"
          to="for-partners"
          :class="{
            'burger-menu-page__link--activ': $route.fullPath == '/for-partners',
          }"
          @click.native="$emit('bgrMenuClose')"
        >
          For partners
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="burger-menu-page__link"
          to="contact"
          :class="{
            'burger-menu-page__link--activ': $route.fullPath == '/contact',
          }"
          @click.native="$emit('bgrMenuClose')"
        >
          Contact
        </nuxt-link>
      </li>
    </ul>
    <div class="burger-menu-page__bottom">
      <social-bar class="burger-menu-page__social-bar" />
      <div class="burger-menu-page__terms-privacy">
        <nuxt-link
          class="burger-menu-page__link"
          to="terms-conditions"
          :class="{
            'burger-menu-page__link--activ':
              $route.fullPath == '/terms-conditions',
          }"
          @click.native="$emit('bgrMenuClose')"
        >
          Terms & Conditions
        </nuxt-link>
        <nuxt-link
          class="burger-menu-page__link"
          to="privacy-policy"
          :class="{
            'burger-menu-page__link--activ':
              $route.fullPath == '/privacy-policy',
          }"
          @click.native="$emit('bgrMenuClose')"
        >
          Privacy Policy
        </nuxt-link>
      </div>
    </div>
  </div>
</template>



<script>
import SocialBar from "./SocialBar.vue";

export default {
  name: "BurgerMenu",
  components: {
    SocialBar,
  },
  event: "bgrMenuClose",
  data() {
    return {};
  },
  methods: {},
};
</script>



<style lang="scss">
.burger-menu-page {
  position: absolute;
  width: 100%;
  height: 101vh;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: $mainBgColor;

  padding-top: 50px;
  padding-bottom: 50px;

  // background: rgb(0, 0, 0);

  @include max860 {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  &__links {
    margin-top: 90px;
    display: flex;
    // justify-content: center;
    flex-direction: column;

    // text-transform: uppercase;
    box-sizing: border-box;
    list-style: none;
    color: $mainTextColor;

    font-family: "Minigap";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    // text-align: center;
    // text-transform: uppercase;

    padding-left: 0px;

    & > li {
      margin-bottom: 32px;
    }

    & > li:last-child {
      margin-right: 0;
    }
  }

  &__link {
    text-decoration: none;
    // color: $textColor;
    position: relative;
    color: $mainTextColor;

    &--activ {
      color: $mainTextColor;
    }

    &:hover {
      color: $accentColor;
      // transition: $hover-trans-dur;
      opacity: 1;
    }
  }
  .accordion-content {
    list-style: none;
    padding-left: 0;

    &__accordion-link {
      text-decoration: none;
      color: $mainTextColor;
      opacity: 50%;

      &:hover {
        color: $accentColor;
      }

      font-family: "Minigap";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__social-bar {
    margin-bottom: 50px;
  }
}

// .collaps {
//   content-visibility: hidden;
// }
// .collaps.show {
//   content-visibility: visible;
// }
</style>

