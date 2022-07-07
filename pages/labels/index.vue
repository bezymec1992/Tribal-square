<template>
	<div class="labels-page">
		<Intro-section>
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<h1 class="h1">
							Easy to find and <br />
							use what you need
						</h1>
						<div class="text-holder">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean <br class="d-none d-md-block" />
								egestas in est ut aliquet. Pellentesque ac blandit leo
							</p>
						</div>
					</div>
				</div>
			</div>
		</Intro-section>
		<Solutions class="pb-0 style-2" title="We provide solutions that help your business grow" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege." />
		<div class="labels-section">
			<div class="container">
				<SliderLabels />
			</div>
		</div>
		<SolutionSection />
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection";
import SolutionSection from "@/components/SolutionSection";
import Solutions from "@/components/Solutions";

export default {
	name: "Labels",
	components: {
		IntroSection,
		SolutionSection,
		Solutions
	}
};
</script>

<style lang="scss" scoped>
.labels-page {
	background: $white;

	.intro-section {
		background: $aqua-haze;
	}

	.labels-section {
		padding-top: 4rem;
		padding-bottom: 8rem;

		@include media-breakpoint-down(md) {
			padding-top: 4rem;
			padding-bottom: 4rem;
		}
	}
}
</style>
