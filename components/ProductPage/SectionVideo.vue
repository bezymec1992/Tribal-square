<template>
	<div class="section-video">
		<div class="container">
			<div class="video-holder">
				<video v-if="video" muted autoplay loop>
					<source :src="require(`@/assets/videos/${video}`)" type="video/mp4" />
				</video>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SectionVideo",
	props: {
		video: {
			type: String,
			default: ""
		}
	}
};
</script>

<style lang="scss" scoped>
.section-video {
	padding-bottom: 17.5rem;

	@include media-breakpoint-down(md) {
		padding-bottom: 3rem;
	}

	.container {
		@include media-breakpoint-down(md) {
			padding-left: 0;
			padding-right: 0;
		}
	}

	// .video-holder {
	// 	@include media-breakpoint-down(md) {
	// 		position: relative;
	// 		min-height: 35rem;
			
			
	// 	}
	// }

	video {
		width: 100%;
		
		height: auto;

		// @include media-breakpoint-down(md) {
		// 	position: absolute;
		// 	top: 0;
		// 	left: 0;
		// 	height: auto;
		// 	object-fit: cover;
		// }
	}
}
</style>
