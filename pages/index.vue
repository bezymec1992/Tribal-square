<template>
  <div>
    <div class="home-page">
      <customer-experience-section />
      <solution-section />
      <customer-evgagement />
    </div>
  </div>
</template>

<script>
import CustomerEvgagement from "~/components/CustomerEvgagement.vue";
import CustomerExperienceSection from "~/components/CustomerExperienceSection.vue";
import SolutionSection from "~/components/SolutionSection.vue";
export default {
  components: {
    CustomerExperienceSection,
    SolutionSection,
    CustomerEvgagement,
  },
};
</script>
    

<style lang="scss" scoped>
</style>
