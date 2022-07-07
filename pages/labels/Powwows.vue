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
						<Button title="Visit website" class="btn-danger d-none d-md-inline-flex" type="link" href="/">
							<template #icon>
								<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor" />
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
						<Button title="Visit website" class="btn-danger d-md-none" type="link" href="/">
							<template #icon>
								<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor" />
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
.label-page {
	background: $white;

	.intro-section {
		padding-top: 15rem;
		color: $white;
		background: $black;
		overflow: hidden;

		@include media-breakpoint-down(md) {
			padding-top: 11rem;
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
				max-width: 62rem;
			}
		}
	}
}
</style>
