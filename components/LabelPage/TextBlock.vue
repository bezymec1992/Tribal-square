<template>
	<div class="text-block">
		<h2 class="h2">{{ title }}</h2>
		<div class="text-holder">
			<p v-for="(p, index) in description" :key="index">{{ p }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "TextBlock",

	props: {
		title: {
			type: String,
			default: "title"
		},
		description: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss" scoped>
.text-block {
	padding-bottom: 15rem;

	@include media-breakpoint-down(md) {
		padding-bottom: 10rem;
		padding-left: 2rem;
		padding-right: 2rem;
	}

	.h2 {
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 2rem;
		@include media-breakpoint-down(md) {
			text-align: left;
		}
	}

	.text-holder {
		margin-bottom: 4rem;
		font-size: 2.2rem;
		line-height: 1.8;
		text-align: center;

		@include media-breakpoint-up(md) {
			max-width: 55rem;
			margin: auto;
		}

		@include media-breakpoint-down(md) {
			margin-bottom: 3rem;
			font-size: 1.8rem;
			line-height: 1.6;
			text-align: left;
		}
	}
}
</style>
