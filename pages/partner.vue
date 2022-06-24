<template >
  <div>
    <div class="customer-ingagement">
      <div class="container">
        <h2
          class="customer-ingagement__block-title h3 text-left text-md-center"
        >
          Accelerate customer engagement initiatives with confidence
        </h2>

        <div class="row flex-md-row-reverse">
          <div class="col-12 col-md-6">
            <div class="customer-ingagement__body">
              <p class="customer-ingagement__label text-uppercase">
                Consultancy Partners
              </p>

              <h3 class="customer-ingagement__title">
                Global execution and delivery of your technology strategy.
              </h3>
              <h4 class="customer-ingagement__subtitle">
                Build alongside TribalSquare experts
              </h4>
              <p class="customer-ingagement__text">
                TribalSquare gives you the time, resources, and flexible pricing
                model designed to kickstart the success of your application.
                With Build, you have the runway and commitment from TribalSquare
                that you need to grow your customer base and build your
                business.
              </p>
              <img
                class="customer-ingagement__img d-md-none"
                src="../assets/images/customer-engagement-004.svg"
                alt="image description"
              />
              <h4 class="customer-ingagement__subtitle">
                Drive revenue to your practice
              </h4>
              <p class="customer-ingagement__text">
                Build gives you the knowledge, guidance, and resources you need
                to grow your business. You'll receive guidance from TribalSquare
                sales and engineering experts who will help you build and scale
                your practice.
              </p>
            </div>
          </div>
          <div
            class="
              col-12 col-md-6
              justify-content-center
              align-items-center
              d-none d-md-flex
            "
          >
            <img
              class="customer-ingagement__img"
              src="../assets/images/customer-engagement-004.svg"
              alt="image description"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="customer-ingagement__body">
              <p class="customer-ingagement__label text-uppercase">
                Technology partners
              </p>

              <h3 class="customer-ingagement__title">
                Develop applications on a reliable, scalable platform .
              </h3>
              <h4 class="customer-ingagement__subtitle">
                Enhance your profitability with a long-term partnership
              </h4>
              <p class="customer-ingagement__text">
                TribalSquare gives you the time, resources, and flexible pricing
                model designed to kickstart the success of your application.
                With Build, you have the runway and commitment from TribalSquare
                that you need to grow your customer base and build your
                business.
              </p>
              <img
                class="customer-ingagement__img d-md-none"
                src="../assets/images/customer-engagement-005.svg"
                alt="image description"
              />
              <h4 class="customer-ingagement__subtitle">
                Review your applications with TribalSquare experts
              </h4>
              <p class="customer-ingagement__text">
                Application quality is critical to driving sales and building
                long-lasting customer relationships. Build gives you access to
                expert TribalSquare engineers to review your applications before
                bringing them to market.
              </p>
            </div>
          </div>
          <div
            class="
              col-12 col-md-6
              justify-content-center
              align-items-center
              d-none d-md-flex
            "
          >
            <img
              class="customer-ingagement__img"
              src="../assets/images/customer-engagement-005.svg"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.customer-ingagement {
  // padding: 8rem 0 10rem;
  // @include media-breakpoint-up(lg) {
  //   padding: 10rem 0 15rem;
  // }
  &__block-title {
    margin-bottom: 3.5rem;
    font-size: 2.8rem;
    line-height: 1.42;
    @include media-breakpoint-up(lg) {
      text-align: center;
      font-size: 4rem;
      line-height: 1.5;
    }
  }
  &__body {
    margin-bottom: 2.4rem;
  }
  &__label {
    margin-bottom: 1.6rem;
    font-size: 1.8rem;
    line-height: 1.33;
    color: $purple;
    @include media-breakpoint-up(lg) {
      font-size: 2.2rem;
      line-height: 1.09;
    }
  }
  &__title {
    margin-bottom: 4rem;
    font-size: 2.4rem;
    line-height: 1.24;
    @include media-breakpoint-up(lg) {
      font-size: 3.4rem;
      line-height: 1.41;
    }
  }
  &__subtitle {
    margin-bottom: 1.6rem;
    font-size: 2.2rem;
    line-height: 1.24;
    @include media-breakpoint-up(lg) {
      font-size: 2.6rem;
      line-height: 1.38;
    }
  }
  &__text {
    margin-bottom: 8rem;
    font-size: 1.8rem;
    line-height: 1.77;
    @include media-breakpoint-up(lg) {
      margin-bottom: 6rem;
    }
  }
  &__img {
    margin-bottom: 3.9rem;
  }
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
  display: inline-block;
}
</style>