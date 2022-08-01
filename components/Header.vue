<template>
	<header class="header">
		<div class="container">
			<strong class="logo">
				<nuxt-link to="/">Logo</nuxt-link>
			</strong>

			<nav class="main-nav">
				<ul class="main-menu d-none d-lg-flex">
					<li v-for="(item, index) in menu" :key="index">
						<nuxt-link :to="item.to" exact-active-class="active">{{ item.title }}</nuxt-link>
					</li>
				</ul>

				<div class="mobile-content d-lg-none">
					<ul class="mobile-menu">
						<li @click="menuClose">
							<nuxt-link to="/" exact-active-class="active">Home</nuxt-link>
						</li>
						<li @click="menuClose">
							<nuxt-link to="/about" exact-active-class="active">About</nuxt-link>
						</li>
						<li class="accordion">
							<span class="accordion-title"
								>Products
								<div class="icon-holder">
									<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 0V14H16" stroke="black" stroke-width="1.5" />
										<path d="M1 14L15 0.93335" stroke="black" stroke-width="1.5" />
									</svg>
								</div>
							</span>
							<div class="accordion-content">
								<ul class="inner-menu">
									<li @click="menuClose">
										<nuxt-link to="/products">All products overview</nuxt-link>
									</li>
									<li @click="menuClose">
										<nuxt-link to="/">Knock Knock</nuxt-link>
									</li>
									<li @click="menuClose">
										<nuxt-link to="/">Coffee App</nuxt-link>
									</li>
									<li @click="menuClose">
										<nuxt-link to="/">Digital Valet </nuxt-link>
									</li>
									<li @click="menuClose">
										<nuxt-link to="/">HandsRepublic</nuxt-link>
									</li>
								</ul>
							</div>
						</li>
						<li class="accordion">
							<span class="accordion-title"
								>Labels
								<div class="icon-holder">
									<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 0V14H16" stroke="black" stroke-width="1.5" />
										<path d="M1 14L15 0.93335" stroke="black" stroke-width="1.5" />
									</svg>
								</div>
							</span>
							<div class="accordion-content">
								<ul class="inner-menu">
									<li @click="menuClose">
										<nuxt-link to="/labels">All labels overview</nuxt-link>
									</li>
									<li @click="menuClose">
										<nuxt-link to="/">TribalHands</nuxt-link>
									</li>
									<li @click="menuClose">
										<nuxt-link to="/">Digital Chiefs</nuxt-link>
									</li>
									<li @click="menuClose">
										<nuxt-link to="/labels/powwows">Powwows</nuxt-link>
									</li>
									<li @click="menuClose">
										<nuxt-link to="/">Tribal Cyber</nuxt-link>
									</li>
								</ul>
							</div>
						</li>
						<li @click="menuClose">
							<nuxt-link to="/partner" exact-active-class="active">For partners</nuxt-link>
						</li>
						<li @click="menuClose">
							<nuxt-link to="/contact" exact-active-class="active">Contact</nuxt-link>
						</li>
					</ul>
					<div class="bottom">
						<SocialLinks hover-color="white" hover-background="#500AC9" />
						<ul class="bottom-menu">
							<li @click="menuClose">
								<nuxt-link to="/">Terms & Conditions</nuxt-link>
							</li>
							<li @click="menuClose"><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
						</ul>
					</div>
				</div>
			</nav>
			<a class="open-menu d-lg-none" :class="{ open: menuOpen }" href="#" @click.prevent="toggleMenu">
				<span></span>
				<span></span>
				<span class="visually-hidden">Open Mobile Nav</span>
			</a>
		</div>
	</header>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";

