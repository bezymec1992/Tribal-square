<template>
	<div class="section-two-text-cols">
		<div class="container">
			<div class="row align-items-lg-end">
				<div class="col-lg-6">
					<div class="text-block">
						<h3>{{ firstTitle }}</h3>
						<div class="text-holder">
							<p v-for="(p, index) in firstText" :key="index">{{ p }}</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="text-block">
						<h3>{{ secondTitle }}</h3>
						<div class="text-holder">
							<p v-for="(p, index) in secondText" :key="index">{{ p }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SectionTwoTextCols",
	props: {
		firstTitle: {
			type: String,
			default: ""
		},
		firstText: {
			type: Array,
			default: () => []
		},
		secondTitle: {
			type: String,
			default: ""
		},
		secondText: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss" scoped>
.section-two-text-cols {
	.container {
		max-width: 122rem;
	}

	.row {
		@include media-breakpoint-up(xl) {
			@include grid-gutter(14.4rem);
		}

		div[class^="col-"] {
			&:not(:last-child) {
				.text-block {
					@include media-breakpoint-down(lg) {
						margin-bottom: 4rem;
					}
				}
			}
		}
	}

	h3 {
		margin-bottom: 3rem;
		font-size: 3.4rem;
		line-height: 1.1;

		@include media-breakpoint-down(md) {
			margin-bottom: 1rem;
			font-size: 2.8rem;
		}
	}

	.text-holder {
		font-size: 1.8rem;
		line-height: 1.77;

		@include media-breakpoint-down(md) {
			font-size: 1.6rem;
			line-height: 1.5;
		}
	}
}
</style>
