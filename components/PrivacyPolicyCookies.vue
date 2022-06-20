<template>
  <div>
    <div class="row">
      <div class="container">
        <img
          src="../assets/images/close.svg"
          alt="close"
          class="cookies__close"
        />
        <div class="cookies">
          <div class="col-12 col-md-6 cookies__body">
            <h3 class="cookies__title">We use cookies</h3>
            <p class="cookies__text">
              This website uses cookies to ensure you get the best expierence on
              our website.
            </p>
          </div>
          <div class="col-12 col-md-6">
            <nuxt-link to="/privacy-policy">
              <button
                type="button"
                class="cookies__button btn-warning text-uppercase"
              >
                Accept
              </button>
            </nuxt-link>
          </div>
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
  padding: 2.4rem 2rem 4rem;
  &__close {
    width: 3.2rem;
    height: 3.2rem;
    float: right;
    margin-right: 2rem;
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
  &__button {
    border: none;
    text-align: center;
    width: 100%;
    height: 5.2rem;
    font-size: 1.8rem;
    line-height: 1.11;
  }
}
</style>