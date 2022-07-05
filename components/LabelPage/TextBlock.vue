<template>
	<div class="text-block">
		<h2 class="h2">{{ title }}</h2>
		<div class="text-holder">
			<p v-for="(p, index) in description" :key="index">{{ p }}</p>
		</div>
		<Button v-if="btn.type" :title="btn.title" class="btn-danger" :type="btn.type" :to="btn.url">
			<template #icon>
				<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
					<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
				</svg>
			</template>
		</Button>
	</div>
</template>

<script>
import Button from "@/components/Button";

export default {
	name: "TextBlock",
	components: {
		Button
	},
	props: {
		title: {
			type: String,
			default: "title"
		},
		description: {
			type: Array,
			default: () => []
		},
		btn: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.text-block {
	display: flex;
	flex-direction: column;
	align-items: center;

	.h2 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.text-holder {
		margin-bottom: 4rem;
		font-size: 2.2rem;
		line-height: 1.8;
		text-align: center;

		@include media-breakpoint-down(md) {
			margin-bottom: 3rem;
			font-size: 1.8rem;
			line-height: 1.6;
		}
	}
}
</style>
