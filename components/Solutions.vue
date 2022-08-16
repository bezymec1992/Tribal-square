<template>
	<div class="solution">
		<div class="container">
			<div class="solution__info">
				<h2 class="solution__title h2">
					{{ title }}
				</h2>
				<p class="solution__text">
					{{ text }}
				</p>
			</div>
		</div>
		<div class="solution__picture-wrap" v-if="img">
			<div class="solution__picture d-flex justify-content-center">
				<Button v-if="button" title="About us" class="btn-dark" type="nuxt-link" to="/about">
					<template #icon>
						<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="CurrentColor" />
						</svg>
					</template>
				</Button>
				<picture>
					<source :srcset="require('@/assets/imgs/' + imgMob)" media="(max-width: 767px)" width="824" height="400" />
					<img :src="require('@/assets/imgs/' + img)" :alt="title" width="1340" height="650" />
				</picture>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Solutions",
	props: {
		title: {
			type: String,
			default: ""
		},
		text: {
			type: String,
			default: ""
		},
		img: {
			type: String,
			default: ""
		},
		imgMob: {
			type: String,
			default: ""
		},
		button: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss" scoped>
.solution {
	padding-top: 10rem;
	padding-bottom: 10rem;
	overflow: hidden;

	@include media-breakpoint-down(lg) {
		padding-top: 7rem;
	}

	.solution__info {
		padding-bottom: 70px;
		@include media-breakpoint-down(lg) {
			padding-bottom: 6rem;
		}
		@include media-breakpoint-up(lg) {
			padding-left: 100px;
		}
		.solution__title {
			font-family: 'Oswald';
			text-transform: uppercase;
			max-width: 700px;
			padding-bottom: 40px;
			@include media-breakpoint-down(sm) {
				padding-bottom: 30px;
			}
		}
		.solution__text {
			width: 752px;
			max-width: 100%;
			font-size: 22px;
			line-height: 40px;
			@include media-breakpoint-down(sm) {
				width: 340px;
				font-size: 18px;
				line-height: 30px;
			}
		}
	}

	.solution__picture {
		position: relative;
		max-width: 1340px;
		margin: 0 auto;

		img {
			width: 100%;
			height: auto;
		}

		.btn {
			position: absolute;
			left: 12rem;
			top: 0;
			transform: translateY(-50%);

			@include media-breakpoint-down(lg) {
				left: 2rem;
			}
		}
	}

	&.style-2 {
		.solution__picture {
			@include media-breakpoint-down(md) {
				position: relative;
				height: 400px;
				
			}
		}
		.solution__picture img {
			@include media-breakpoint-down(md) {
				position: absolute;
				right: -70px;
				top: 0;
				
			}
		}
	}
	&.style-3 {
		background-color: white;
		padding-bottom: 0;
		.solution__picture-wrap {
			background: linear-gradient(white 52%, #eef3f5 50%);
		}
	}
}
</style>
