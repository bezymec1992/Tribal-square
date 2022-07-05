<template>
	<div class="label-page">
		<Intro-section>
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs />
					</div>
				</div>
				<div class="row align-items-md-center">
					<div class="col-md-7 col-xl-6">
						<h1 class="h1">Powwows</h1>
						<div class="text-holder">
							<p class="product__main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac</p>
						</div>
						<Button title="VISIT WEBSITE" class="btn-danger d-none d-md-inline-flex" type="link" href="/">
							<template #icon>
								<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
									<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
								</svg>
							</template>
						</Button>
					</div>
					<div class="col-lg-6">
						<div class="img-holder">
							<picture>
								<source srcset="@/assets/imgs/img-010.png" media="(min-width: 768px)" type="image/jpg" />
								<img src="@/assets/imgs/img-011.png" alt="Powwows" />
							</picture>
						</div>
						<Button title="VISIT WEBSITE" class="btn-danger d-md-none" type="link" href="/">
							<template #icon>
								<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
									<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
								</svg>
							</template>
						</Button>
					</div>
				</div>
			</div>
		</Intro-section>
		<div class="about-the-label__section">
			<SectionTwoTextCols first-title="About the label" :first-text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ']" :second-text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ']" />
		</div>
		<HowItWork />
		<div class="text-block-section style1">
			<div class="container">
				<TextBlock title="What are we stand for" :description="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.']" />
			</div>
		</div>
		<ImgSection />
		<div class="text-block-section style2">
			<div class="container">
				<TextBlock title="Final block with an info" :description="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.']" :btn="{ title: 'VISIT WEBSITE', type: 'nuxt-link', url: '/' }" />
			</div>
		</div>
		<NextLabel />
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection";
import Button from "@/components/Button";
import NextLabel from "@/components/NextLabel";
import TextBlock from "@/components/LabelPage/TextBlock";
import ImgSection from "@/components/LabelPage/ImgSection";
import HowItWork from "@/components/LabelPage/HowItWork";

export default {
	name: "Powwows",
	components: {
		IntroSection,
		Button,
		NextLabel,
		TextBlock,
		ImgSection,
		HowItWork
	}
};
</script>
<style lang="scss" scoped>
.label-page {
	background: $white;

	.intro-section {
		padding-top: 6rem;
		color: $white;
		background: $black;
		overflow: hidden;

		@include media-breakpoint-down(md) {
			padding-top: 3rem;
		}

		.breadcrumbs {
			margin-bottom: 17.6rem;

			@include media-breakpoint-down(md) {
				margin-bottom: 5.6rem;
			}
		}

		.container {
			position: relative;
		}

		.img-holder {
			@include media-breakpoint-up(md) {
				position: absolute;
				right: -20%;
				width: 69%;
				bottom: -58%;
			}

			@include media-breakpoint-down(md) {
				margin-top: -8rem;
				margin-left: -2rem;
				margin-right: -10rem;
				margin-bottom: -8rem;
			}

			img {
				width: 100%;
				height: auto;
			}
		}

		.btn {
			@include media-breakpoint-down(md) {
				box-shadow: 0.2rem 0.4rem 2rem rgba($black, 0.6);
			}
		}
	}

	.about-the-label {
		&__section {
			padding: 8rem 0;

			@include media-breakpoint-up(md) {
				padding: 8rem 3rem;
			}
			@include media-breakpoint-up(lg) {
				padding: 8rem 7rem;
			}
			@include media-breakpoint-up(xl) {
				padding: 12rem 0;
			}
		}
	}

	.text-block-section {
		&.style1 {
			padding-top: 17rem;
			padding-bottom: 7rem;

			@include media-breakpoint-down(md) {
				padding-top: 10rem;
				padding-bottom: 4rem;
			}

			.container {
				max-width: 75rem;
			}
		}

		&.style2 {
			padding-top: 14rem;
			padding-bottom: 14rem;

			@include media-breakpoint-down(md) {
				padding-top: 8rem;
				padding-bottom: 10rem;
			}

			.container {
				max-width: 55rem;
			}
		}
	}
}
</style>
