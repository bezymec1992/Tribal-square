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
		<div class="solution__picture-wrap">
			<div class="solution__picture d-flex justify-content-center">
				<Button v-if="button" title="OUR LABLES" class="btn-primary" type="button">
					<template #icon>
						<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
							<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
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
			padding-bottom: 40px;
		}
		@include media-breakpoint-up(lg) {
			padding-left: 100px;
		}
		.solution__title {
			max-width: 680px;
			padding-bottom: 40px;
			@include media-breakpoint-down(sm) {
				padding-bottom: 30px;
				width: 345px;
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
		width: 1340px;
		max-width: 100%;
		margin: 0 auto;

		.btn {
			position: absolute;
			left: 12rem;
			top: 0;
			transform: translateY(-50%);
			pointer-events: none;

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
