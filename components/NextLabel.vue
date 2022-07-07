<template>
	<div class="next-label__section">
		<div class="container">
			<div class="row flex-md-row-reverse next-label__wrapper g-0">
				<div class="col-12 col-md-6">
					<div class="next-label__body">
						<p class="next-label__label text-uppercase">Next label</p>
						<h3 class="next-label__title">TribalHands</h3>
						<p class="next-label__text">This is a place of a short description of the website and about what we do there.</p>
						<div class="btn-holder">
							<Button title="Go to next" class="btn-dark" type="nuxt-link" to="/contact">
								<template #icon>
									<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor" />
									</svg>
								</template>
							</Button>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 px-0">
					<div class="next-label__img-holder">
						<img class="next-label__img" src="@/assets/imgs/img-018.jpg" alt="image description" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NextLabel"
};
</script>

<style lang="scss" scoped>
.next-label {
	&__section {
		padding-bottom: 12rem;

		.btn-holder {
			@include media-breakpoint-down(md) {
				position: relative;
				z-index: 2;
				transform: translateY(50%);
			}
		}
	}

	&__wrapper {
		background-color: $aqua-haze;
		margin: auto;
		max-width: 118rem;
	}

	&__body {
		padding: 5rem 2rem 0 2rem;
		height: 100%;
		@include media-breakpoint-up(md) {
			padding: 2rem 2rem 2.7rem;
		}
		@include media-breakpoint-up(xl) {
			padding: 8.5rem 7rem 8.6rem;
		}
	}

	&__label {
		margin-bottom: 2rem;
		font-size: 1.6rem;
		line-height: 1.5;
		opacity: 40%;
		@include media-breakpoint-up(xl) {
			margin-bottom: 3rem;
			font-size: 1.8rem;
			line-height: 1.33;
		}
	}
	&__title {
		margin-bottom: 2.4rem;
		font-size: 2.8rem;
		line-height: 1.43;
		@include media-breakpoint-up(xl) {
			margin-bottom: 2.7rem;
			font-size: 4rem;
			line-height: 1.5;
		}
	}
	&__text {
		margin-bottom: 4rem;
		font-size: 1.6rem;
		line-height: 1.62;

		@include media-breakpoint-down(md) {
			margin-bottom: 2rem;
		}

		@include media-breakpoint-up(xl) {
			font-size: 2rem;
			line-height: 1.6;
		}
	}
	&__img-holder {
		position: relative;
		padding-top: 98.7%;
		@include media-breakpoint-up(sm) {
			padding-top: 70%;
		}
		@include media-breakpoint-up(md) {
			width: 100%;
			min-height: 47.6rem;
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
