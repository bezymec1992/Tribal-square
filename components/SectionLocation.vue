<template>
	<div class="location d-flex">
		<div class="container">
			<div class="laction__wrapper d-flex">
				<div class="location__info">
					<span class="location__span"> Location </span>
					<h3 class="h3 location__title">Where do we use this product</h3>
					<p class="location__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.</p>
				</div>
				<div class="location__picture">
					<picture>
						<source srcset="@/assets/imgs/img-084.png" media="(max-width: 876px)" width="476" height="469" />
						<img src="@/assets/imgs/img-083.png" alt="partners-logo" width="609" height="600" />
					</picture>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.location {
	overflow: hidden;
	color: $black;
	background: $porcelain;
	max-width: 1240px;
	min-height: 600px;
	margin: 0 auto;
	position: relative;
	margin-bottom: 170px;

	@include media-breakpoint-down(md) {
		margin-bottom: 30px;
	}

	.location__info {
		position: relative;
		z-index: 2;
	}

	@include media-breakpoint-down(lg) {
		min-height: 832px;
		.laction__wrapper {
			flex-direction: column;
			justify-content: center;

			.location__info {
				margin-top: 60px;
				margin-left: 0;
				width: 335px;
				.location__title {
					padding-bottom: 20px;
				}
			}
		}
	}
	.location__info {
		width: 464px;
		max-width: 100%;
		margin-top: 150px;
		margin-left: 50px;
		.location__span {
			font-size: 22px;
			line-height: 24px;
			text-transform: uppercase;
		}
		.location__text {
			font-size: 18px;
			line-height: 32px;
		}
		.location__title {
			margin-bottom: 20px;
			padding-top: 20px;
			font-size: 50px;
			@include media-breakpoint-down(md) {
				font-size: 24px;
			}
		}
	}
	.location__picture {
		@include media-breakpoint-up(lg) {
			position: absolute;
			top: 0;
			right: 0;
		}

		@include media-breakpoint-down(lg) {
			align-self: flex-end;
		}

		@include media-breakpoint-down(sm) {
			margin-left: -2rem;
			margin-right: -2rem;
		}

		img {
			@include media-breakpoint-down(sm) {
				width: 100%;
				height: auto;
			}
		}
	}
}
</style>
