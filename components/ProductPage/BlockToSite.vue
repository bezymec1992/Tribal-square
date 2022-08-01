<template>
	<div class="block-to-site">
		<div class="container">
			<div class="block-to-site__picture">
				<div class="content-holder">
					<h3 class="h2 block-to-site__picture-title">Transform your customer experience</h3>
					<Button title="Visit website" class="btn-light" type="link" :href="btn.href">
						<template #icon>
							<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
								<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
							</svg>
						</template>
					</Button>
				</div>
				<div class="img-holder">
					<picture>
						<source :srcset="require(`@/assets/imgs/${img.tablet}`)" media="(max-width: 767px)" />
						<img :src="require(`@/assets/imgs/${img.desktop}`)" :alt="img.alt" />
					</picture>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BlockToSite",
	props: {
		title: {
			type: String,
			default: "Transform your customer experience"
		},
		btn: {
			type: Object,
			default: () => ({})
		},
		img: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.block-to-site {
	overflow: hidden;
	padding-bottom: 120px;

	@include media-breakpoint-down(lg) {
		padding-bottom: 7.2rem;
	}

	.container {
		max-width: 134rem;
		padding-left: 0;
		padding-right: 0;
	}

	.block-to-site__picture {
		position: relative;
		color: $white;
	}

	.block-to-site__picture-title {
		max-width: 60rem;
		margin-bottom: 6rem;
		font-size: 5.4rem;
		text-align: center;
		@include media-breakpoint-down(lg) {
			margin-bottom: 8rem;
			font-size: 40px;
			max-width: 335px;
		}
	}

	.content-holder {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 72rem;

		@include media-breakpoint-down(lg) {
			min-height: 60rem;
		}
	}

	.img-holder {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>
