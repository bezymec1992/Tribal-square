<template>
	<footer class="footer">
		<div class="top">
			<div class="container">
				<div class="row">
					<div class="col-xl-5">
						<div class="text-holder">
							<p>Feel free to contact us at</p>
						</div>
						<a href="mailto:hello@tribalsquare.com" class="mail-link">hello@tribalsquare.com</a>
					</div>
					<div class="col-xl-7">
						<div class="row">
							<div class="col-6 col-md-3 order-1 order-md-1">
								<ul class="menu style-2">
									<li v-for="(item, index) in menu[0]" :key="index">
										<nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
									</li>
								</ul>
							</div>
							<div class="col-6 col-md-3 order-3 order-md-2">
								<ul class="menu style-2">
									<li v-for="(item, index) in menu[1]" :key="index">
										<nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
									</li>
									<li v-for="(item, index) in productsList" :key="index + item.title">
										<nuxt-link :to="item.aboutLink">{{ item.title }}</nuxt-link>
									</li>
								</ul>
							</div>
							<div class="col-6 col-md-3 order-4 order-md-3">
								<ul class="menu style-2">
									<li v-for="(item, index) in menu[2]" :key="index">
										<nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
									</li>
									<li v-for="(item, index) in labelsList" :key="index + item.title">
										<nuxt-link :to="item.nuxtLink">{{ item.title }}</nuxt-link>
									</li>
								</ul>
							</div>
							<div class="col-6 col-md-3 order-2 order-md-4">
								<ul class="menu style-2">
									<li v-for="(item, index) in menu[3]" :key="index">
										<nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bottom">
			<div class="container">
				<div class="row align-items-md-center">
					<div class="col-lg-6 d-md-flex align-items-lg-center">
						<strong class="logo">LOGO</strong>
						<SocialLinks color="#000000" hover-color="#000000" hover-background="#FFDB1C" />
					</div>

					<div class="col-lg-6 d-md-flex justify-content-lg-end">
						<ul class="menu style-1">
							<li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
							<li><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<GoTopBtn />
	</footer>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";
import GoTopBtn from "@/components/GoTopBtn";
import Products from "@/constants/products";
import LabelsBig from "@/constants/labelsBig";

export default {
	name: "Footer",
	components: {
		SocialLinks,
		GoTopBtn
	},
	data() {
		return {
			menu: [
				[
					{
						title: "Home",
						to: "/"
					},
					{
						title: "About",
						to: "/about"
					},
					{
						title: "Contact",
						to: "/contact"
					}
				],
				[
					{
						title: "Products",
						to: "/products"
					}
				],
				[
					{
						title: "Lables",
						to: "/labels"
					}
				],
				[
					{
						title: "Work with us",
						to: "/"
					},
					{
						title: "Find a partner",
						to: "/"
					},
					{
						title: "Partner with us",
						to: "/"
					}
				]
			],
			productsList: [],
			labelsList: []
		};
	},
	mounted() {
		this.productsList = Products;
		this.labelsList = LabelsBig;
	}
};
</script>

<style lang="scss" scoped>
.footer {
	padding-top: 10.6rem;
	color: $white;
	background: $tiber;

	@include media-breakpoint-down(md) {
		padding-top: 5rem;
	}

	.logo {
		display: block;
		margin-right: 10rem;
		font-size: 4rem;
		line-height: 2;
		font-weight: 400;
		line-height: 1;

		@include media-breakpoint-down(md) {
			margin-bottom: 1.6rem;
			font-size: 3.2rem;
		}
	}

	a {
		&:hover {
			color: $candlelight;
		}
	}

	.text-holder {
		margin-bottom: 1rem;
		font-size: 2rem;
		line-height: 1.2;

		@include media-breakpoint-down(md) {
			margin-bottom: 0.8rem;
			font-size: 1.6rem;
		}
	}

	.mail-link {
		display: inline-flex;
		margin-bottom: 7rem;
		font-size: 3.2rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 5.9rem;
			font-size: 2.6rem;
		}
	}

	.menu {
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 2rem;

		@include media-breakpoint-down(md) {
			font-size: 1.6rem;
		}

		&.style-1 {
			display: flex;

			li {
				&:not(:last-child) {
					margin-right: 7.5rem;

					@include media-breakpoint-down(md) {
						margin-right: 3.8rem;
					}
				}
			}
		}

		&.style-2 {
			@include media-breakpoint-down(xl) {
				margin-bottom: 6rem;
			}

			li {
				&:not(:last-child) {
					margin-bottom: 3rem;

					@include media-breakpoint-down(md) {
						margin-bottom: 2rem;
					}
				}
			}
		}
	}

	.top {
		padding-bottom: 7.4rem;

		@include media-breakpoint-down(md) {
			padding-bottom: 0.7rem;
		}
	}

	.bottom {
		padding-top: 4rem;
		padding-bottom: 4rem;
		color: $black;
		background: $white;

		@include media-breakpoint-down(md) {
			padding-top: 2.7rem;
			padding-bottom: 2.7rem;
		}

		.social-links {
			@include media-breakpoint-down(lg) {
				margin-bottom: 3.1rem;
			}
		}
	}
}
</style>
