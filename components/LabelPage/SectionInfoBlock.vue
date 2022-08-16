<template>
	<div class="section-info-block">
		<div class="container">
			<div class="row align-items-md-center">
				<div class="col-lg-6">
					<div class="content-holder">
						<h2 class="h2"><slot name="title" /></h2>
						<div class="text-holder">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in es</p>
						</div>
						<div class="list-holder d-none d-lg-block">
							<slot name="list" />
						</div>
						<Button title="Visit website" class="btn-dark d-none d-lg-inline-block" type="link" :href="btn.href">
							<template #icon>
								<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor" />
								</svg>
							</template>
						</Button>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="img-holder">
						<picture>
							<source v-if="img.mobile" :srcset="require(`@/assets/imgs/${img.mobile}`)" media="(max-width: 575px)" />
							<img :src="require(`@/assets/imgs/${img.desktop}`)" :alt="img.alt" />
						</picture>
					</div>

					<div class="list-holder d-lg-none">
						<slot name="list" />
					</div>
					<Button title="Visit website" class="btn-dark d-lg-none" type="link" :href="btn.href">
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
</template>

<script>
import Button from "@/components/Button.vue";

export default {
	name: "SectionInfoBlock",
	components: {
		Button
	},
	props: {
		img: {
			type: Object,
			default: () => ({})
		},
		btn: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.section-info-block {
	padding-bottom: 15rem;

	@include media-breakpoint-down(md) {
		padding-bottom: 12rem;
	}

	.container {
		max-width: 138rem;
	}

	.content-holder {
		@include media-breakpoint-up(xl) {
			padding-left: 5.8rem;
		}
		
	}

	.h2 {
		margin-bottom: 4rem;
		line-height: 1;
		text-transform: uppercase;
		font-family: 'Oswald';
		@include media-breakpoint-down(md) {
			margin-bottom: 1.5rem;
		}
	}

	.text-holder {
		margin-bottom: 4rem;
		font-size: 2.2rem;
		line-height: 1.8;

		@include media-breakpoint-up(md) {
			max-width: 50rem;
		}

		@include media-breakpoint-down(md) {
			margin-bottom: 3rem;
			font-size: 1.8rem;
			line-height: 1.6;
		}
	}

	.list-holder {
		margin-bottom: 5.6rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2rem;
		}

		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			font-size: 2.8rem;

			@include media-breakpoint-down(md) {
				font-size: 2.2rem;
			}

			li {
				position: relative;
				padding-left: 2rem;
				margin-bottom: 1.6rem;

				@include media-breakpoint-down(md) {
					padding-left: 1.5rem;
				}

				&::before {
					content: "";
					position: absolute;
					top: 1.5rem;
					left: 0;
					width: 0.3rem;
					height: 0.3rem;
					background: $black;
					border-radius: 50%;

					@include media-breakpoint-down(md) {
						top: 1.25rem;
					}
				}
			}
		}
	}

	.img-holder {
		@include media-breakpoint-up(lg) {
			margin-left: -1.6rem;
		}

		@include media-breakpoint-down(lg) {
			margin-bottom: 3.3rem;
		}

		img {
			width: 100%;
			height: auto;
			border-radius: 1rem;
		}
	}
	&.style2 {
		.img-holder {
			margin-right: -152px;
			@include media-breakpoint-down(md) {
				margin-right: -2rem;
				margin-left: -3rem;
			}
		}
		.content-holder {
			width: 608px;
			@include media-breakpoint-down(md) {
				max-width: 100%;
			}
		}
	}
}
</style>
