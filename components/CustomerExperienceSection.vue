<template>
	<div class="customer-experience">
		<div class="customer-experience__container">
			<div class="customer-experience__wrap row g-0">
				<div class="col">
					<div class="customer-experience__visual">
						<img v-if="img" :src="require(`@/assets/imgs/${img}`)" class="customer-experience__img img-fluid rounded-start" alt="image description" width="720" height="600" />
					</div>
				</div>
				<div class="customer-experience__body col" :style="{ backgroundColor: bgColor }">
					<div class="customer-experience__inner">
						<h2 class="customer-experience__title h2">
							<slot name="title">
								Transform your <br />
								customer experience
							</slot>
						</h2>
						<Button :title="btn.title" class="btn-light shadow-sm" type="nuxt-link" :to="btn.to">
							<template #icon>
								<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor" />
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
	},
	props: {
		img: {
			type: String,
			default: ""
		},
		bgColor: {
			type: String,
			default: "black"
		},
		btn: {
			title: {
				type: String,
				default: "title"
			},
			to: {
				type: String,
				default: "/"
			}
		}
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
		height: 100%;

		@include media-breakpoint-down(xxl) {
			display: flex;
			flex-direction: column;
			align-items: baseline;
			justify-content: center;
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
			padding-top: 6rem;
			padding-bottom: 7rem;
		}
	}
	&__title {
		margin-bottom: 3.7rem;
		color: $white;
	}
}
</style>
