<template>
  <div>
    <div class="home-page">
      <customer-experience-section :title="content.titles.title1" />
      <solution-section />
      <customer-engagement />
      <privacy-policy-cookies />
    </div>
  </div>
</template>

<script>
import CustomerExperienceSection from "~/components/CustomerExperienceSection.vue";
import CustomerEngagement from "~/components/CustomerEngagement.vue";
import SolutionSection from "~/components/SolutionSection.vue";
import PrivacyPolicyCookies from "~/components/PrivacyPolicyCookies.vue";

export default {
  components: {
    CustomerExperienceSection,
    SolutionSection,
    CustomerEngagement,
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
