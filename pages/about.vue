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
						<!-- <picture>
							<source srcset="../assets/imgs/about-main-mb.png" media="(max-width: 767px)" width="357" height="369" />
							<img src="../assets/imgs/about-main.png" alt="partners-logo" width="427" height="543" />
						</picture> -->
					</div>
				</div>
			</div>
		</div>

		<Solutions :title="info.title" :text="info.text" class="solution-first style-2" />

		<div class="after-solution-section">
			<div class="container">
				<div class="inner-holder">
					<div class="row g-0">
						<div class="col-md-6">
							<!-- <div class="img-holder">
							<img src="" alt="We can add a cool slogan here" />
						</div> -->
						</div>
						<div class="col-md-6">
							<div class="content-holder">
								<h2 class="h2">
									We can add a <br />
									cool slogan <br />
									here
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="accelerate">
			<div class="container">
				<h2 class="h2 accelerate__title">Accelerate customer engagement initiatives with confidence</h2>
				<div class="accelerate__items d-flex flex-column flex-lg-row justify-content-around align-items-center">
					<div class="accelerate__item d-flex flex-column align-items-center">
						<picture class="accelerate__picture">
							<source srcset="@/assets/imgs/img-028.png" media="(max-width: 767px)" width="408" height="360" />
							<img src="@/assets/imgs/img-028.png" alt="partners-logo" width="437" height="365" />
						</picture>
						<span class="accelerate__span">Consultancy Partners </span>
						<p class="accelerate__text">Global execution and delivery of your technology strategy.</p>
					</div>
					<div class="accelerate__item d-flex flex-column align-items-center">
						<picture class="accelerate__picture">
							<source srcset="@/assets/imgs/img-029.png" media="(max-width: 767px)" width="409" height="360" />
							<img src="@/assets/imgs/img-029.png" alt="partners-logo" width="437" height="365" />
						</picture>
						<span class="accelerate__span"> Technology partners </span>
						<p class="accelerate__text">
							Develop applications on a <br />
							reliable, scalable platform.
						</p>
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
					<Button title="VIEW ALL" class="btn-link d-none d-md-inline-flex" type="nuxt-link" to="/products" />
				</div>
				<div class="row">
					<div v-for="item in productsList" :key="item.id" class="col-md-6">
						<Card class="style2" :img="item.img" :category="item.category" :title="item.title" :description="item.description" :about-link="item.aboutLink" />
					</div>
					<div class="col-12 d-flex justify-content-center pt-3">
						<Button title="VIEW ALL" class="btn-link d-md-none" type="nuxt-link" to="/products" />
					</div>
				</div>

				<div class="healp__title-wrapp3">
					<h2 class="h2">Companies Overview</h2>
				</div>
				<SliderLabels :limit-labels-mobile="2" />
			</div>
		</div>

		<div class="toghether">
			<div class="container">
				<div class="toghether__wrapper d-flex justify-content-between flex-column flex-xl-row align-items-center">
					<div class="toghether__info">
						<h2 class="h2">Better together</h2>
						<p class="toghether__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet</p>
						<div class="buttons d-none d-md-flex">
							<Button title="Find a partner" class="btn-dark" type="button" @click="openModal('modalPartner', 'Find a partner')" />
							<Button title="Partner with us" class="btn-outline-dark" type="button" @click="openModal('modalPartner', 'Partner with us')" />
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
						<Button title="Find a partner" class="btn-dark" type="button" @click="openModal('modalPartner', 'Find a partner')" />
						<Button title="Partner with us" class="btn-outline-dark" type="button" @click="openModal('modalPartner', 'Partner with us')" />
					</div>
				</div>
			</div>
		</div>
		<SolutionSection />
		<ContactSection />

		<modal ref="modalPartner" class="contact-from">
			<template #modal-body>
				<div class="modal-form">
					<ContactFormModal :modal-type="modalType" @submitForm="closeModal('modalPartner')" />
				</div>
			</template>
		</modal>
	</div>
</template>

<script>
import Solutions from "@/components/Solutions";
import Card from "@/components/Card";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import SolutionSection from "@/components/SolutionSection";
import SliderLabels from "@/components/SliderLabels";
import ContactFormModal from "@/components/ContactFormModal";
import Modal from "@/components/Modal";
import Products from "@/constants/products";

export default {
	components: {
		Solutions,
		Card,
		Button,
		ContactSection,
		SolutionSection,
		SliderLabels,
		ContactFormModal,
		Modal
	},
	data() {
		return {
			info: {
				title: "We provide solutions that help your business grow",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.",
				img: "solution-about-desk.jpg",
				imgMob: "solution-about-mb.jpg"
			},
			productsList: []
		};
	},
	head() {
		return {
			bodyAttrs: {
				class: "header-white"
			}
		};
	},
	mounted() {
		this.productsList = Products.slice(0, 2);
	},
	methods: {
		openModal(modalName, modalType) {
			this.$refs[modalName].handleOpen();
			this.modalType = modalType;
		},
		closeModal(modalName) {
			this.$refs[modalName].handleClose();
		}
	}
};
</script>

<style lang="scss" scoped>
.main {
	padding-top: 14.7rem;
	color: $white;
	background: #009656;

	@include media-breakpoint-down(lg) {
		padding-top: 13rem;
	}

	&__wrapper {
		min-height: 70vh;
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

.solution-first {
	padding-bottom: 0;
	background: $white;
}

.after-solution-section {
	padding-bottom: 12rem;
	color: $white;
	background: $white;

	@include media-breakpoint-down(md) {
		padding-bottom: 8rem;
	}

	.container {
		max-width: 134rem;

		@include media-breakpoint-down(md) {
			padding-left: 0;
			padding-right: 0;
		}
	}

	.inner-holder {
		background: #b7a38f;
	}

	.content-holder {
		display: flex;
		align-items: center;
		min-height: 60rem;

		@include media-breakpoint-up(md) {
			justify-content: center;
		}

		@include media-breakpoint-down(md) {
			padding-left: 4rem;
			padding-right: 4rem;
		}
	}

	.h2 {
		font-size: 6.4rem;
		line-height: 1.2;

		@include media-breakpoint-down(md) {
			font-size: 4rem;
		}
	}
}

.accelerate {
	overflow: hidden;
	background: white;
	padding-bottom: 13.6rem;
	@include media-breakpoint-down(md) {
		padding-bottom: 8rem;
	}
	.accelerate__title {
		max-width: 86.4rem;
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
			left: 2rem;
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
		color: rgba($black, 0.3);
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

	.healp__title-wrapp3 {
		padding-top: 12rem;

		@include media-breakpoint-down(md) {
			padding-top: 8rem;
		}

		.h2 {
			margin-bottom: 3.2rem;

			@include media-breakpoint-down(md) {
				margin-bottom: 1.6rem;
			}
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
				max-width: 100%;
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
