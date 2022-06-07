<template>
  <transition>
    <div class="error-page">
      <div class="container">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <NuxtLink class="link" to="/">Go to home page</NuxtLink>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["error"],
  layout: "default",
};
</script>

<style lang="scss" scoped>
</style>

