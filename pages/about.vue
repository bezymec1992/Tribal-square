<template>
	<div class="about">
		<div class="main">
			<div class="container">
				<div class="main__wrapper d-flex flex-column flex-lg-row align-items-center justify-content-lg-between">
					<div class="about__info">
						<h1 class="h1 main__title">Everything you need to know about us</h1>
						<p class="main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet</p>
					</div>
					<div class="main__picture">
						<picture>
							<source srcset="../assets/imgs/about-main-mb.png" media="(max-width: 767px)" width="357" height="369" />
							<img src="../assets/imgs/about-main.png" alt="partners-logo" width="427" height="543" />
						</picture>
					</div>
				</div>
			</div>
		</div>

		<Solutions :title="info.title" :text="info.text" :img="info.img" :img-mob="info.imgMob" class="style-2" />

		<div class="accelerate">
			<div class="container">
				<h2 class="h2 accelerate__title">Accelerate customer engagement initiatives with confidence</h2>
				<div class="accelerate__items d-flex flex-column flex-lg-row justify-content-around align-items-center">
					<div class="accelerate__item d-flex flex-column align-items-center">
						<picture class="accelerate__picture">
							<source srcset="../assets/imgs/accelerate1-mb.png" media="(max-width: 767px)" width="408" height="360" />
							<img src="../assets/imgs/accelerate1-desk.png" alt="partners-logo" width="437" height="365" />
						</picture>
						<span class="accelerate__span"> Consultancy Partners </span>
						<p class="accelerate__text">Global execution and delivery of your technology strategy.</p>
					</div>
					<div class="accelerate__item d-flex flex-column align-items-center">
						<picture class="accelerate__picture">
							<source srcset="../assets/imgs/accelerate2-mb.png" media="(max-width: 767px)" width="409" height="360" />
							<img src="../assets/imgs/accelerate2-desk.png" alt="partners-logo" width="437" height="365" />
						</picture>
						<span class="accelerate__span"> Technology partners </span>
						<p class="accelerate__text">Develop applications on a reliable, scalable platform.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="healp">
			<div class="container">
				<div class="healp__title-wrapp">
					<h2 class="h2 healp__title">How can we help you?</h2>
					<p class="healp__text">Discover out products and solutions</p>
				</div>
				<div class="healp__title-wrapp2 d-flex justify-content-between">
					<h2 class="h2">Discover our Products</h2>
					<Button title="VIEW ALL" class="btn-link d-none d-md-inline-flex" type="nuxt-link" to="/products">
						<template #icon>
							<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
								<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
							</svg>
						</template>
					</Button>
				</div>
				<div class="row">
					<div v-for="card in cards" :key="card.id" class="col-md-6">
						<Card :title="card.title" :category="card.category" :img="card.img" class="style2" />
					</div>
					<div class="col-12 d-flex justify-content-center">
						<Button title="VIEW ALL" class="btn-link d-md-none" type="nuxt-link" to="/products">
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
		</div>

		<div class="toghether">
			<div class="container">
				<div class="toghether__wrapper d-flex justify-content-between flex-column flex-xl-row align-items-center">
					<div class="toghether__info">
						<h2 class="h2">Better together</h2>
						<p class="toghether__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet</p>
						<div class="buttons d-none d-md-flex">
							<Button title="FIND A PATNER" class="btn-primary" type="button" />
							<Button title="partner with us" class="btn-outline-primary" type="button" />
						</div>
					</div>
					<div class="toghether__imgs d-flex justify-content-around flex-wrap">
						<picture>
							<source srcset="../assets/imgs/partners-logo01.png" media="(max-width: 767px)" width="128" height="85" />
							<img src="../assets/imgs/partners-logo01.png" alt="partners-logo" width="180" height="120" />
						</picture>
						<picture>
							<source srcset="../assets/imgs/partners-logo02.png" media="(max-width: 767px)" width="111" height="85" />
							<img src="../assets/imgs/partners-logo02.png" alt="partners-logo" width="156" height="120" />
						</picture>
						<picture>
							<source srcset="../assets/imgs/partners-logo03.png" media="(max-width: 767px)" width="94" height="85" />
							<img src="../assets/imgs/partners-logo03.png" alt="partners-logo" width="132" height="120" />
						</picture>
						<picture>
							<source srcset="../assets/imgs/partners-logo04.png" media="(max-width: 767px)" width="113" height="85" />
							<img src="../assets/imgs/partners-logo04.png" alt="partners-logo" width="158" height="120" />
						</picture>
						<picture>
							<source srcset="../assets/imgs/partners-logo05.png" media="(max-width: 767px)" width="208" height="85" />
							<img src="../assets/imgs/partners-logo05.png" alt="partners-logo" width="293" height="120" />
						</picture>
					</div>
					<div class="buttons d-md-none">
						<Button title="FIND A PATNER" class="btn-primary" type="button" />
						<Button title="partner with us" class="btn-outline-primary" type="button" />
					</div>
				</div>
			</div>
		</div>
		<SolutionSection />
		<ContactSection />
	</div>
</template>

<script>
import Solutions from "@/components/Solutions";
import Card from "@/components/Card";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import SolutionSection from "@/components/SolutionSection";

