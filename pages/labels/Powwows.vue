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
			<div class="container">
				<h3 class="about-the-label__title h3 text-left">About the label</h3>
				<div class="row">
					<div class="col-12 col-md-6">
						<div class="about-the-label__text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit.</p>
						</div>
					</div>
					<div class="col-12 col-md-6">
						<div class="about-the-label__text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- How does it work section -->
		<div class="how-does-it-work__section">
			<div class="container">
				<h3 class="how-does-it-work__title text-center">How does it work</h3>
				<div class="row">
					<!-- How does it work section mobile-->

					<div class="col-12 col-md-6 d-md-none d-flex justify-content-center">
						<img class="how-does-it-work__desktop-img" src="@/assets/images/how-does-it-work-006.png" alt="image description" />
					</div>
					<div class="col-12 col-md-6 d-md-none text-center">
						<ul class="how-does-it-work__list list-unstyled">
							<li class="how-does-it-work__item">
								Create events for desirous
								<div class="hr-dashed"></div>
							</li>
							<li class="how-does-it-work__item">
								Looking for partner
								<div class="hr-dashed"></div>
							</li>
							<li class="how-does-it-work__item">
								Invest in ideas and companies
								<div class="hr-dashed"></div>
							</li>
							<li class="how-does-it-work__item">Create inner meeting</li>
						</ul>
					</div>

					<!-- How does it work section Desktop-->

					<div class="col-12 d-flex how-does-it-work__wrap">
						<div class="col-6 d-none d-md-flex how-does-it-work__desktop-left">
							<ul class="how-does-it-work__desktop-list list-unstyled">
								<li class="how-does-it-work__item">
									<p class="how-does-it-work__item-text">Create events for desirous</p>
									<div class="hr-dashed-img d-flex">
										<img src="@/assets/images/how-does-it-work-ellipse-007.svg" alt="ellipse" />
										<img src="@/assets/images/how-does-it-work-line-left-009.svg" alt="line" />
									</div>
								</li>
								<li class="how-does-it-work__item">
									<p class="how-does-it-work__item-text">Looking for partner</p>
									<div class="hr-dashed-img d-flex">
										<img src="@/assets/images/how-does-it-work-ellipse-007.svg" alt="ellipse" />
										<img src="@/assets/images/how-does-it-work-line-left-009.svg" alt="line" />
									</div>
								</li>
							</ul>
						</div>

						<div class="col-6 d-none d-md-flex how-does-it-work__desktop-right">
							<ul class="how-does-it-work__desktop-list-right list-unstyled">
								<li class="how-does-it-work__item how-does-it-work__item-right">
									<p class="how-does-it-work__item-text-right">Invest in ideas and companies</p>

									<div class="hr-dashed-img d-flex">
										<img src="@/assets/images/how-does-it-work-line-right-008.svg" alt="line" />
										<img src="@/assets/images/how-does-it-work-ellipse-007.svg" alt="ellipse" />
									</div>
								</li>
								<li class="how-does-it-work__item how-does-it-work__item-right">
									<p class="how-does-it-work__item-text-right">Create inner meetings</p>
									<div class="hr-dashed-img d-flex">
										<img src="@/assets/images/how-does-it-work-line-right-008.svg" alt="line" />
										<img src="@/assets/images/how-does-it-work-ellipse-007.svg" alt="ellipse" />
									</div>
								</li>
							</ul>
						</div>
						<div class="col-12 d-none d-md-flex how-does-it-work__visual justify-content-center">
							<img class="how-does-it-work__img" src="@/assets/images/how-does-it-work-006.png" alt="image description" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- What are we stand for section -->
		<div class="what-are-we-stand-for__section">
			<div class="container">
				<div class="row what-are-we-stand-for__wrapper text-center">
					<div class="col-12">
						<div class="what-are-we-stand-for__body">
							<h3 class="what-are-we-stand-for__title">What are we stand for</h3>
							<p class="what-are-we-stand-for__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit.</p>
						</div>
					</div>
					<div class="col-12">
						<div class="what-are-we-stand-for__img-holder">
							<img class="what-are-we-stand-for__img" src="@/assets/images/what-are-we-stand-for-0010.jpg" alt="image description" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Final block section-->

		<div class="final-block__section">
			<div class="container">
				<div class="final-block__body text-center">
					<h3 class="final-block__title">Final block with an info</h3>
					<p class="final-block__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.</p>
					<Button title="VISIT WEBSITE" class="btn-danger" type="nuxt-link" to="/contact">
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

		<!-- Tribal hands section-->

		<div class="tribal-hands__section">
			<div class="container">
				<div class="row flex-md-row-reverse tribal-hands__wrapper g-0">
					<div class="col-12 col-md-6">
						<div class="tribal-hands__body">
							<p class="tribal-hands__label text-uppercase">Next label</p>
							<h3 class="tribal-hands__title">TribalHands</h3>
							<p class="tribal-hands__text">This is a place of a short description of the website and about what we do there.</p>
							<div class="btn-holder">
								<Button title="GO TO NEXT" class="btn-warning" type="nuxt-link" to="/contact">
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
					<div class="col-12 col-md-6 px-0">
						<div class="tribal-hands__img-holder">
							<img class="tribal-hands__img" src="@/assets/images/tribal-hands-0013.svg" alt="image description" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection";
