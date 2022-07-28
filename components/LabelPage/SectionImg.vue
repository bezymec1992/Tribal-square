<template>
	<div class="section-img">
		<div class="container">
			<picture>
				<source v-if="img.mobile" :srcset="require(`@/assets/imgs/${img.mobile}`)" media="(max-width: 575px)" />
				<img :src="require(`@/assets/imgs/${img.desktop}`)" :alt="img.alt" />
			</picture>
		</div>
	</div>
</template>

<script>
export default {
	name: "SectionImg",
	props: {
		img: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.section-img {
	padding-top: 8rem;
	padding-bottom: 16rem;

	@include media-breakpoint-down(md) {
		padding-bottom: 8rem;
	}

	.container {
		max-width: 138rem;

		@include media-breakpoint-down(md) {
			padding-left: 0;
			padding-right: 0;
		}
	}

	img {
		width: 100%;
		height: auto;
	}
}
</style>
