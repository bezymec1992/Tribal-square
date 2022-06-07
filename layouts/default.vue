<template>
  <transition>
    <div class="wrapper">
      <nav-bar />
      <main class="main">
        <nuxt />
      </main>
      <footer-section v-if="this.$route.path !== '/contact'" />
    </div>
  </transition>
</template>

<script>
import NavBar from "~/components/NavBar";
import FooterSection from "~/components/FooterSection";

export default {
  components: { NavBar, FooterSection },
  data() {
    return {};
  },
  methods: {},
  Computed: {},
};
</script>