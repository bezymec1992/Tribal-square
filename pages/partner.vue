<template>
	<div class="partner-page">
		<Intro-section>
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<h1 class="h1">Better together</h1>
						<div class="text-holder">
							<p>
								Lorem ipsum dolor sit amet, consectetur <br class="d-none d-md-block" />
								adipiscing elit. Aenean egestas in est ut aliquet
							</p>
						</div>
						<div class="img-holder">
							<img src="@/assets/imgs/img-07.png" alt="Better together" />
						</div>
						<div class="buttons">
							<Button title="FIND A PATNER" class="btn-primary" type="button" @click="openModal('modalPartner', 'Find a partner')" />
							<Button title="PARTNER WITH US" class="btn-outline-primary" type="button" @click="openModal('modalPartner', 'Partner with us')" />
						</div>
					</div>
				</div>
			</div>
		</Intro-section>
		<OurPartners :people-is-show="false" />
		<div class="customer-ingagement">
			<div class="container">
				<h2 class="customer-ingagement__block-title h3 text-left text-md-center">Accelerate customer engagement initiatives with confidence</h2>

				<div class="row flex-md-row-reverse">
					<div class="col-12 col-md-6">
						<div class="customer-ingagement__body">
							<p class="customer-ingagement__label text-uppercase">Consultancy Partners</p>

							<h3 class="customer-ingagement__title">Global execution and delivery of your technology strategy.</h3>
							<h4 class="customer-ingagement__subtitle">Build alongside TribalSquare experts</h4>
							<p class="customer-ingagement__text">TribalSquare gives you the time, resources, and flexible pricing model designed to kickstart the success of your application. With Build, you have the runway and commitment from TribalSquare that you need to grow your customer base and build your business.</p>
							<div class="img-holder">
								<img class="customer-ingagement__img d-md-none" src="@/assets/imgs/img-08.png" alt="image description" />
							</div>

							<h4 class="customer-ingagement__subtitle">Drive revenue to your practice</h4>
							<p class="customer-ingagement__text">Build gives you the knowledge, guidance, and resources you need to grow your business. You'll receive guidance from TribalSquare sales and engineering experts who will help you build and scale your practice.</p>
						</div>
					</div>
					<div class="col-12 col-md-6 justify-content-start align-items-center d-none d-md-flex">
						<div class="img-holder">
							<img class="customer-ingagement__img" src="@/assets/imgs/img-08.png" alt="image description" />
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12 col-md-6">
						<div class="customer-ingagement__body">
							<p class="customer-ingagement__label text-uppercase">Technology partners</p>
							<h3 class="customer-ingagement__title">Develop applications on a reliable, scalable platform.</h3>
							<h4 class="customer-ingagement__subtitle">Enhance your profitability with a long-term partnership</h4>
							<p class="customer-ingagement__text">TribalSquare gives you the time, resources, and flexible pricing model designed to kickstart the success of your application. With Build, you have the runway and commitment from TribalSquare that you need to grow your customer base and build your business.</p>
							<div class="img-holder">
								<img class="customer-ingagement__img d-md-none" src="@/assets/imgs/img-09.png" alt="image description" />
							</div>
							<h4 class="customer-ingagement__subtitle">Review your applications with TribalSquare experts</h4>
							<p class="customer-ingagement__text">Application quality is critical to driving sales and building long-lasting customer relationships. Build gives you access to expert TribalSquare engineers to review your applications before bringing them to market.</p>
						</div>
					</div>
					<div class="col-12 col-md-6 justify-content-end align-items-center d-none d-md-flex">
						<div class="img-holder">
							<img class="customer-ingagement__img" src="@/assets/imgs/img-09.png" alt="image description" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="text-block-section">
			<div class="container">
				<TxtBlock class="style-center" @clickFirstBtn="openModal('modalPartner', 'Find a partner')" @clickSecondBtn="openModal('modalPartner', 'Partner with us')" />
			</div>
		</div>
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
import IntroSection from "@/components/IntroSection";
import OurPartners from "@/components/OurPartners";
import TxtBlock from "@/components/TxtBlock";
import ContactSection from "@/components/ContactSection";
import ContactFormModal from "@/components/ContactFormModal";

