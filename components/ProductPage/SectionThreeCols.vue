<template>
	<div class="section-three-cols">
		<div class="container">
			<h2 class="h2 section-three-cols__title d-flex justify-content-center">{{ title }}</h2>
			<div class="section-three-cols__items d-flex justify-content-center">
				<div class="section-three-cols__item d-flex justify-content-center">
					<p class="section-three-cols__text">{{ paragraphs[0] }}</p>
				</div>
				<div class="section-three-cols__item d-flex justify-content-center">
					<p class="section-three-cols__text">{{ paragraphs[1] }}</p>
				</div>
				<div class="section-three-cols__item d-flex justify-content-center">
					<p class="section-three-cols__text">{{ paragraphs[2] }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SectionThreeCols",
	props: {
		title: {
			type: String,
			default: ""
		},
		paragraphs: {
			type: Array,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.section-three-cols {
	padding-top: 50px;
	padding-bottom: 140px;
	@include media-breakpoint-down(lg) {
		padding-top: 58px;
		padding-bottom: 80px;
	}
	.section-three-cols__title {
		margin-bottom: 50px;
	}
	.section-three-cols__items {
		@include media-breakpoint-down(lg) {
			flex-direction: column;
			align-items: center;

			.section-three-cols__item:last-child:after {
				position: absolute;
				bottom: 0;
				left: 25%;
				width: 180px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.4);
				content: "";
			}
		}
		.section-three-cols__item::after {
			position: absolute;
			top: 0;
			left: 25%;
			width: 50%;
			content: "";
			@include media-breakpoint-down(lg) {
				border-top: 1px solid rgba(0, 0, 0, 0.4);
			}
		}
		.section-three-cols__item {
			width: 346px;
			max-width: 100%;
			text-align: center;
			height: 180px;
			align-items: center;
			border-left: 1px solid rgba(0, 0, 0, 0.4);
			@include media-breakpoint-down(lg) {
				border-left: none;
				position: relative;
				height: 120px;
			}
			.section-three-cols__text {
				width: 260px;
				max-width: 100%;
				font-size: 26px;
				line-height: 40px;
				@include media-breakpoint-down(lg) {
					font-size: 22px;
				}
			}
		}
		.section-three-cols__item:last-child {
			border-right: 1px solid rgba(0, 0, 0, 0.4);
			@include media-breakpoint-down(lg) {
				border-right: none;
			}
		}
	}
}
</style>
