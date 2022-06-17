<template>
  <div>
    <div class="solution">
      <div class="container">
        <div class="solution__wrap">
          <div class="solution__left">
            <h2 class="solution__title h2">
              We provide solutions that help your business grow
            </h2>
            <div class="solution__subtitle">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                egestas in est ut aliquet. Pellentesque ac blandit leo, nec
                porta velit. Nulla facilisi. Phasellus at placerat felis.
                Intege.
              </p>
            </div>
          </div>
          <div class="solution__right">
            <img
              class="solution__visual"
              src="../assets/images/solution-001.svg"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolutionSection",
  components: {},
};
</script>

<style lang="scss" scoped>
.solution {
  background-color: $white;
  padding: 16.6rem 7rem;
  @include media-breakpoint-down(lg) {
    padding: 8rem 2rem;
  }

  &__wrap {
    display: flex;
    flex-direction: row;

    @include media-breakpoint-down(lg) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
    }
  }

  &__left {
    margin: auto;
    max-width: 50%;

    @include media-breakpoint-down(lg) {
      max-width: 100%;
    }
  }

  &__title {
    // padding-top: 16.6rem;
    padding-bottom: 4rem;
  }
  &__subtitle {
    font-size: 2.2rem;
    line-height: 1.81;
    // padding-bottom: 17rem;
  }
  &__right {
    display: flex;
    justify-content: center;
  }
  &__visual {
    width: 100%;
    height: auto;
  }
}
</style>