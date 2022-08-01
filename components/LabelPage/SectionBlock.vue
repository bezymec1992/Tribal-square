<template>
	<div class="section-block">
		<div class="container">
			<div class="row align-items-md-center">
				<div class="col-lg-6">
					<h2 class="h2 d-lg-none"><slot name="title" /></h2>
					<div class="text-holder d-lg-none first">
						<p>{{ text[0] }}</p>
					</div>
					<div class="video-holder">
						<!-- <picture>
							<source v-if="img.mobile" :srcset="require(`@/assets/imgs/${img.mobile}`)" media="(max-width: 575px)" />
							<img :src="require(`@/assets/imgs/${img.desktop}`)" :alt="img.alt" />
						</picture> -->
						<video v-if="video" muted autoplay loop>
							<source :src="require(`@/assets/videos/${video}`)" type="video/mp4" />
						</video>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="content-holder">
						<h2 class="h2 d-none d-lg-block"><slot name="title" /></h2>
						<div class="text-holder d-none d-lg-block">
							<p v-for="(p, index) in text" :key="index">
								{{ p }}
							</p>
						</div>

						<div class="text-holder d-lg-none">
							<p>{{ text[1] }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SectionBlock",
	props: {
		// img: {
		// 	type: Object,
		// 	default: () => ({})
		// },
		video: {
			type: String,
			default: ""
		},
		text: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss" scoped>
.section-block {
	padding-bottom: 16rem;

	@include media-breakpoint-down(md) {
		padding-bottom: 13rem;
	}

	.container {
		max-width: 129.8rem;
	}

	.content-holder {
		@include media-breakpoint-up(lg) {
			padding-left: 7.5rem;
		}
	}

	.h2 {
		margin-bottom: 4rem;
		line-height: 1;

		@include media-breakpoint-down(md) {
			margin-bottom: 1.5rem;
		}
	}

	.video-holder {
		position: relative;
		min-height: 58rem;

		@include media-breakpoint-down(sm) {
			min-height: 40rem;
		}

		@include media-breakpoint-up(xxl) {
			margin-left: -3.5rem;
		}

		@include media-breakpoint-up(lg) {
			margin-right: -2.2rem;
		}

		@include media-breakpoint-down(lg) {
			margin-bottom: 3rem;
		}

		video {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 1rem;
		}
	}

	.text-holder {
		font-size: 2.2rem;
		line-height: 1.8;

		@include media-breakpoint-up(lg) {
			max-width: 50rem;
		}

		@include media-breakpoint-down(md) {
			font-size: 1.8rem;
			line-height: 1.6;
		}

		p {
			margin-bottom: 0;

			&:not(:last-child) {
				@include media-breakpoint-up(lg) {
					margin-bottom: 4rem;
				}
			}
		}

		&.first {
			margin-bottom: 3rem;
		}
	}
}
</style>
