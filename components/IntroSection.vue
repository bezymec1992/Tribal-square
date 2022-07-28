<template>
	<div class="intro-section">
		<slot />
	</div>
</template>

<script>
export default {
	name: "IntroSection"
};
</script>

<style lang="scss" scoped>
.intro-section {
	padding-top: 30rem;
	padding-bottom: 17.8rem;

	@include media-breakpoint-down(md) {
		padding-top: 13rem;
		padding-bottom: 6.2rem;
	}

	.h1 {
		margin-bottom: 4rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2rem;
		}
	}

	.text-holder {
		margin-bottom: 4rem;
		font-size: 2.2rem;
		line-height: 1.8;

		@include media-breakpoint-down(md) {
			font-size: 1.8rem;
		}
	}

	&.label-page {
		padding-top: 13rem;

		@include media-breakpoint-down(md) {
			padding-top: 10rem;
		}

		.breadcrumbs {
			@include media-breakpoint-down(lg) {
				margin-bottom: 5.6rem;
			}
		}

		.text-holder {
			@include media-breakpoint-up(md) {
				max-width: 52rem;
			}

			@include media-breakpoint-down(md) {
				margin-bottom: 2rem;
			}
		}

		.img-holder {
			@include media-breakpoint-up(lg) {
				margin-left: -1.5rem;
			}

			@include media-breakpoint-down(lg) {
				margin-left: -2rem;
				margin-right: -2rem;
			}

			img {
				width: 100%;
				height: auto;

				@include media-breakpoint-up(lg) {
					border-radius: 1rem;
				}
			}
		}

		.btn {
			@include media-breakpoint-down(lg) {
				transform: translateY(50%);
				background: linear-gradient($black, $black) padding-box, linear-gradient(45deg, rgba($white, 0.1), rgba($white, 1)) border-box;
				border: 0.1rem solid transparent;
			}
		}
	}
}
</style>
