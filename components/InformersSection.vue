<template>
	<div class="section-informers">
		<div class="container">
			<div class="row">
				<div class="col-xl-3 col-xxl-3 d-none d-xl-block">
					<ul class="anchor-links">
						<li><a anchor-link="section-1" href="#">PRODUCTS</a></li>
						<li><a anchor-link="section-2" href="#">LABELS OVERVIEW</a></li>
						<li><a anchor-link="section-3" href="#">WORK WITH US</a></li>
					</ul>
				</div>
				<div class="col-xl-9 col-xxl-9">
					<div class="products-informer style1" anchor-section="section-1">
						<div class="header d-flex align-items-baseline justify-content-between">
							<h3 class="h2">Discover our Products</h3>
							<Button title="VIEW ALL" class="btn-link d-none d-sm-inline-flex" type="nuxt-link" to="/products" />
						</div>
						<div class="row">
							<div v-for="(item, index) in productsList" :key="index" class="col-md-6">
								<Card class="style1" :img="item.img" :category="item.category" :title="item.title" :description="item.description" :about-link="item.aboutLink" :card-img="item.cardImg" />
							</div>
							<div class="col-12 d-flex justify-content-center d-md-none col-w-btn pt-4">
								<Button title="VIEW ALL" class="btn-link" type="nuxt-link" to="/products" />
							</div>
						</div>
					</div>

					<div class="visual-block">
						<div class="row g-0 align-items-lg-center">
							<div class="col-lg-6">
								<div class="content-holder">
									<h3 class="h2">
										Everything you <br class="d-md-none" />
										need at one 
										place
									</h3>
									<Button title="Get in touch" class="btn-light shadow-sm" type="nuxt-link" to="/contact">
										<template #icon>
											<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor" />
											</svg>
										</template>
									</Button>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="img-holder">
									<img src="@/assets/imgs/img-0113.png" alt="Everything you need at one place" />
								</div>
							</div>
						</div>
					</div>

					<div class="products-informer" anchor-section="section-2">
						<div class="header d-flex align-items-baseline justify-content-between">
							<h3 class="h2">Labels Overview</h3>
							<!-- <Button title="VIEW ALL" class="btn-link d-none d-md-inline-flex" type="nuxt-link" to="/labels" /> -->
						</div>
						<div class="row">
							<div class="col-12">
								<CardLable v-for="(item, index) in labelsList" :key="index" class="style1" :svg-title="item.svgTitle" :title="item.title" :description="item.description" :type="item.type" :topic="item.topic" :website-link="item.websiteLink" :img-down-md="item.imgDownMd" :img-style-down-md="item.imgStyleDownMd" :img-up-md="item.imgUpMd" card-style="style1">
									<template #svg-title>
										{{ svgTitle }}
									</template>
								</CardLable>
							</div>
							<div class="col-12 d-flex justify-content-center  col-w-btn">
								<Button title="VIEW ALL" class="btn-link" type="nuxt-link" to="/labels">
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
					<div anchor-section="section-3">
						<TxtBlock @clickFirstBtn="openModal('modalPartner', 'Find a partner')" @clickSecondBtn="openModal('modalPartner', 'Partner with us')" />
					</div>
				</div>
			</div>
		</div>

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
import Button from "@/components/Button";
import Card from "@/components/Card";
import Products from "@/constants/products";
import Labels from "@/constants/Labels";
import CardLable from "@/components/CardLable";
import TxtBlock from "@/components/TxtBlock";
import ContactFormModal from "@/components/ContactFormModal";
import Modal from "@/components/Modal";

