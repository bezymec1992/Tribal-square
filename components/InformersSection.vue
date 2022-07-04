<template>
	<div class="section-informers">
		<div class="container">
			<div class="row">
				<div class="col-xl-4 d-none d-lg-block">
					<ul class="anchor-links">
						<li><a anchor-link="section-1" href="#">PRODUCTS</a></li>
						<li><a anchor-link="section-2" href="#">COMPANIES</a></li>
						<li><a anchor-link="section-3" href="#">WORK WITH US</a></li>
					</ul>
				</div>
				<div class="col-xl-8">
					<div class="products-informer" anchor-section="section-1">
						<div class="header d-flex align-items-center justify-content-between">
							<h3 class="h2">Discover our Products</h3>
							<Button title="VIEW ALL" class="btn-link d-none d-sm-inline-flex" type="nuxt-link" to="/products">
								<template #icon>
									<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
										<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
									</svg>
								</template>
							</Button>
						</div>
						<div class="row">
							<div v-for="(item, index) in productsList" :key="index" class="col-md-6">
								<Card class="style1" :img="item.img" :category="item.category" :title="item.title" :description="item.description" :about-link="item.aboutLink" />
							</div>
							<div class="col-12 d-flex justify-content-center d-md-none col-w-btn">
								<Button title="VIEW ALL" class="btn-link" type="nuxt-link" to="/products">
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

					<div class="products-informer" anchor-section="section-2">
						<div class="header d-flex align-items-center justify-content-between">
							<h3 class="h2">Labels Overview</h3>
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
							<div class="col-12">
								<div v-for="(item, index) in labelsList" :key="index" class="col-12">
									<CardLable class="style1" :svg-title="item.svgTitle" :title="item.title" :description="item.description" :type="item.type" :topic="item.topic" :website-link="item.websiteLink" :img="item.img" card-style="style1">
										<template #svg-title>
											{{ svgTitle }}
										</template>
									</CardLable>
								</div>
							</div>
							<div class="col-12 d-flex justify-content-center d-md-none col-w-btn">
								<Button title="VIEW ALL" class="btn-link" type="nuxt-link" to="/products">
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
						<TxtBlock />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Products from "@/constants/products";
import Labels from "@/constants/Labels";
import CardLable from "@/components/CardLable";
import TxtBlock from "@/components/TxtBlock";

export default {
	name: "InformersSection",
	components: {
		Button,
		Card,
		CardLable,
		TxtBlock
	},
	data() {
		return {
			productsList: [],
			labelsList: []
		};
	},
	mounted() {
		this.productsList = Products;
		this.labelsList = Labels;

		window.addEventListener("scroll", this.handleScroll);
		this.handleScroll();
		this.scrollTo();
	},

	methods: {
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

	.anchor-links {
		margin: 0 0 6rem 0;
		padding: 0;
		list-style: none;

		@include media-breakpoint-up(xl) {
			position: sticky;
			top: 1rem;
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
					transform: translateY(-50%) translateX(-2rem);
					width: 1.4rem;
					height: 1.4rem;
					background-image: url("data:image/svg+xml,%3Csvg width='14' height='16' viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.5 15.25L12.5 8.25L5.5 1.25' stroke='%23500AC9'/%3E%3Cpath d='M12.5 8.25L0 8.25' stroke='%23500AC9'/%3E%3C/svg%3E%0A");
					opacity: 0;
					transition: $transition;
				}

				&.active {
					padding-left: 3.2rem;
					color: $purple;

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
}
</style>
