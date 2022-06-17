<template>
  <div>
    <div class="customer-experience__section" style="max-width: 144rem">
      <div class="customer-experience__wrap row g-0">
        <div class="col">
          <div class="customer-experience__visual">
            <picture>
              <source
                srcset="../assets/images/customer-experience-min-003.png"
                media="(max-width: 992px)"
              />
              <img
                src="../assets/images/customer-experience-002.png"
                class="customer-experience__img img-fluid rounded-start"
                alt="image description"
                width="720"
                height="600"
              />
            </picture>
          </div>
        </div>
        <div class="customer-experience__body col">
          <div class="customer-experience__inner">
            <h2 class="customer-experience__title h2">
              Transform your customer experience
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerExperience",
};
</script>

<style lang="scss" scoped>
.customer-experience {
  &__wrap {
    @include media-breakpoint-down(lg) {
      display: flex;
      flex-direction: column;
    }
  }

  &__visual {
    background-color: $mauve;
  }
  &__img {
    width: 100%;
    height: 100%;
    // object-fit: cover;
    opacity: 70%;
  }
  &__body {
    background-color: $purple;
  }
  &__inner {
    padding: 20rem 11.6rem 18.3rem 9.4rem;

    @include media-breakpoint-down(xxl) {
      padding: 12rem 7rem 9rem 7rem;
    }
    @include media-breakpoint-down(md) {
      padding: 5rem 4rem 5.3rem 4rem;
    }
  }
  &__title {
    color: $white;
  }
}
</style>