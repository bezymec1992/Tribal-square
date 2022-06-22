<template>
	<div class="customer-experience">
		<div class="customer-experience__container">
			<div class="customer-experience__wrap row g-0">
				<div class="col">
					<div class="customer-experience__visual">
						<img src="@/assets/imgs/customer-experience-002.jpg" class="customer-experience__img img-fluid rounded-start" alt="image description" width="720" height="600" />
					</div>
				</div>
				<div class="customer-experience__body col">
					<div class="customer-experience__inner">
						<h2 class="customer-experience__title h2">
							Transform your <br />
							customer experience
						</h2>
						<Button title="ABOUT US" class="btn-warning" type="nuxt-link" to="/contact">
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
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button";

export default {
	name: "CustomerExperience",
	components: {
		Button
	}
};
</script>

<style lang="scss" scoped>
.customer-experience {
	max-width: 144rem;
	margin: auto;

	&__wrap {
		@include media-breakpoint-down(lg) {
			display: flex;
			flex-direction: column;
		}
	}

	&__visual {
		height: 100%;
		background-color: $mauve;
	}
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__body {
		background-color: $purple;
	}
	&__inner {
		padding-top: 20rem;
		padding-left: 9.4rem;
		padding-right: 11.6rem;
		padding-bottom: 14.5rem;
		@include media-breakpoint-down(xxl) {
			padding-top: 10rem;
			padding-right: 7rem;
		}
		@include media-breakpoint-down(lg) {
			padding-top: 5rem;
			padding-bottom: 5rem;
			padding-left: 4rem;
			padding-right: 4rem;
		}

		@include media-breakpoint-down(md) {
			padding-top: 5rem;
		}
	}
	&__title {
		margin-bottom: 3.7rem;
		color: $white;
	}
}
</style>