export default {
	name: "Header",
	components: {
		SocialLinks
	},
	data() {
		return {
			menuOpen: false,
			menu: [
				{
					title: "About",
					to: "/about"
				},
				{
					title: "Products",
					to: "/products"
				},
				{
					title: "Labels",
					to: "/labels"
				},
				{
					title: "For partners",
					to: "/partner"
				},
				{
					title: "Contact",
					to: "/contact"
				}
			]
		};
	},

	mounted() {
		this.initAccordions();
	},

	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen;

			if (this.menuOpen) {
				document.body.classList.add("menu-opened");
			} else {
				document.body.classList.remove("menu-opened");
			}
		},
		menuClose() {
			this.menuOpen = false;
			document.body.classList.remove("menu-opened");
		},
		initAccordions() {
			const accordions = document.querySelectorAll(".accordion");
			const accordionsDescription = document.querySelectorAll(".accordion-content");

			if (accordions) {
				function heightDelete(arrayOfItems) {
					// for (item of arrayOfItems) {
					// 	item.style.maxHeight = null;
					// }

					arrayOfItems.forEach((item) => {
						item.style.maxHeight = null;
					});
				}

				function deleteClass(arrayOfItems, clasName) {
					// for (item of arrayOfItems) {
					// 	item.classList.remove(clasName);
					// }

					arrayOfItems.forEach((item) => {
						item.classList.remove(clasName);
					});
				}

				accordions.forEach(function (item) {
					item.children[0].addEventListener("click", function (e) {
						e.preventDefault();

						const itemParent = this.parentElement;

						if (itemParent.classList.contains("open")) {
							itemParent.classList.remove("open");
							itemParent.children[1].style.maxHeight = null;
						} else {
							deleteClass(accordions, "open");
							itemParent.classList.add("open");
							heightDelete(accordionsDescription);
							itemParent.children[1].style.maxHeight = itemParent.children[1].scrollHeight + "px";
						}
					});

					if (item.classList.contains("open")) {
						item.children[1].style.maxHeight = item.children[1].scrollHeight + "px";
					}
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	position: absolute;
	width: 100%;
	padding-top: 2.4rem;
	padding-bottom: 2.4rem;
	border-bottom: solid 0.1rem rgba($black, 0.2);
	z-index: 2;

	.menu-opened & {
		z-index: 100;
	}

	@include media-breakpoint-down(md) {
		padding-top: 1.45rem;
		padding-bottom: 1.45rem;
	}

	> .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		position: relative;
		font-family: $pontiff-wide;
		font-size: 4rem;
		text-transform: uppercase;
		z-index: 100;

		@include media-breakpoint-down(md) {
			font-size: 2.4rem;
		}
	}

	.main-nav {
		@include media-breakpoint-down(lg) {
			position: fixed;
			top: 9.6rem;
			left: 0;
			display: flex;
			flex-direction: column;
			width: 100%;
			height: calc(100% - 9.6rem);
			padding: 5.6rem 2rem;
			background: $aqua-haze;
			color: $black;
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
			z-index: 99;
			overflow: auto;
			transition: $transition;
		}

		@include media-breakpoint-down(md) {
			top: 7rem;
			height: calc(100% - 7rem);
		}

		.menu-opened & {
			@include media-breakpoint-down(lg) {
				opacity: 1;
				visibility: visible;
				pointer-events: all;
			}
		}

		.main-menu {
			margin: 0;
			padding: 0;
			list-style: none;
			font-size: 2rem;

			@include media-breakpoint-up(lg) {
				display: flex;
			}

			li {
				&:not(:last-child) {
					margin-right: 4rem;
				}
			}

			a {
				position: relative;
				display: inline-block;

				&:after {
					content: "";
					position: absolute;
					width: 100%;
					transform: scaleX(0);
					height: 0;
					bottom: -0.3rem;
					left: 0;
					border-bottom: 0.2rem solid;
					transform-origin: bottom right;
					transition: transform 0.25s ease-out;
				}

				&:hover {
					&:after {
						transform: scaleX(1);
						transform-origin: bottom left;
					}
				}

				&.active {
					&:after {
						transform: scaleX(1);
						transform-origin: bottom left;
					}
				}
			}
		}

		.mobile-content {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.bottom {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding-top: 8rem;

				.social-links {
					margin-bottom: 3.5rem;
				}
			}
		}

		.mobile-menu {
			width: 100%;
			margin: 0;
			padding: 0;
			list-style: none;
			font-size: 2.4rem;
			font-weight: 500;

			> li {
				&:not(:last-child) {
					border-bottom: 0.1rem solid rgba($black, 0.2);
				}

				> a {
					display: flex;
					padding: 1rem 0;
				}
			}

			a {
				&.active {
					color: $purple;
				}
			}

			.accordion {
				.icon-holder {
					transition: $transition;
				}

				&.open {
					padding-bottom: 2.4rem;

					.icon-holder {
						transform: rotate(90deg);
					}
				}
			}

			.accordion-content {
				max-height: 0;
				overflow: hidden;
				transition: $transition;
			}

			.accordion-title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 1rem 0;
				cursor: pointer;
			}

			.inner-menu {
				margin: 0;
				padding: 1rem 0 0 0;
				list-style: none;
				font-size: 2rem;
				color: rgba($black, 0.5);

				li {
					&:not(:last-child) {
						margin-bottom: 2.7rem;
					}

					&:hover {
						color: rgba($black, 1);
					}
				}
			}
		}

		.bottom-menu {
			display: flex;
			margin: 0;
			padding: 0;
			list-style: none;
			font-size: 1.7rem;
			white-space: nowrap;

			li {
				&:not(:last-child) {
					margin-right: 3.8rem;
				}
			}
		}
	}

	.open-menu {
		position: relative;
		width: 4rem;
		height: 4rem;
		display: block;
		font-size: 0;
		line-height: 0;
		z-index: 100;

		span {
			position: absolute;
			top: 50%;
			left: 0;
			width: 100%;
			border-bottom: 0.3rem solid;
			height: 0;
			transition: $transition;

			&:nth-child(1) {
				margin-top: -0.5rem;

				.menu-opened & {
					margin-top: 0;
					transform: rotate(45deg);
				}
			}

			&:nth-child(2) {
				margin-top: 0.5rem;

				.menu-opened & {
					margin-top: 0;
					transform: rotate(-45deg);
				}
			}
		}
	}

	.header-white & {
		color: $white;
		background: transparent;
		border-bottom: solid 0.1rem rgba($white, 0.2);
	}
}
</style>