import Button from "@/components/Button";

export default {
	components: {
		IntroSection,
		Button
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
				padding: 12rem 13rem;
			}

			.row {
				@include media-breakpoint-up(xl) {
					@include grid-gutter(7rem);
				}

				@include media-breakpoint-up(xxl) {
					@include grid-gutter(14.4rem);
				}
			}

			.container {
				max-width: 122rem;
			}
		}

		&__title {
			margin-bottom: 1rem;
			font-size: 2.8rem;
			line-height: 1.42;
			@include media-breakpoint-up(md) {
				margin-bottom: 3rem;
				font-size: 3.4rem;
				line-height: 1.18;
			}
		}
		&__text {
			margin-bottom: 2rem;

			@include media-breakpoint-up(md) {
				margin-bottom: 0;
			}

			p {
				font-size: 1.6rem;
				line-height: 1.5;
				@include media-breakpoint-up(md) {
					font-size: 1.8rem;
					line-height: 1.78;
				}
			}
		}
	}

	// How does it work section

	.how-does-it-work {
		&__section {
			background-color: $aqua-haze;
			padding: 6rem 0 4rem;

			@include media-breakpoint-up(md) {
				padding: 4rem 0 1rem;
			}
			@include media-breakpoint-up(lg) {
				padding: 7rem 3.5rem 1rem;
			}
			@include media-breakpoint-up(xl) {
				max-width: 130rem;
				margin: auto;
				border-radius: 1.2rem;
				padding: 7rem 7.3rem 0;
			}
		}

		&__wrap {
			position: relative;
			@include media-breakpoint-up(md) {
				padding: 0 4rem;
			}
		}
		&__title {
			margin-bottom: 2.4rem;
			font-size: 2.4rem;
			line-height: 1.24;
			@include media-breakpoint-up(md) {
				margin-bottom: 7rem;
				font-size: 4rem;
				line-height: 1;
			}
		}
		&__desktop-right {
			flex-direction: row-reverse;
		}
		&__visual {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			@include media-breakpoint-up(xxl) {
				top: -12%;
				width: 113%;
			}
		}
		&__img {
			max-width: 100%;
			height: auto;
			@include media-breakpoint-up(md) {
				width: 50%;
			}
		}
		&__desktop-img {
			width: 100%;
		}
		&__item {
			padding-bottom: 1.6rem;
			@include media-breakpoint-up(md) {
				margin-bottom: 8.8rem;
			}

			@include media-breakpoint-up(md) {
				padding: 0 1rem;
				position: relative;
			}
		}
		&__item-right {
			text-align: right;
			justify-content: right;
			display: flex;
			flex-direction: column;
			align-items: self-end;
			margin-bottom: 8.8rem;
		}
		&__item-text {
			font-size: 1.8rem;
			line-height: 2.22;

			@include media-breakpoint-up(md) {
				max-width: 53%;
			}
			@include media-breakpoint-up(lg) {
				font-size: 2.6rem;
				line-height: 1;
			}
		}
		&__item-text-right {
			font-size: 1.8rem;
			line-height: 2.22;

			@include media-breakpoint-up(md) {
				max-width: 52%;
			}
			@include media-breakpoint-up(lg) {
				max-width: 58%;
				font-size: 2.6rem;
				line-height: 1;
			}
		}
	}
	.hr-dashed {
		height: 1px;
		background-size: 1.6rem 0.1rem;
		background-repeat: repeat-x;
		background-image: linear-gradient(to right, black 50%, rgba(255, 255, 255, 0) 0%);
		margin-top: 2rem;
		opacity: 20%;
		margin-left: 4rem;
		margin-right: 4rem;
	}
	.hr-dashed-img {
		display: flex;
		flex-direction: row;
	}

	// What we are stand for section

	.what-are-we-stand-for {
		&__body {
			max-width: 75.2rem;
			margin: auto;
			padding-top: 8rem;
			@include media-breakpoint-up(lg) {
				padding-top: 22.4rem;
			}
		}

		&__title {
			margin-bottom: 2rem;
			font-size: 2.4rem;
			line-height: 1.24;
			@include media-breakpoint-up(md) {
				font-size: 4rem;
				line-height: 1.5;
			}
		}
		&__text {
			margin-bottom: 4rem;
			font-size: 1.8rem;
			line-height: 1.66;
			@include media-breakpoint-up(md) {
				margin-bottom: 8rem;
				font-size: 2.2rem;
				line-height: 1.81;
			}
		}
		&__img-holder {
			position: relative;
			padding-top: 98.7%;
			@include media-breakpoint-up(sm) {
				padding-top: 70%;
			}
			@include media-breakpoint-up(md) {
				padding-top: 80%;
			}
			@include media-breakpoint-up(lg) {
				padding-top: 58%;
			}

			@include media-breakpoint-down(lg) {
				margin-left: -2rem;
				margin-right: -2rem;
			}

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}

	// Final block with an info section

	.final-block {
		&__body {
			max-width: 55rem;
			margin: auto;
			padding: 10rem 0 14rem;
			@include media-breakpoint-up(xxl) {
				padding: 14rem 0;
			}

			@include media-breakpoint-down(md) {
				padding-bottom: 10rem;
			}
		}
		&__title {
			margin-bottom: 2rem;
			font-size: 2.4rem;
			line-height: 1.24;
			@include media-breakpoint-up(md) {
				font-size: 4rem;
				line-height: 1.5;
			}
		}
		&__text {
			margin-bottom: 4rem;
			font-size: 1.8rem;
			line-height: 1.66;
			@include media-breakpoint-up(md) {
				font-size: 2.2rem;
				line-height: 1.81;
			}
		}
	}

	// Tribal Hands

	.tribal-hands {
		&__section {
			padding-bottom: 12rem;

			.btn-holder {
				@include media-breakpoint-down(md) {
					position: relative;
					z-index: 2;
					transform: translateY(50%);
				}
			}
		}

		&__wrapper {
			background-color: $aqua-haze;
			margin: auto;
			max-width: 118rem;
		}

		&__body {
			padding: 5rem 2rem 0 2rem;
			height: 100%;
			@include media-breakpoint-up(md) {
				padding: 2rem 2rem 2.7rem;
			}
			@include media-breakpoint-up(xl) {
				padding: 8.5rem 7rem 8.6rem;
			}
		}

		&__label {
			margin-bottom: 2rem;
			font-size: 1.6rem;
			line-height: 1.5;
			opacity: 40%;
			@include media-breakpoint-up(xl) {
				margin-bottom: 3rem;
				font-size: 1.8rem;
				line-height: 1.33;
			}
		}
		&__title {
			margin-bottom: 2.4rem;
			font-size: 2.8rem;
			line-height: 1.43;
			@include media-breakpoint-up(xl) {
				margin-bottom: 2.7rem;
				font-size: 4rem;
				line-height: 1.5;
			}
		}
		&__text {
			margin-bottom: 4rem;
			font-size: 1.6rem;
			line-height: 1.62;

			@include media-breakpoint-down(md) {
				margin-bottom: 2rem;
			}

			@include media-breakpoint-up(xl) {
				font-size: 2rem;
				line-height: 1.6;
			}
		}
		&__img-holder {
			position: relative;
			padding-top: 98.7%;
			@include media-breakpoint-up(sm) {
				padding-top: 70%;
			}
			@include media-breakpoint-up(md) {
				width: 100%;
				min-height: 47.6rem;
			}

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>
