<template>
	<div class="txt-block">
		<h2 class="h2">Want to start with us and make your business grow?</h2>
		<div class="text-holder">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.</p>
		</div>
		<div class="buttons">
			<Button title="Find a partner" class="btn-dark" type="button" @click="firstBtnClick" />
			<Button title="Partner with us" class="btn-outline-dark" type="button" @click="secondBtnClick" />
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button";

export default {
	name: "TxtBlock",
	components: {
		Button
	},
	methods: {
		firstBtnClick() {
			this.$emit("clickFirstBtn");
		},
		secondBtnClick() {
			this.$emit("clickSecondBtn");
		}
	}
};
</script>

<style lang="scss" scoped>
.txt-block {
	.h2 {
		margin-bottom: 4rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2.2rem;
		}
	}

	.text-holder {
		margin-bottom: 6rem;
		font-size: 2.2rem;
		line-height: 1.8;

		@include media-breakpoint-down(md) {
			margin-bottom: 4rem;
			font-size: 1.8rem;
			line-height: 1.6;
		}
	}

	.btn {
		@include media-breakpoint-down(sm) {
			display: flex;
			max-width: 100%;
		}
	}

	.buttons {
		@include media-breakpoint-up(sm) {
			display: flex;
		}

		@include media-breakpoint-down(md) {
			padding-top: 4rem;
		}

		.btn {
			@include media-breakpoint-down(sm) {
				width: 100%;
			}

			&:first-child {
				@include media-breakpoint-down(sm) {
					margin-bottom: 2.4rem;
				}

				@include media-breakpoint-up(sm) {
					margin-right: 2.6rem;
				}
			}
		}
	}

	&.style-center {
		.h2 {
			@include media-breakpoint-up(md) {
				text-align: center;
			}
		}

		.text-holder {
			@include media-breakpoint-up(md) {
				text-align: center;
			}
		}

		.buttons {
			@include media-breakpoint-up(md) {
				justify-content: center;
			}
		}
	}
}
</style>
