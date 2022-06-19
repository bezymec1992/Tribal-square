<template>
  <div>
    <div class="customer-experience">
      <div class="row">
        <div
          class="
            col-12 col-md-6
            justify-content-center
            align-items-center
            customer-experience__visual
          "
        >
          <img
            class="customer-experience__img d-none d-sm-flex w-100"
            src="../assets/images/customer-experience-002.jpg"
            alt="image description"
          />
          <img
            class="customer-experience__img d-sm-none w-100"
            src="../assets/images/customer-experience-mb-003.jpg"
            alt="image description"
          />
        </div>

        <div class="col-12 col-md-6 customer-experience__body">
          <h3 class="customer-experience__title">
            Develop applications on a reliable, scalable platform .
          </h3>
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
  &__visual {
    background-color: $mauve;
  }
  &__img {
    opacity: 70%;
    @include media-breakpoint-up(md) {
      height: 100%;
    }
    // @include media-breakpoint-up(lg) {
    //   height: auto;
    // }
  }
  &__body {
    background-color: $purple;
  }
  &__title {
    padding: 5rem 4rem 14.5rem;
    color: $white;
    font-size: 2.8rem;
    line-height: 1.24;
    @include media-breakpoint-up(md) {
      padding: 10rem 5.8rem 14rem 4.7rem;
      // font-size: 4rem;
      // line-height: 1.5;
    }
    @include media-breakpoint-up(xl) {
      padding: 20rem 11.6rem 28rem 9.4rem;
      font-size: 4rem;
      line-height: 1.5;
    }
  }
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
  display: inline-block;
}
.row > * {
  @include media-breakpoint-up(md) {
    padding-right: 0;
  }
}
</style>