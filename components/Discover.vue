<template>
	<div>
		<div class="more__item d-flex align-items-center">
			<img class="more__main-icon" :src="require('@/assets/imgs/' + img)" :alt="title" />
			<div class="more__text-wrap">
				<span class="more__span">
					{{ title }}
				</span>
				<p class="more__text">
					{{ text }}
				</p>
			</div>

			<nuxt-link class="arrow-holder" :to="route">
				<span>
					<svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L19 19L1 37" stroke="CurrentColor" stroke-width="2" />
					</svg>
				</span>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Discover",
	props: {
		title: String,
		text: String,
		img: String,
		route: {
			type: String,
			default: "/"
		}
	}
};
</script>

<style lang="scss" scoped>
.more__item {
	padding: 30px 0;
	width: 550px;
	max-width: 100%;
	transition: $transition;
	margin: 0 auto;
	position: relative;
	border-radius: 20px;

	@include media-breakpoint-up(md) {
		padding-left: 25px;
		padding-right: 25px;
	}

	@include media-breakpoint-down(md) {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		height: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		width: 100%;
		@include media-breakpoint-up(md) {
			transform: translateX(-50%);
			left: 50%;
			width: calc(100% - 50px);
		}
	}

	&:hover {
		@include media-breakpoint-up(md) {
			background: $aqua-haze;
		}

		.arrow-holder {
			@include media-breakpoint-up(md) {
				background: $white;
			}
		}
	}

	.more__text {
		font-weight: 500;
		font-size: 30px;
		line-height: 30px;
		padding-top: 4px;
		@include media-breakpoint-down(md) {
			font-size: 22px;
		}
	}
	.more__span {
		opacity: 0.4;
		font-size: 20px;
		line-height: 24px;
		@include media-breakpoint-down(md) {
			font-size: 16px;
		}
	}
	.more__arrow {
		margin-left: auto;
		@include media-breakpoint-down(md) {
			width: 15px;
			height: 30px;
		}
	}
	.more__text-wrap {
		margin-left: 24px;
	}
	.more__main-icon {
		border-radius: 1rem;
		box-shadow: 0 0.667177rem 2rem rgba($black, 0.2);

		@include media-breakpoint-down(md) {
			width: 60px;
			height: 60px;
		}
	}

	.arrow-holder {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 6rem;
		height: 6rem;
		margin-left: auto;
		transition: $transition;
		color: rgba($black, 0.4);
		background: $aqua-haze;
		border-radius: 0.8rem;

		@include media-breakpoint-down(md) {
			width: 4rem;
			height: 4rem;
		}

		span {
			width: 1.1rem;

			@include media-breakpoint-down(md) {
				width: 0.7rem;
			}
		}

		svg {
			width: 100%;
			height: auto;
		}
	}
}
</style>
