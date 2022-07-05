<template>
	<div class="img-section">
		<div class="container">
			<div class="row img-section__wrapper text-center">
				<div class="col-12">
					<div class="img-section__img-holder">
						<img class="img-section__img" src="@/assets/images/what-are-we-stand-for-0010.jpg" alt="image description" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ImgSection"
};
</script>

<style lang="scss" scoped>
.img-section {
	&__body {
		max-width: 75.2rem;
		margin: auto;
		padding-top: 8rem;
		@include media-breakpoint-up(lg) {
			padding-top: 22.4rem;
		}
	}

	&__title {
		margin-bottom: 2rem;
		font-size: 2.4rem;
		line-height: 1.24;
		@include media-breakpoint-up(md) {
			font-size: 4rem;
			line-height: 1.5;
		}
	}
	&__text {
		margin-bottom: 4rem;
		font-size: 1.8rem;
		line-height: 1.66;
		@include media-breakpoint-up(md) {
			margin-bottom: 8rem;
			font-size: 2.2rem;
			line-height: 1.81;
		}
	}
	&__img-holder {
		position: relative;
		padding-top: 98.7%;
		@include media-breakpoint-up(sm) {
			padding-top: 70%;
		}
		@include media-breakpoint-up(md) {
			padding-top: 80%;
		}
		@include media-breakpoint-up(lg) {
			padding-top: 58%;
		}

		@include media-breakpoint-down(lg) {
			margin-left: -2rem;
			margin-right: -2rem;
		}

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>