export default {
	components: {
		Solutions,
		Card,
		Button,
		ContactSection,
		SolutionSection
	},
	data() {
		return {
			info: {
				title: "We provide solutions that help your business grow",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.",
				img: "solution-about-desk.jpg",
				imgMob: "solution-about-mb.jpg"
			},
			cards: [
				{ id: 1, title: "Knock Knock", category: "Platform & App", img: "more-1.jpg" },
				{ id: 2, title: "Coffee App", category: "App", img: "more-2.jpg" }
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.main {
	padding-top: 2.7rem;

	@include media-breakpoint-down(lg) {
		padding-top: 11rem;
	}
	.main__title {
		max-width: 73.1rem;
		margin-bottom: 4rem;
		@include media-breakpoint-down(md) {
			max-width: 33.5rem;
		}
	}
	.main__text {
		max-width: 55rem;
		font-size: 2.2rem;
		line-height: 1.8;
		@include media-breakpoint-down(lg) {
			margin-bottom: 3.5rem;
		}
		@include media-breakpoint-down(md) {
			max-width: 33.5rem;
			font-size: 1.8rem;
			line-height: 1.6;
		}
	}
}
.solution {
	background: white;
}

.accelerate {
	overflow: hidden;
	background: white;
	padding-bottom: 13.6rem;
	@include media-breakpoint-down(md) {
		padding-bottom: 10rem;
	}
	.accelerate__title {
		max-width: 85.4rem;
		text-align: center;
		margin: 0 auto 5.2rem auto;
		@include media-breakpoint-down(md) {
			width: 33.9rem;
			text-align: left;
		}
	}
	.accelerate__picture {
		@include media-breakpoint-down(md) {
			position: relative;
			left: 3rem;
			top: 0;
		}
	}
	.accelerate__item {
		max-width: 55rem;
		@include media-breakpoint-down(lg) {
			margin-bottom: 10rem;
			&:last-child {
				margin-bottom: 0;
			}
		}
		@include media-breakpoint-down(md) {
			align-items: left;
		}
	}
	.accelerate__span {
		font-size: 2.2rem;
		line-height: 1.09;
		text-align: center;
		text-transform: uppercase;
		color: #500ac9;
		margin-bottom: 2rem;
		margin-top: 4.3rem;
		@include media-breakpoint-down(md) {
			font-size: 1.8rem;
			margin: 2rem 0;
		}
	}
	.accelerate__text {
		font-size: 2.8rem;
		line-height: 1.42;
		text-align: center;
		width: 50.5rem;
		@include media-breakpoint-down(md) {
			font-size: 2.4rem;
			line-height: 1.25;
			width: 34.5rem;
			text-align: left;
		}
	}
}

.healp {
	padding-top: 7.3rem;
	padding-bottom: 8rem;
	position: relative;
	.healp__title-wrapp {
		margin: 0 auto 10rem auto;
		display: block;
		max-width: 85.4rem;
		text-align: center;
		@include media-breakpoint-down(md) {
			margin-bottom: 6rem;
		}
		.healp__text {
			font-size: 2.2rem;
			@include media-breakpoint-down(md) {
				font-size: 1.8rem;
			}
		}
	}

	.healp__title-wrapp2 {
		margin-bottom: 3.2rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2.4rem;
		}
	}

	.row {
		@include media-breakpoint-up(lg) {
			@include grid-gutter(4rem);
		}
	}
}

.toghether {
	background: white;
	position: relative;
	padding-top: 14.2rem;

	@include media-breakpoint-down(md) {
		padding-top: 8rem;
	}

	.toghether__wrapper {
		padding-bottom: 14rem;

		@include media-breakpoint-down(md) {
			padding-bottom: 7rem;
		}
		border-bottom: 0.1rem solid rgba($black, 0.2);
	}

	.buttons {
		max-width: 58rem;

		@include media-breakpoint-up(sm) {
			display: flex;
		}

		@include media-breakpoint-down(md) {
			padding-top: 4rem;
		}

		.btn {
			@include media-breakpoint-down(sm) {
				width: 100%;
			}

			&:first-child {
				@include media-breakpoint-down(sm) {
					margin-bottom: 2.4rem;
				}

				@include media-breakpoint-up(sm) {
					margin-right: 2.6rem;
				}
			}
		}
	}

	.toghether__info {
		max-width: 55.4rem;

		@include media-breakpoint-down(xl) {
			margin-bottom: 3rem;
		}

		@include media-breakpoint-down(md) {
			margin-bottom: 0;
		}

		.toghether__text {
			font-size: 2.2rem;
			margin-top: 4rem;
			margin-bottom: 4rem;
			line-height: 1.8;

			@include media-breakpoint-down(md) {
				margin-bottom: 3rem;
				margin-top: 2.2rem;
				font-size: 1.8rem;
				max-width: 33.5rem;
				line-height: 1.6;
			}
		}
	}
	.toghether__imgs {
		max-width: 58.9rem;
		padding: 0;
		& picture:nth-child(4) {
			@include media-breakpoint-up(md) {
				padding-left: 8rem;
			}
		}
		@include media-breakpoint-down(md) {
			max-width: 29.5rem;
			& picture:last-child {
				padding-left: 4rem;
			}
		}
	}
}

.solution {
	@include media-breakpoint-down(md) {
		padding-top: 8rem;
	}
}
</style>
