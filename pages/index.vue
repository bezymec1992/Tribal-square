<template>
  <div>
    <div class="home-page">
      <customer-experience-section :title="content.titles.title1" />
      <solution-section />
      <customer-evgagement />
    </div>
  </div>
</template>

<script>
import CustomerExperienceSection from "~/components/CustomerExperienceSection.vue";
import CustomerEvgagement from "~/components/CustomerEvgagement.vue";

import SolutionSection from "~/components/SolutionSection.vue";
export default {
  components: {
    CustomerExperienceSection,
    SolutionSection,
    CustomerEvgagement,
  },
  data() {
    return {
      content: {
        titles: {
          title1: "Transform your customer experience",
        },
      },
    };
  },
};
</script>
    

<style lang="scss" scoped>
</style>
