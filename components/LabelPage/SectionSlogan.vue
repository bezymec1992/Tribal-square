<template>
	<div class="section-slogan">
		<div class="container">
			<h2 class="h2">
				<slot name="title" />
			</h2>
		</div>
	</div>
</template>

<script>
export default {
	name: "SectionSlogan"
};
</script>

<style lang="scss" scoped>
.section-slogan {
	padding-bottom: 16rem;

	@include media-breakpoint-down(md) {
		padding-bottom: 13rem;
	}

	.h2 {
		margin-bottom: 0;
		text-align: center;
		line-height: 1.2;
		text-transform: uppercase;
		font-family: 'Oswald';
		@include media-breakpoint-down(md) {
			font-size: 3.2rem;
		}
	}
}
</style>
