<template>
	<div class="txt-block">
		<h2 class="h2">Want to start with us and make your business grow?</h2>
		<div class="text-holder">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.</p>
		</div>

		<div class="row">
			<div class="col-12 col-sm-auto">
				<Button title="FIND A PATNER" class="btn-primary" type="button" />
			</div>
			<div class="col-12 col-sm-auto">
				<Button title="FIND A PATNER" class="btn-outline-primary" type="button" />
			</div>
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button";

export default {
	name: "TxtBlock",
	components: {
		Button
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
			width: 100%;
		}
	}

	div[class^="col-"] {
		&:first-child {
			.btn {
				@include media-breakpoint-down(md) {
					margin-bottom: 2.4rem;
				}
			}
		}
	}
}
</style>
