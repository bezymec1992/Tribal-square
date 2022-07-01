<template>
	<div class="product-page">
		<div class="product__main">
			<Intro-section>
				<div class="container">
					<div class="row">
						<div class="col-12">
							<Breadcrumbs />
						</div>
					</div>
					<div class="row align-items-md-center">
						<div class="col-lg-7">
							<h1 class="h1">Digital Valet</h1>
							<div class="text-holder">
								<p class="product__main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac</p>
							</div>
						</div>
						<div class="col-lg-5 d-md-flex justify-content-end">
							<Button title="VISIT WEBSITE" class="btn-warning" type="link" href="/">
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
			<div class="product__main-picture d-flex justify-content-center">
				<picture>
					<source srcset="@/assets/imgs/product-main-mb.jpg" media="(max-width: 767px)" width="802" height="370" />
					<img src="@/assets/imgs/product-main.jpg" alt="partners-logo" width="1300" height="600" />
				</picture>
			</div>
		</div>

		<div class="idea">
			<SectionTwoTextCols first-title="Idea" :first-text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ']" second-title="Assets" :second-text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ']" />
			<div class="container">
				<div class="idea__picture d-flex justify-content-start">
					<picture>
						<source srcset="@/assets/imgs/product__idea-mb.png" media="(max-width: 767px)" width="661" height="337" />
						<img src="@/assets/imgs/product__idea-desk.png" alt="partners-logo" width="1233" height="628" />
					</picture>
				</div>
			</div>
		</div>

		<div class="target">
			<div class="container">
				<h2 class="h2 target__title d-flex justify-content-center">Tagret audience</h2>
				<div class="target__items d-flex justify-content-center">
					<div class="target__item d-flex justify-content-center">
						<p class="target__text">Small car companies</p>
					</div>
					<div class="target__item d-flex justify-content-center">
						<p class="target__text">Different car dealers</p>
					</div>
					<div class="target__item d-flex justify-content-center">
						<p class="target__text">Other car companies</p>
					</div>
				</div>
			</div>
		</div>

		<div class="location d-flex">
			<div class="container">
				<div class="laction__wrapper d-flex">
					<div class="location__info">
						<span class="location__span"> Location </span>
						<h3 class="h3 location__title">Where do we use this product</h3>
						<p class="location__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.</p>
					</div>
					<div class="location__picture">
						<picture>
							<source srcset="@/assets/imgs/location-mb.png" media="(max-width: 1200px)" width="476" height="469" />
							<img src="@/assets/imgs/location-desk.png" alt="partners-logo" width="609" height="600" />
						</picture>
					</div>
				</div>
			</div>
		</div>

		<div class="additional">
			<div class="container">
				<div class="additional__info">
					<h2 class="h2 additional__title text-center">Here should be additional info about the product</h2>
					<p class="additional__text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. <span class="additional__span">Nulla facilisi. Phasellus at placerat felis. Intege.</span></p>
				</div>
			</div>
			<div class="additional__picture">
				<div class="content-holder">
					<h2 class="h2 additional__picture-title">Transform your customer experience</h2>
					<Button title="VISIT WEBSITE" class="btn-warning" type="link" href="/">
						<template #icon>
							<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
								<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
							</svg>
						</template>
					</Button>
				</div>
				<div class="img-holder">
					<picture>
						<source srcset="@/assets/imgs/additional-mb.jpg" media="(max-width: 767px)" width="1117" height="600" />
						<img src="@/assets/imgs/aditional-desk.jpg" alt="partners-logo" width="1348" height="728" />
					</picture>
				</div>
			</div>
		</div>

		<div class="more">
			<div class="container">
				<div class="more__wrapper d-flex justify-content-around">
					<div class="more__title-wrap">
						<h2 class="h2 more__title">Discover more our Products</h2>
					</div>
					<div class="more__items">
						<div v-for="card in cards" :key="card.id" class="card">
							<Discover :title="card.title" :text="card.text" :img="card.img" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<ContactSection />
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection";
import Discover from "@/components/Discover";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTwoTextCols from "@/components/SectionTwoTextCols";