export default {
	components: {
		IntroSection,
		OurPartners,
		TxtBlock,
		ContactSection,
		ContactFormModal
	},
	data() {
		return {
			modalType: ""
		};
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
.partner-page {
	background: $white;

	.intro-section {
		overflow: hidden;
		background: $aqua-haze;

		@include media-breakpoint-down(md) {
			padding-bottom: 7.3rem;
		}

		.container {
			position: relative;
		}

		.buttons {
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

		.btn {
			@include media-breakpoint-down(sm) {
				display: flex;
				width: 100%;
			}
		}

		.img-holder {
			@include media-breakpoint-down(lg) {
				max-width: 71.9rem;
				margin-bottom: 3rem;
				margin-left: auto;
				margin-right: -5rem;
			}

			@include media-breakpoint-down(md) {
				max-width: 41.9rem;
				margin-left: auto;
				margin-right: -10rem;
			}

			@include media-breakpoint-up(lg) {
				position: absolute;
				top: 50%;
				right: -9rem;
				transform: translateY(-50%);
				width: 45.5%;
			}

			img {
				width: 100%;
				height: auto;
			}
		}
	}

	.our-partners {
		@include media-breakpoint-down(md) {
			padding: 8rem 0;
		}
	}

	.text-block-section {
		padding-top: 9rem;
		padding-bottom: 16rem;

		@include media-breakpoint-down(md) {
			padding-top: 2rem;
			padding-bottom: 10rem;
		}

		.container {
			max-width: 75.2rem;
		}
	}

	.customer-ingagement {
		@include media-breakpoint-up(xl) {
			overflow: hidden;
		}

		@include media-breakpoint-down(md) {
			overflow: hidden;
		}

		.row {
			@include media-breakpoint-up(xl) {
				@include grid-gutter(6rem);
			}
		}

		.img-holder {
			@include media-breakpoint-up(xl) {
				max-width: 52rem;
			}

			@include media-breakpoint-down(md) {
				// margin-left: -3rem;
				// margin-right: -3rem;
			}
		}

		&__block-title {
			margin-bottom: 3.5rem;
			font-size: 2.8rem;
			line-height: 1.42;

			@include media-breakpoint-up(md) {
				max-width: 85.4rem;
				margin: auto;
				font-size: 4rem;
				line-height: 1.5;
				padding-bottom: 10rem;
			}
		}
		&__body {
			padding-bottom: 2.4rem;
		}
		&__label {
			margin-bottom: 1.6rem;
			font-size: 1.8rem;
			line-height: 1.33;
			color: $purple;
			@include media-breakpoint-up(lg) {
				font-size: 2.2rem;
				line-height: 1.09;
			}
		}
		&__title {
			margin-bottom: 4rem;
			font-size: 2.4rem;
			line-height: 1.24;
			@include media-breakpoint-up(lg) {
				font-size: 3.4rem;
				line-height: 1.41;
			}
		}
		&__subtitle {
			margin-bottom: 1.6rem;
			font-size: 2.2rem;
			line-height: 1.24;
			@include media-breakpoint-up(lg) {
				font-size: 2.6rem;
				line-height: 1.38;
			}
		}
		&__text {
			margin-bottom: 8rem;
			font-size: 1.8rem;
			line-height: 1.77;
			@include media-breakpoint-up(lg) {
				margin-bottom: 6rem;
			}
		}
		&__img {
			margin-bottom: 3.9rem;

			@include media-breakpoint-down(lg) {
				margin-top: -4rem;
			}
		}

		img {
			width: 100%;
			height: auto;
		}
	}
}
</style>
