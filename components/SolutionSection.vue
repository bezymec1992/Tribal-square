<template>
	<div class="solution">
		<div class="container">
			<div class="row flex-md-row-reverse">
				<div class="col-12 col-md-6 justify-content-center align-items-center d-flex">
					<div class="img-holder">
						<img src="@/assets/imgs/solution-001.png" class="solution__img" alt="image description" />
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="solution__body">
						<h2 class="solution__title">
							We provide <br class="d-none d-md-block" />
							solutions <br class="d-md-none" />
							that help your business grow
						</h2>
						<p class="solution__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.</p>
					</div>
				</div>
			</div>
		</div>
		<span class="ellipse ellipse-1"></span>
		<span class="ellipse ellipse-2"></span>
		<span class="ellipse ellipse-3"></span>
	</div>
</template>

<script>
export default {
	name: "SolutionSection",
	components: {}
};
</script>

<style lang="scss" scoped>
.solution {
	position: relative;
	color: $white;
	background: $matisse;
	padding: 6rem 0 6rem;
	overflow: hidden;

	@include media-breakpoint-up(lg) {
		padding-top: 16.6rem;
		padding-bottom: 17.4rem;
	}

	.ellipse {
		position: absolute;
		border-radius: 50%;

		&.ellipse-1 {
			top: -10%;
			left: -50%;
			width: 160rem;
			height: 160rem;
			background: radial-gradient(50% 50% at 50% 50%, #005570 0%, rgba(0, 85, 112, 0) 100%);
		}

		&.ellipse-2 {
			top: 50%;
			transform: translateY(-50%);
			right: 0;
			width: 108.9rem;
			height: 108.9rem;
			background: radial-gradient(50% 50% at 50% 50%, #005570 0%, rgba(0, 85, 112, 0) 100%);
		}

		&.ellipse-3 {
			top: -50%;
			right: -50%;
			width: 126.2rem;
			height: 117.6rem;
			background: radial-gradient(50% 50% at 50% 50%, #1f98be 0%, rgba(31, 152, 190, 0) 100%);
		}
	}

	.container {
		position: relative;
		max-width: 134rem;
		z-index: 2;
	}

	&__title {
		font-size: 2.8rem;
		line-height: 1.42;
		margin-bottom: 3rem;

		@include media-breakpoint-up(lg) {
			font-size: 4rem;
			line-height: 1.5;
			margin-bottom: 4rem;
		}
	}
	&__text {
		font-size: 1.8rem;
		line-height: 1.66;
		@include media-breakpoint-up(lg) {
			font-size: 2.2rem;
			line-height: 1.81;
		}
	}
	&__img {
		margin-bottom: 2.6rem;
	}

	.img-holder {
		@include media-breakpoint-down(md) {
			margin-right: -9rem;
		}
	}

	img {
		max-width: 100%;
		height: auto;
		vertical-align: top;
		display: inline-block;
	}
}
</style>
