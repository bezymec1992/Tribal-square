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
							<Button title="GO TO NEXT" class="btn-warning" type="nuxt-link" to="/contact">
								<template #icon>
									<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
										<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
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
