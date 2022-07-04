<template>
	<div class="labels-page">
		<Intro-section>
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<h1 class="h1">Easy to find and use what you need</h1>
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
		<div class="labels-section">
			<div class="container">
				<h2 class="h2">Our solutions for all your needs</h2>
			</div>
			<SliderLabels />
		</div>
		<SolutionSection />
		<ContactSection />
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection";
import SolutionSection from "@/components/SolutionSection";
import ContactSection from "@/components/ContactSection";

export default {
	name: "Labels",
	components: {
		IntroSection,
		ContactSection,
		SolutionSection
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
		padding-top: 8rem;

		@include media-breakpoint-down(md) {
			padding-top: 7.7rem;
			padding-bottom: 4rem;
		}

		.h2 {
			margin-bottom: 4rem;
			text-align: center;
		}
	}
}
</style>
