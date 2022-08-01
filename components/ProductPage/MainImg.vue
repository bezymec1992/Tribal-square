<template>
	<div class="main-img">
		<div class="container">
			<picture>
				<source v-if="img.mobile" :srcset="require(`@/assets/imgs/${img.mobile}`)" media="(max-width: 575px)" />
				<img :src="require(`@/assets/imgs/${img.desktop}`)" :alt="img.alt" />
			</picture>
		</div>
	</div>
</template>

<script>
export default {
	name: "MainImg",
	props: {
		img: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style lang="scss" scoped>
.main-img {
	padding-bottom: 8rem;
	background: linear-gradient($aqua-haze 50%, $white 50%);

	.container {
		max-width: 130rem;
		padding-left: 0;
		padding-right: 0;
	}

	img {
		width: 100%;
		height: auto;
	}
}
</style>
