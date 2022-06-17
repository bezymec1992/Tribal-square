<template>
  <div>
    <div class="home-page">
      <customer-experience-section />
      <solution-section />
    </div>
  </div>
</template>

<script>
import CustomerExperienceSection from "~/components/CustomerExperienceSection.vue";
import SolutionSection from "~/components/SolutionSection.vue";
export default {
  components: {
    CustomerExperienceSection,
    SolutionSection,
  },
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
