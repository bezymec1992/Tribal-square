<template>
	<div class="about">
		<div class="first-section">
			<div class="container">
				<div class="first-section__wrapper">
					<div class="row align-items-lg-center">
						<div class="col-lg-7">
							<div class="about__info">
								<h1 class="h1 first-section__title">
									Everything you need <br class="d-none d-md-block" />
									to know about us
								</h1>
								<p class="first-section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet</p>
							</div>
						</div>
						<div class="col-lg-5">
							<div class="img-holder">
								<img src="@/assets/imgs/img-033.png" alt="Everything you need to know about us" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<Solutions :title="info.title" :text="info.text" class="solution-first style-2" />

		<div class="after-solution-section">
			<div class="container">
				<div class="inner-holder">
					<div class="row align-items-md-center g-0">
						<div class="col-lg-6 d-lg-flex justify-content-lg-start">
							<div class="img-holder">
								<img src="@/assets/imgs/img-0112.png" alt="We create multifuctional products for your business" />
							</div>
						</div>
						<div class="col-lg-6">
							<div class="content-holder">
								<h2 class="h2">
									We create <br class="d-none d-md-block" />
									multifuctional <br class="d-none d-md-block" />
									products for <br class="d-none d-md-block" />
									your business
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
.first-section {
	padding-top: 14.7rem;
	color: $white;
	background: url("@/assets/imgs/img-032.jpg");
	background-size: cover;
	background-repeat: no-repeat;

	@include media-breakpoint-down(lg) {
		padding-top: 13rem;
	}

	@include media-breakpoint-up(lg) {
		padding-bottom: 6.4rem;
	}

	@include media-breakpoint-down(lg) {
		padding-bottom: 3.9rem;
		background: url("@/assets/imgs/img-034.jpg");
		background-size: cover;
		background-repeat: no-repeat;
	}

	.row {
		min-height: 70vh;
	}

	.first-section__title {
		max-width: 73.1rem;
		margin-bottom: 4rem;
		@include media-breakpoint-down(md) {
			max-width: 33.5rem;
		}
	}
	.first-section__text {
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

	.about__info {
		position: relative;
		z-index: 2;
	}

	.container {
		position: relative;
		z-index: 1;
	}

	.img-holder {
		@include media-breakpoint-up(lg) {
			position: absolute;
			top: 50%;
			right: 0;
			transform: translateY(-50%);
			width: 50%;
			max-width: 65.4rem;
		}

		img {
			width: 100%;
			height: auto;
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
		max-width: 138rem;

		@include media-breakpoint-down(md) {
			padding-left: 0;
			padding-right: 0;
		}
	}

	.inner-holder {
		position: relative;
		padding-top: 4.8rem;
		padding-left: 4rem;
		padding-right: 4rem;
		padding-bottom: 6rem;
		background: #c2b075;
		overflow: hidden;

		@include media-breakpoint-up(lg) {
			padding-top: 7rem;
			padding-bottom: 7rem;
			padding-left: 7rem;
			padding-right: 11rem;
		}

		&::before {
			@include media-breakpoint-up(lg) {
				content: "";
				position: absolute;
				width: 1262px;
				height: 1314px;
				left: -20%;
				top: -30%;
				background: radial-gradient(50% 50% at 50% 50%, rgba(137, 105, 40, 0.7) 0%, rgba(137, 105, 40, 0) 100%);
				border-radius: 50%;
			}
		}

		&::after {
			content: "";
			position: absolute;
			border-radius: 50%;
			@include media-breakpoint-up(lg) {
				top: -87%;
				right: -36%;
				width: 1048px;
				height: 1091px;
				background: radial-gradient(50% 50% at 50% 50%, #ffeab7 0%, rgba(255, 234, 183, 0) 100%);
			}

			@include media-breakpoint-down(lg) {
				width: 1278px;
				height: 1339.96px;
				top: 6%;
				left: -50%;
				background: radial-gradient(50% 50% at 50% 50%, rgba(137, 105, 40, 0.7) 0%, rgba(137, 105, 40, 0) 100%);
			}
		}
	}

	.img-holder {
		max-width: 51.9rem;

		@include media-breakpoint-down(lg) {
			margin-left: -1.4rem;
			margin-right: -1.4rem;
			margin-bottom: 4rem;
		}

		img {
			width: 100%;
			height: auto;
		}
	}

	.row {
		position: relative;
		z-index: 2;
	}

	.content-holder {
		@include media-breakpoint-up(md) {
			justify-content: center;
		}

		@include media-breakpoint-up(xl) {
			margin-left: -6rem;
		}

		@include media-breakpoint-up(lg) {
			display: flex;
			align-items: center;
			min-height: 60rem;
			padding-left: 10rem;
		}
	}

	.h2 {
		margin-bottom: 0;
		font-size: 6.4rem;
		line-height: 1.2;

		@include media-breakpoint-down(md) {
			font-size: 3.8rem;
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
