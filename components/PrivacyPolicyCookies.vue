<template>
  <div>
    <div class="container cookies">
      <div class="row justify-content-end">
        <img
          src="../assets/images/close.svg"
          alt="close"
          class="col-12 cookies__close d-flex"
        />
      </div>

      <div class="row">
        <div class="col-12 col-md-6">
          <h3 class="cookies__title">We use cookies</h3>
          <p class="cookies__text">
            This website uses cookies to ensure you get the best expierence on
            our website.
          </p>
        </div>
        <div class="col-12 col-md-6 cookies__right">
          <nuxt-link to="/privacy-policy">
            <button type="button" class="cookies__button text-uppercase">
              Accept
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicyCookies",
  components: {},
  data() {
    return {};
  },
  methods: {
    acceptCookies() {
      this.$emit("cookies-saved");
    },
  },
};
</script>
<style lang="scss" scoped>
.cookies {
  background-color: $white;
  padding: 2.4rem 2rem 4rem;

  &__close {
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    opacity: 70%;
  }
  &__title {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    line-height: 1;
  }
  &__text {
    margin-bottom: 3.2rem;
    font-size: 1.4rem;
    line-height: 1.57;
  }
  &__right {
    @include media-breakpoint-up(md) {
      padding: 2.6rem 5rem 2rem 11.2rem;
    }
  }
  &__button {
    background-color: $candlelight;
    border: none;
    text-align: center;
    width: 100%;
    height: 5.2rem;
    font-size: 1.8rem;
    line-height: 1.11;

    @include media-breakpoint-up(md) {
      width: 22rem;
    }
  }
}
.row {
  --bs-gutter-x: 0;
}
</style>