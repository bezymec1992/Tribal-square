<template>
	<div class="second-img" :style="sectionStyle">
		<picture>
			<source v-if="img.mobile" :srcset="require(`@/assets/imgs/${img.mobile}`)" media="(max-width: 575px)" />
			<img :src="require(`@/assets/imgs/${img.desktop}`)" :alt="img.alt" />
		</picture>
	</div>
</template>

<script>
export default {
	name: "SecondImg",
	props: {
		img: {
			type: Object,
			default: () => ({})
		},
		sectionStyle: {
			type: String,
			default: ""
		}
	},
	computed: {
		style() {
			return this.styles;
		}
	}
};
</script>

<style lang="scss" scoped>
.second-img {
	margin: auto;

	img {
		width: 100%;
		height: auto;
	}
}
</style>
