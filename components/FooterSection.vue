<template>
  <footer class="footer _container">
    <div class="flx-wrap">
      <div class="col">
        <h2 class="footer__title-logo">LOGO</h2>
        <SocialBar class="footer__social-bar" />
      </div>

      <div class="col">
        <h2 class="footer__title">Feel free to contact us at</h2>

        <div class="footer__contacts">
          <div class="col">
            <p class="footer__contact-text">Feel free to contact us at</p>
            <a class="footer__contact" href="mailto:hello@tribalsquare.com">
              hello@tribalsquare.com</a
            >
          </div>
          <!-- <div class="col">
            <p class="footer__contact-text">More info:</p>
            <a class="footer__contact" href="mailto:info@tribalden.com">
              info@tribalden.com</a
            >
          </div> -->
        </div>
      </div>
    </div>

    <div class="subscribe-block">
      <p class="subscribe-block__text">
        Subscribe to receive Tribal Den updates, news and events
      </p>
      <span class="subscribe-block__input-subtitle"> EMAIL</span>
      <ValidatableInput class="subscribe-block__input" />
      <button
        class="subscribe-block__subscrib-btn"
        @click.prevent="subscribe()"
      >
        Subscribe
      </button>
    </div>
  </footer>
</template>

<script>
import SocialBar from "~/components/SocialBar.vue";

export default {
  name: "NavBar",
  components: {
    SocialBar,
  },
  data() {
    return {};
  },
  methods: {
    subscribe() {
      console.log("subscribe");
    },
  },
};
</script>

<style lang="scss">
.footer {
  margin-top: 120px;

  @include max640 {
    margin-top: 80px;
  }

  // background: $accentColor;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &__title-logo {
    font-family: "Antonio";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    // color: $textColor;
    margin-top: 0;
    margin-bottom: 20px;
  }

  &__social-bar {
    margin-bottom: 110px;

    // @include max640 {
    //   margin-bottom: 80px;
    // }

    // @include max375 {
    // }
  }

  &__text {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    // color: $textColor;
  }

  &__title {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    // color: $textColor;
    margin: 0;
    margin-bottom: 65px;

    // @include max640 {
    //   font-size: 24px;
    //   line-height: 30px;
    //   margin-bottom: 30px;
    // }
  }

  &__contacts {
    display: flex;

    & div:first-child {
      max-width: 380px;
      margin-right: 76px;

      // @include max860 {
      //   margin-right: 20px;
      // }
    }

    // @include max375 {
    //   margin-bottom: 90px;
    // }
  }

  &__contact {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    // color: $textColor;
    margin-top: 0;
    margin-bottom: 0;
    text-decoration: none;

    // @include max640 {
    //   font-size: 16px;
    //   line-height: 30px;
    // }
  }

  &__contact-text {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    // color: $textColor;
    margin-top: 0;
    margin-bottom: 0;

    // @include max375 {
    //   font-size: 12px;
    //   line-height: 14px;
    // }
  }
}

.subscribe-block {
  margin-bottom: 100px;

  // @include max750 {
  //   margin-bottom: 80px;
  // }

  &__text {
    // color: $textColor;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 20px;
    max-width: 325px;

    // @include max750 {
    //   font-size: 24px;
    //   margin-bottom: 40px;
    // }
  }

  &__input {
    display: inline-block;
    margin-right: 20px;

    // @include max750 {
    //   width: 100%;
    //   margin-bottom: 20px;
    // }
  }

  &__input-subtitle {
    // color: $textColor;
    display: block;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.1em;
  }

  &__subscrib-btn {
    display: inline-block;
    width: 200px;
    height: 56px;
    text-transform: uppercase;
    vertical-align: middle;

    // @include font-for-btn($black);

    &:hover {
      // transition: $hover-trans-dur;
      // background: $red;
      // color: $;
      border: none;
    }

    // @include max750 {
    //   width: 100%;
    // }

    // @include max375 {
    //   display: block;
    //   width: 100%;
    // }
  }
}
</style>
