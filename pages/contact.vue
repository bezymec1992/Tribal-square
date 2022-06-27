<template>
  <div class="contact-page">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="contact-page__body">
            <h2 class="contact-page__title">Get in touch</h2>
            <p class="contact-page__text">Feel free to contact us at</p>
            <a
              class="contact-page__email"
              href="mailto:hello@tribalsquare.com.com"
            >
              hello@tribalsquare.com</a
            >
            <p class="contact-page__tag">Socials</p>
          </div>
        </div>
        <div class="col-12 col-md-6 contact-page__right-side">
          <div class="contact-page__wrapper">
            <div class="contact-page__wrapper-body">
              <h3 class="contact-page__wrapper-title">
                Use the form for easy start
              </h3>
              <p class="contact-page__wrapper-subtitle">
                You are interested in
              </p>
              <div class="contact-page__user-decision">
                <label for="FindPartner">
                  <input
                    id="FindPartner"
                    type="radio"
                    name="radio"
                    value="FindPartner"
                    @change="$emit('input', 'FindPartner')"
                  />
                  Find a partner
                </label>
                <label for="PartnerWithUs">
                  <input
                    id="PartnerWithUs"
                    type="radio"
                    name="radio"
                    value="PartnerWithUs"
                    @change="$emit('input', 'PartnerWithUs')"
                  />
                  Partner with us
                </label>
                <label for="Other">
                  <input
                    id="Other"
                    type="radio"
                    name="radio"
                    value="Other"
                    @change="$emit('input', 'Other')"
                  />
                  Other
                </label>
              </div>
              <div class="contact-page__wrapper-form">
                <!-- <ContactForm /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ContactForm from "@/components/ContactForm";

export default {
  name: "Contact",
  components: {
    // ContactForm,
  },
};
</script>

<style lang="scss" scoped>
.contact-page {
  padding-top: 4rem;
  padding-bottom: 4.3rem;
  background-color: $purple;
  @include media-breakpoint-up(md) {
    padding-top: 0;
    padding-bottom: 0;
  }

  &__body {
    padding-bottom: 4.3rem;
    @include media-breakpoint-up(md) {
      padding: 4rem 1rem 4.3rem 5rem;
    }
    @include media-breakpoint-up(xxl) {
      padding: 17.9rem 0 18.8rem;
    }
  }
  &__title {
    color: $white;
    margin-bottom: 3rem;
    font-size: 4rem;
    line-height: 1.24;
    @include media-breakpoint-up(xl) {
      margin-bottom: 6rem;
      font-size: 6.4rem;
      line-height: 1.19;
    }
  }
  &__text {
    color: $white;
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
    line-height: 1.24;
    @include media-breakpoint-up(xl) {
      margin-bottom: 1rem;
      font-size: 2rem;
      line-height: 1.2;
    }
  }
  &__email {
    color: $white;
    font-size: 2.6rem;
    line-height: 1.24;
    @include media-breakpoint-up(xl) {
      font-size: 3.2rem;
      line-height: 1.87;
    }
  }
  &__tag {
    color: $white;
    margin-top: 3.2rem;
    margin-bottom: 1.1rem;
    font-size: 1.6rem;
    line-height: 1.24;
    @include media-breakpoint-up(xl) {
      margin-top: 6rem;
      margin-bottom: 2.3rem;
      font-size: 2rem;
      line-height: 1.2;
    }
  }
  &__right-side {
    padding-top: 2rem;
    padding-bottom: 2rem;
    @include media-breakpoint-up(xl) {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    @include media-breakpoint-up(xxl) {
      padding-top: 6.8rem;
      padding-bottom: 6.8rem;
      padding-right: 8rem;
    }
  }
  &__wrapper {
    background-color: $white;
    box-sizing: border-box;
    border-radius: 1.2rem;
    @include media-breakpoint-up(md) {
      max-width: 60rem;
    }
  }
  &__wrapper-body {
    padding: 3rem 2rem 3.2rem;

    @include media-breakpoint-up(md) {
      padding: 3rem 2rem 3.2rem;
    }
  }
  &__wrapper-title {
    margin-bottom: 2.4rem;
    font-size: 2.6rem;
    line-height: 1.23;

    @include media-breakpoint-up(xl) {
      margin-bottom: 3.8rem;
      font-size: 3.2rem;
      line-height: 1.25;
    }
  }
  &__wrapper-subtitle {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    line-height: 1.55;
    @include media-breakpoint-up(xl) {
      margin-bottom: 1.2rem;
      font-size: 2.2rem;
      line-height: 1.82;
    }
  }
  &__user-decision {
    margin-bottom: 2.4rem;
    display: flex;
    flex-direction: column;
    label {
      font-size: 1.6rem;
      line-height: 1.87;
      @include media-breakpoint-up(sm) {
        margin-right: 3.6rem;
      }
      @include media-breakpoint-up(xl) {
        margin-bottom: 4.9rem;
        font-size: 1.8rem;
        line-height: 1.66;
      }
    }
    input {
      margin-bottom: 1.5rem;
    }
    @include media-breakpoint-up(xl) {
      flex-direction: row;
    }
  }
  &__form {
    max-width: 52rem;
  }
}
</style>
