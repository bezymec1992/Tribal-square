<template>
  <div>
    <div class="home-page">
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
  // .our-parnters {
  //   .container {
  //     max-width: 133.9rem;
  //   }
  // }
}
</style>
