<template>
	<div>
		<div class="solution">
			<div class="container">
				<div class="row flex-column-reverse flex-lg-row">
					<div class="col-lg-5">
						<h2 class="h2">We provide solutions that help your business grow</h2>
						<div class="solution__subtitle">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.</p>
						</div>
					</div>
					<div class="col-lg-6 d-flex align-items-center">
						<div class="img-holder">
							<img class="solution__visual" src="@/assets/imgs/solution-001.png" alt="image description" />
						</div>
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
	padding: 16.6rem 7rem;
	@include media-breakpoint-down(lg) {
		padding: 8rem 0;
	}

	&__wrap {
		display: flex;
		flex-direction: row;

		@include media-breakpoint-down(lg) {
			display: flex;
			flex-direction: column-reverse;
			justify-content: center;
		}
	}

	&__left {
		margin: auto;
		max-width: 50%;

		@include media-breakpoint-down(lg) {
			max-width: 100%;
		}
	}

	&__subtitle {
		font-size: 2.2rem;
		line-height: 1.81;

		@include media-breakpoint-down(lg) {
			font-size: 1.8rem;
		}
	}
	&__right {
		display: flex;
		justify-content: center;
	}
	&__visual {
		width: 100%;
		height: auto;
	}

	.h2 {
		margin-bottom: 4rem;

		@include media-breakpoint-down(lg) {
			margin-bottom: 3rem;
		}
	}

	.img-holder {
		@include media-breakpoint-down(lg) {
			margin-bottom: 2.5rem;
		}
	}
}
</style>