export default {
	components: {
		Discover,
		IntroSection,
		Button,
		ContactSection,
		Breadcrumbs,
		SectionTwoTextCols
	},
	data() {
		return {
			cards: [
				{ id: 1, title: "Platform & App", text: "Knock Knock", img: "more-1.jpg" },
				{ id: 2, title: "App", text: "Coffee App", img: "more-2.jpg" },
				{ id: 3, title: "Platform", text: "HandsRepublic", img: "more-3.jpg" },
				{ id: 4, title: "Platform & App", text: "Knock Knock", img: "more-1.jpg" }
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.product-page {
	background: $white;
	overflow: hidden;

	.intro-section {
		padding-top: 6rem;

		@include media-breakpoint-down(md) {
			padding-top: 3rem;
		}

		.breadcrumbs {
			margin-bottom: 7.9rem;

			@include media-breakpoint-down(md) {
				margin-bottom: 5.6rem;
			}
		}
	}

	.product__main-text {
		max-width: 73.5rem;
		@include media-breakpoint-down(sm) {
			max-width: 33.5rem;
		}
	}
	.product__main-picture {
		background: linear-gradient(#eef3f5 50%, white 50%);
		padding-bottom: 8rem;
	}
	.intro-section {
		background-color: #eef3f5;
		padding-bottom: 6rem;
		@include media-breakpoint-down(md) {
			padding-bottom: 0;
			.text-holder {
				margin-bottom: 0;
			}
		}

		.btn-warning {
			@include media-breakpoint-down(sm) {
				position: relative;
				bottom: -3rem;
			}
		}
	}

	.idea {
		overflow: hidden;

		.container {
			max-width: 122rem;
		}

		.idea__info {
			.idea__text {
				width: 527px;
				max-width: 100%;
				font-weight: 400;
				font-size: 18px;
				line-height: 32px;
				@include media-breakpoint-down(md) {
					font-size: 16px;
					line-height: 24px;
					padding-bottom: 40px;
				}
			}
			.idea__title {
				font-size: 34px;
				padding-bottom: 10px;
				@include media-breakpoint-down(md) {
					font-size: 28px;
				}
			}
		}
		.idea__picture {
			@include media-breakpoint-down(md) {
				position: relative;
				left: -71px;
			}
		}
		.idea__picture img {
			@include media-breakpoint-up(md) {
				width: 100%;
				height: auto;
			}
		}
	}

	.target {
		padding-top: 50px;
		padding-bottom: 140px;
		@include media-breakpoint-down(lg) {
			padding-top: 58px;
			padding-bottom: 80px;
		}
		.target__title {
			margin-bottom: 50px;
		}
		.target__items {
			@include media-breakpoint-down(lg) {
				flex-direction: column;
				align-items: center;

				.target__item:last-child:after {
					position: absolute;
					bottom: 0;
					left: 25%;
					width: 180px;
					border-bottom: 1px solid rgba(0, 0, 0, 0.4);
					content: "";
				}
			}
			.target__item::after {
				position: absolute;
				top: 0;
				left: 25%;
				width: 50%;
				content: "";
				@include media-breakpoint-down(lg) {
					border-top: 1px solid rgba(0, 0, 0, 0.4);
				}
			}
			.target__item {
				width: 346px;
				max-width: 100%;
				text-align: center;
				height: 180px;
				align-items: center;
				border-left: 1px solid rgba(0, 0, 0, 0.4);
				@include media-breakpoint-down(lg) {
					border-left: none;
					position: relative;
					height: 120px;
				}
				.target__text {
					width: 260px;
					max-width: 100%;
					font-size: 26px;
					line-height: 40px;
					@include media-breakpoint-down(lg) {
						font-size: 22px;
					}
				}
			}
			.target__item:last-child {
				border-right: 1px solid rgba(0, 0, 0, 0.4);
				@include media-breakpoint-down(lg) {
					border-right: none;
				}
			}
		}
	}

	.location {
		overflow: hidden;
		background: #eef3f5;
		max-width: 1240px;
		height: 600px;
		margin: 0 auto;
		position: relative;
		margin-bottom: 100px;
		@include media-breakpoint-down(xl) {
			height: 832px;
			.laction__wrapper {
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.location__picture {
					position: unset;
				}
				.location__info {
					margin-top: 60px;
					margin-left: 0;
					width: 335px;
					.location__title {
						padding-bottom: 20px;
					}
				}
			}
		}
		.location__info {
			width: 464px;
			max-width: 100%;
			margin-top: 150px;
			margin-left: 50px;
			.location__span {
				font-size: 22px;
				line-height: 24px;
				text-transform: uppercase;
				color: #500ac9;
			}
			.location__text {
				font-size: 18px;
				line-height: 32px;
			}
			.location__title {
				padding-bottom: 30px;
				padding-top: 20px;
				font-size: 34px;
				@include media-breakpoint-down(md) {
					font-size: 24px;
				}
			}
		}
		.location__picture {
			position: absolute;
			top: 0;
			right: 0;
		}
	}

	.additional {
		overflow: hidden;
		padding-bottom: 120px;
		.additional__info {
			max-width: 752px;
			margin: 0 auto;
			@include media-breakpoint-down(lg) {
				max-width: 335px;
				.additional__span {
					display: none;
				}
			}
			.additional__title {
				padding-bottom: 26px;
				@include media-breakpoint-down(lg) {
					font-size: 24px;
					line-height: 30px;
				}
			}
			.additional__text {
				font-size: 22px;
				line-height: 40px;
				padding-bottom: 120px;
				@include media-breakpoint-down(lg) {
					font-size: 18px;
					line-height: 30px;
				}
			}
		}
		.additional__picture {
			position: relative;
			max-width: 134rem;
			margin: auto;
			color: $white;
		}

		.additional__picture-title {
			max-width: 562px;
			margin-bottom: 7rem;
			font-size: 4.8rem;
			text-align: center;
			@include media-breakpoint-down(lg) {
				margin-bottom: 8rem;
				font-size: 28px;
				max-width: 335px;
			}
		}

		.content-holder {
			position: relative;
			z-index: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			min-height: 72rem;

			@include media-breakpoint-down(lg) {
				min-height: 60rem;
			}
		}

		.img-holder {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}

	.more {
		padding-bottom: 120px;
		.more__wrapper {
			@include media-breakpoint-down(lg) {
				flex-direction: column;
				align-items: center;
			}
			.more__items {
				width: 600px;
				max-width: 100%;
			}
			.more__title-wrap {
				width: 550px;
				max-width: 100%;
				.more__title {
					width: 300px;
					max-width: 100%;

					@include media-breakpoint-down(md) {
						width: 211px;
					}

					@include media-breakpoint-up(xxl) {
						margin-left: 10rem;
					}
				}
			}
		}
	}
}
</style>