export default {
	name: "InformersSection",
	components: {
		Button,
		Card,
		CardLable,
		TxtBlock,
		ContactFormModal,
		Modal
	},
	data() {
		return {
			productsList: [],
			labelsList: []
		};
	},
	mounted() {
		this.productsList = Products.slice(0, 4);
		this.labelsList = Labels;

		window.addEventListener("scroll", this.handleScroll);
		this.handleScroll();
		this.scrollTo();
	},

	methods: {
		openModal(modalName, modalType) {
			this.$refs[modalName].handleOpen();
			this.modalType = modalType;
		},
		closeModal(modalName) {
			this.$refs[modalName].handleClose();
		},

		scrollTo() {
			const links = document.querySelectorAll("[anchor-link]");

			if (links) {
				for (const link of links) {
					link.addEventListener("click", clickHandler);
				}

				function clickHandler(e) {
					e.preventDefault();

					const dataScroll = this.getAttribute("anchor-link");

					const offsetTop = document.querySelector(`[anchor-section="${dataScroll}"]`).offsetTop;

					scroll({
						top: offsetTop,
						behavior: "smooth"
					});
				}
			}
		},

		handleScroll() {
			const els = document.querySelectorAll("[anchor-section]");
			const links = document.querySelectorAll("[anchor-link]");

			function deleteActiveClass() {
				links.forEach((el) => {
					el.classList.remove("active");
				});
			}

			els.forEach((el) => {
				if (window.scrollY >= el.offsetTop - 150 && window.scrollY < el.offsetTop + el.offsetHeight) {
					deleteActiveClass();
					document.querySelector(`[anchor-link="${el.getAttribute("anchor-section")}"]`).classList.add("active");
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.section-informers {
	padding-top: 14rem;
	padding-bottom: 16rem;

	@include media-breakpoint-down(md) {
		padding-top: 8rem;
		padding-bottom: 10rem;
	}

	.container {
		max-width: 123.7rem;
	}

	.anchor-links {
		margin: 0 0 6rem 0;
		padding: 0;
		list-style: none;

		@include media-breakpoint-up(xl) {
			position: sticky;
			top: 1rem;
			padding-top: 10.5rem;
		}

		li {
			&:not(:last-child) {
				margin-bottom: 6rem;
			}

			a {
				position: relative;
				font-size: 2.2rem;
				color: rgba($black, 0.5);

				&::before {
					content: "";
					position: absolute;
					top: 50%;
					left: 0;
					transform: translateY(-50%) translateX(-3rem);
					width: 3rem;
					height: 1rem;
					background-image: url("data:image/svg+xml,%3Csvg width='31' height='12' viewBox='0 0 31 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989592 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z' fill='%23015236'/%3E%3C/svg%3E%0A");
					background-repeat: no-repeat;
					background-size: 3rem;
					opacity: 0;
					transition: $transition;
				}

				&.active {
					padding-left: 4.7rem;
					color: $aqua-deep;

					&::before {
						transform: translateY(-50%) translateX(0);
						opacity: 1;
					}
				}
			}
		}
	}

	.header {
		margin-bottom: 3.2rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2rem;
		}

		.h2 {
			font-family: 'Oswald';
			text-transform: uppercase;
			margin-bottom: 0;
		}

		.btn-link {
			padding: 0;
		}
	}

	.products-informer {
		margin-bottom: 16rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 8rem;
		}

		&.style1 {
			@include media-breakpoint-up(md) {
				margin-bottom: 9rem;
			}
		}
	}

	.txt-block {
		@include media-breakpoint-down(md) {
			padding-top: 2rem;
		}

		@include media-breakpoint-up(md) {
			max-width: 75rem;
		}
	}

	.col-w-btn {
		padding-top: 2rem;
	}

	.visual-block {
		position: relative;
		margin-bottom: 10rem;
		padding: 6.2rem 4rem 0 4rem;
		color: $white;
		background: rgb(1, 82, 109);
		background: linear-gradient(198deg, rgba(1, 82, 109, 1) 0%, rgba(0, 108, 136, 1) 100%);
		overflow: hidden;

		@include media-breakpoint-up(lg) {
			padding: 7.5rem 2.6rem 0 7rem;
		}

		@include media-breakpoint-down(md) {
			margin-left: -2rem;
			margin-right: -2rem;
			margin-bottom: 8rem;
		}

		&::before {
			content: "";
			position: absolute;
			right: -50%;
			top: -50%;
			width: 1090px;
			height: 1090px;
			background: radial-gradient(50% 50% at 50% 50%, #0084a2 0%, rgba(0, 132, 162, 0) 100%);
			border-radius: 50%;
		}

		.h2 {
			margin-bottom: 5.2rem;
			line-height: 1.2;
			font-family: 'Oswald';
			text-transform: uppercase;
			@include media-breakpoint-down(md) {
				margin-bottom: 2.4rem;
			}
		}

		.row {
			position: relative;
			z-index: 2;
		}

		.content-holder {
			padding-bottom: 4rem;

			@include media-breakpoint-up(lg) {
				padding-bottom: 10rem;
			}
		}

		.img-holder {
			max-width: 35rem;
			margin: auto;

			img {
				width: 100%;
				height: auto;
			}
		}
	}
}
</style>
