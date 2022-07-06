<template>
	<div class="intro-section">
		<slot />
	</div>
</template>

<script>
export default {
	name: "IntroSection"
};
</script>

<style lang="scss" scoped>
.intro-section {
	padding-top: 30rem;
	padding-bottom: 17.8rem;

	@include media-breakpoint-down(md) {
		padding-top: 17rem;
		padding-bottom: 6.2rem;
	}

	.h1 {
		margin-bottom: 4rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2rem;
		}
	}

	.text-holder {
		margin-bottom: 4rem;
		font-size: 2.2rem;
		line-height: 1.8;

		@include media-breakpoint-down(md) {
			font-size: 1.8rem;
		}
	}
}
</style>
