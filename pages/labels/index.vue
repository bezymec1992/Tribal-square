<template>
	<div class="labels-page">
		<Intro-section>
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<div class="content-holder">
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
					<div class="col-lg-4">
						<div class="img-holder">
							<img src="@/assets/imgs/img-036.png" alt="Easy to find and use what you need" />
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
	},
	head() {
		return {
			bodyAttrs: {
				class: "header-white"
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.labels-page {
	background: $white;

	.intro-section {
		color: $white;
		background: url("@/assets/imgs/img-035.jpg");
		background-position: 100% 100%;
		background-size: cover;
		background-repeat: no-repeat;
		overflow: hidden;

		@include media-breakpoint-up(lg) {
			padding-top: 39rem;
		}

		.container {
			position: relative;
			z-index: 1;
		}

		.content-holder {
			position: relative;
			z-index: 2;
		}

		.img-holder {
			@include media-breakpoint-up(lg) {
				position: absolute;
				right: -5rem;
				bottom: -17.8rem;
				max-width: 87.6rem;
				width: 100%;
			}

			@include media-breakpoint-down(lg) {
				margin: -5rem -3rem -6rem -7rem;
			}

			img {
				width: 100%;
				height: auto;
			}
		}
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
