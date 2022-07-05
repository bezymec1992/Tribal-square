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
						<h4 class="solution__title">We provide solutions that help your business grow</h4>

						<p class="solution__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.</p>
					</div>
				</div>
			</div>
		</div>
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
	background-color: $white;
	padding: 3.8rem 0 8rem;

	@include media-breakpoint-down(md) {
		overflow: hidden;
	}

	@include media-breakpoint-up(lg) {
		padding-top: 16.6rem;
		padding-bottom: 17.4rem;
	}

	.container {
		max-width: 134rem;
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
			margin-left: -4rem;
			margin-right: -3rem;
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
