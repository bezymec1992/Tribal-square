<template>
		<nuxt-link :to="aboutLink">
			<div class="card">
				<div class="img-holder">
					<picture>
						<source v-if="cardImg.mobile" :srcset="require(`@/assets/imgs/${cardImg.mobile}`)" media="(max-width: 575px)" />
						<img v-if="cardImg.desktop" :src="require(`@/assets/imgs/${cardImg.desktop}`)" :alt="title" />
					</picture>
				</div>
			<div class="card-header">
				<div class="d-flex align-items-center">
					<div class="icon-holder">
						<img :src="require(`@/assets/imgs/${img}`)" :alt="title" />
					</div>
					<div class="content-holder">
						<span class="category">{{ category }}</span>
						<h3 class="title">{{ title }}</h3>
					</div>
				</div>
			</div>
				<!-- <span class="arrow-holder">
					<span>
						<svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 1L19 19L1 37" stroke="CurrentColor" stroke-width="2" />
						</svg>
					</span>
				</span> -->
				<div class="text-holder">
					<p>Service which can help you to exchange your accommodation for a short period for free</p>
				</div>

				<!-- <div class="card-footer">
					<Button title="WEBSITE" class="btn-link" type="link" to="/contact">
						<template #icon>
							<svg class="d-none d-md-inline-block" width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor" />
							</svg>
							<svg class="d-md-none" width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="currentColor" />
							</svg>
						</template>
					</Button>
				</div> -->
			</div>
		</nuxt-link>
</template>

<script>
// import Button from "@/components/Button";

export default {
	name: "Card",
	// components: {
	// 	Button
	// },
	props: {
		category: {
			type: String,
			default: "category"
		},
		title: {
			type: String,
			default: "title"
		},
		description: {
			type: String,
			default: "description"
		},
		img: {
			type: String,
			default: "img-01.jpg"
		},
		aboutLink: {
			type: String,
			default: "/products"
		},
		cardImg: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.card {
	margin-bottom: 2.6rem;
	padding-left: 3rem;
	padding-right: 3rem;
	padding-bottom: 5rem;
	background: $white;
	border-radius: 1.2rem;
	transition: $transition;

	@include media-breakpoint-down(md) {
		padding-left: 2.4rem;
		padding-right: 2.4rem;
		padding-bottom: 2.3rem;
		margin-bottom: 2rem;
	}

	&:hover {
		color: $white;
		background: $cloud-burst2;

		.btn-link {
			color: $white;
		}
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2.7rem;
		transition: auto;

		.icon-holder {
			width: 6rem;
			margin-right: 1.6rem;
			border-radius: 0.8rem;
			box-shadow: 0 0.5rem 1.5rem rgba($black, 0.2);

			img {
				width: 100%;
				height: auto;
				border-radius: 0.8rem;
			}
		}

		.category {
			display: block;
			margin-bottom: 0.6rem;
			font-size: 2rem;
			line-height: 1;
			opacity: 0.4;

			@include media-breakpoint-down(md) {
				font-size: 1.8rem;
			}
		}

		.title {
			margin-bottom: 0;
			font-size: 2.6rem;

			@include media-breakpoint-down(md) {
				font-size: 2.4rem;
			}
		}

		// .arrow-holder {
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: center;
		// 	width: 6rem;
		// 	height: 6rem;
		// 	transition: auto;
		// 	color: rgba($black, 0.4);
		// 	background: $aqua-haze;
		// 	border-radius: 0.8rem;

		// 	@include media-breakpoint-down(md) {
		// 		width: 4rem;
		// 		height: 4rem;
		// 	}

		// 	span {
		// 		width: 1.1rem;

		// 		@include media-breakpoint-down(md) {
		// 			width: 0.7rem;
		// 		}
		// 	}

		// 	svg {
		// 		width: 100%;
		// 		height: auto;
		// 	}
		// }
	}

	.text-holder {
		position: relative;
		font-size: 1.8rem;
		line-height: 1.3;
		opacity: 0.4;

		@include media-breakpoint-down(md) {
			margin-bottom: 2.4rem;
			padding-bottom: 2.4rem;
			font-size: 1.6rem;
		}

		p {
			margin-bottom: 0;
		}

		// &::after {
		// 	content: "";
		// 	position: absolute;
		// 	bottom: 0;
		// 	left: 0;
		// 	width: 100%;
		// 	height: 0;
		// 	border-bottom: solid 0.1rem;
		// 	opacity: 0.4;
		// }
	}

	// .card-footer {
	// 	display: flex;
	// 	justify-content: space-between;

	// 	.btn-link {
	// 		padding: 0;
	// 	}
	// }

	.img-holder {
		margin-left: -3rem;
		margin-right: -3rem;
		margin-bottom: 2.4rem;

		@include media-breakpoint-down(md) {
			margin-left: -2.4rem;
			margin-right: -2.4rem;
		}

		img {
			width: 100%;
			height: auto;
			border-top-left-radius: 1.2rem;
			border-top-right-radius: 1.2rem;
		}
	}

	&.style1 {
		@include media-breakpoint-down(md) {
			padding-top: 2.6rem;
		}

		.btn-warning {
			display: none !important;
		}

		.title {
			@include media-breakpoint-down(sm) {
				width: 15rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}

		.img-holder {
			@include media-breakpoint-down(md) {
				display: none;
			}
		}
	}

	&.style2 {
		.card-header {
			@include media-breakpoint-up(md) {
				margin-bottom: 3.7rem;
			}
		}
	}
}
</style>
