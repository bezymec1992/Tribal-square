<template>
  <div>
    <div class="home-page">
      <div class="our-parnters">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3">1</div>
            <div class="col-md-6 col-lg-3">2</div>
            <div class="col-md-6 col-lg-3">3</div>
            <div class="col-md-6 col-lg-3">4</div>
          </div>
        </div>
      </div>
      <div class="solution">
        <solution-section />
      </div>
    </div>
  </div>
</template>

<script>
import SolutionSection from "~/components/SolutionSection.vue";
export default {
  components: { SolutionSection },
};
</script>

<style lang="scss" scoped>
.home-page {
  .our-parnters {
    .container {
      max-width: 133.9rem;
    }
  }
}
</style>
