<template>
	<div class="text-block">
		<div class="container">
			<h2 class="h2 text-center">{{ title }}</h2>
			<div class="text">
				<p>{{ text }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TextBlock",
	props: {
		title: {
			type: String,
			default: ""
		},
		text: {
			type: String,
			default: ""
		}
	}
};
</script>

<style lang="scss" scoped>
.text-block {
	padding-bottom: 14rem;

	@include media-breakpoint-down(md) {
		padding-top: 7rem;
		padding-bottom: 12rem;
	}

	.container {
		max-width: 75rem;
	}

	.h2 {
		margin-bottom: 2.6rem;
		line-height: 1.2;

		@include media-breakpoint-down(md) {
			margin-bottom: 2.4rem;
		}
	}

	.text {
		font-size: 2.2rem;
		line-height: 1.8;
		text-align: center;

		@include media-breakpoint-down(lg) {
			font-size: 1.8rem;
			line-height: 1.6;
		}
	}
}
</style>
