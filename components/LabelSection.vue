<template>
  <div>
    <!-- About the label section -->

    <div class="about-the-label">
      <div class="container">
        <h3 class="about-the-label__title h3 text-left">About the label</h3>
        <div class="row">
          <div class="col-12 col-md-6 d-flex">
            <p class="about-the-label__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta
              velit.
            </p>
          </div>
          <div class="col-12 col-md-6 d-flex">
            <p class="about-the-label__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta
              velit.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- How does it work section -->

    <div class="how-does-it-work">
      <h3 class="how-does-it-work__title text-center">How does it work</h3>

      <div class="row">
        <!-- How does it work section mobile-->

        <div class="col-12 col-md-6 d-md-none d-flex justify-content-center">
          <img
            class="how-does-it-work__desktop-img"
            src="../assets/images/how-does-it-work-006.svg"
            alt="image description"
          />
        </div>
        <div class="col-12 col-md-6 d-md-none text-center">
          <ul class="how-does-it-work__list list-unstyled">
            <li class="how-does-it-work__item">
              Create events for desirous
              <div class="hr-dashed"></div>
            </li>
            <li class="how-does-it-work__item">
              Looking for partner
              <div class="hr-dashed"></div>
            </li>
            <li class="how-does-it-work__item">
              Invest in ideas and companies
              <div class="hr-dashed"></div>
            </li>
            <li class="how-does-it-work__item">Create inner meeting</li>
          </ul>
        </div>

        <!-- How does it work section Desktop-->

        <div
          class="
            col-12
            d-none d-md-flex
            justify-content-center
            position-absolute
          "
        >
          <img
            class="how-does-it-work__img"
            src="../assets/images/how-does-it-work-006.svg"
            alt="image description"
          />
        </div>

        <div class="col-6 d-flex how-does-it-work__desktop-left">
          <ul class="how-does-it-work__desktop-list list-unstyled">
            <li class="how-does-it-work__desktop-item-left">
              Create events for desirous
              <div class="hr-dashed-img d-flex">
                <img
                  src="../assets/images/how-does-it-work-ellipse-007.svg"
                  alt="ellipse"
                />
                <img
                  src="../assets/images/how-does-it-work-line-left-009.svg"
                  alt="line"
                />
              </div>
            </li>
            <li class="how-does-it-work__desktop-item-left">
              Looking for partner
              <div class="hr-dashed-img d-flex">
                <img
                  src="../assets/images/how-does-it-work-ellipse-007.svg"
                  alt="ellipse"
                />
                <img
                  src="../assets/images/how-does-it-work-line-left-009.svg"
                  alt="line"
                />
              </div>
            </li>
          </ul>
        </div>
        <div
          class="col-6 d-flex how-does-it-work__desktop-right d-none d-md-flex"
        >
          <ul class="how-does-it-work__desktop-list list-unstyled">
            <li class="how-does-it-work__desktop-item-right">
              Invest in ideas and companies

              <div class="hr-dashed-img d-flex">
                <img
                  src="../assets/images/how-does-it-work-line-right-008.svg"
                  alt="line"
                />
                <img
                  src="../assets/images/how-does-it-work-ellipse-007.svg"
                  alt="ellipse"
                />
              </div>
            </li>
            <li class="how-does-it-work__desktop-item-right">
              Create inner meetings
              <div class="hr-dashed-img d-flex">
                <img
                  src="../assets/images/how-does-it-work-line-right-008.svg"
                  alt="line"
                />
                <img
                  src="../assets/images/how-does-it-work-ellipse-007.svg"
                  alt="ellipse"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LabelSection",
};
</script>
<style lang="scss" scoped>
.about-the-label {
  padding: 8rem 0 8rem;
  @include media-breakpoint-up(md) {
    padding: 10rem 4.5rem 10rem;
  }
  @include media-breakpoint-up(lg) {
    padding: 12rem 9.5rem 12rem;
  }

  &__title {
    margin-bottom: 1rem;
    font-size: 2.8rem;
    line-height: 1.42;
    @include media-breakpoint-up(md) {
      margin-bottom: 3rem;
      font-size: 3.4rem;
      line-height: 1.18;
    }
  }
  &__text {
    margin-bottom: 2rem;
    font-size: 1.6rem;
    line-height: 1.5;
    @include media-breakpoint-up(md) {
      font-size: 1.8rem;
      line-height: 1.78;
    }
  }
}

.how-does-it-work {
  padding: 6rem 0 4rem;
  background-color: $aqua-haze;
  @include media-breakpoint-up(md) {
    padding: 4.4rem 0 15rem;
    margin-bottom: 10rem;
  }
  &__title {
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
    line-height: 1.24;
  }
  &__img {
    margin-bottom: 2.2rem;

    @include media-breakpoint-up(md) {
    }
  }

  &__item {
    font-size: 1.8rem;
    line-height: 2.22;
    padding-bottom: 1.6rem;

    @include media-breakpoint-up(md) {
    }
  }
}
.hr-dashed {
  height: 1px;
  background-size: 1.6rem 0.1rem;
  background-repeat: repeat-x;
  background-image: linear-gradient(
    to right,
    black 50%,
    rgba(255, 255, 255, 0) 0%
  );
  margin-top: 2rem;
  opacity: 20%;
  margin-left: 4rem;
  margin-right: 4rem;
}
.hr-dashed-img {
  display: flex;
  font-display: row;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
  display: inline-block;
}
</style>