<template>
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-xl-5">
					<strong class="logo">LOGO</strong>
					<SocialLinks color="white" hover-color="#ffdb1c" />
					<div class="text-holder">
						<p>Feel free to contact us at</p>
					</div>
					<a href="mailto:hello@tribalsquare.com" class="mail-link">hello@tribalsquare.com</a>
					<ul class="menu style-1 d-none d-xl-flex">
						<li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
						<li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
					</ul>
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
							</ul>
						</div>
						<div class="col-6 col-md-3 order-4 order-md-3">
							<ul class="menu style-2">
								<li v-for="(item, index) in menu[2]" :key="index">
									<nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
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
				<div class="col-12">
					<ul class="menu style-1 d-xl-none">
						<li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
						<li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";

export default {
	name: "Footer",
	components: {
		SocialLinks
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
						to: "/"
					},
					{
						title: "Contact",
						to: "/"
					}
				],
				[
					{
						title: "Products",
						to: "/"
					},
					{
						title: "Knock Knock",
						to: "/"
					},
					{
						title: "Coffee App",
						to: "/"
					},
					{
						title: "Digital Valet",
						to: "/"
					},
					{
						title: "HandsRepublic",
						to: "/"
					}
				],
				[
					{
						title: "Lables",
						to: "/"
					},
					{
						title: "TribalHands",
						to: "/"
					},
					{
						title: "Digital Chiefs",
						to: "/"
					},
					{
						title: "Powwows",
						to: "/"
					},
					{
						title: "Tribal Cyber",
						to: "/"
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
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.footer {
	padding-top: 10.6rem;
	padding-bottom: 10rem;
	color: $white;
	background: $cloud-burst;

	@include media-breakpoint-down(md) {
		padding-top: 5rem;
		padding-bottom: 4.5rem;
	}

	.logo {
		display: block;
		font-size: 4rem;
		line-height: 2;
		font-weight: 400;

		@include media-breakpoint-down(md) {
			font-size: 3.2rem;
		}
	}

	.social-links {
		margin-bottom: 14.3rem;

		@include media-breakpoint-down(xl) {
			margin-bottom: 7rem;
		}

		@include media-breakpoint-down(md) {
			margin-bottom: 3.3rem;
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
					margin-right: 4.1rem;

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
}
</style>
