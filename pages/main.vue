<template>
  <div>
    <customer-experience-section :title="content.titles.title1" />
    <solution-section />

    <privacy-policy-cookies />
  </div>
</template>


<script>
import CustomerExperienceSection from "~/components/CustomerExperienceSection.vue";

import SolutionSection from "~/components/SolutionSection.vue";
import PrivacyPolicyCookies from "~/components/PrivacyPolicyCookies.vue";

export default {
  components: {
    CustomerExperienceSection,
    SolutionSection,

    PrivacyPolicyCookies,
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
