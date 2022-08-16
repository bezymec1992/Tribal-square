<template>
	<div class="contact-page">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-lg-6">
					<div class="contact-page__body">
						<h1 class="contact-page__title">Get in touch</h1>
						<p class="contact-page__text">Feel free to contact us at</p>
						<a class="contact-page__email" href="mailto:hello@tribalsquare.com.com">hello@tribalsquare.com</a>
						<p class="contact-page__tag">Socials</p>
						<SocialLinks color="white" hover-color="#000000" hover-background="#FFDB1C" />
					</div>
				</div>
				<div class="col-12 col-lg-6">
					<div class="contact-page__wrapper">
						<div class="contact-page__wrapper-body">
							<h2 class="contact-page__wrapper-title">Use the form for easy start</h2>
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</div>
		<span class="ellipse ellipse-1"></span>
		<span class="ellipse ellipse-2"></span>
		<span class="ellipse ellipse-3"></span>
	</div>
</template>

<script>
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

export default {
	name: "Contact",
	components: {
		ContactForm,
		SocialLinks
	},
	layout: "without-footer",
	head() {
		return {
			bodyAttrs: {
				class: "header-white"
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.contact-page {
	position: relative;
	padding-top: 16rem;
	padding-bottom: 9rem;
	min-height: 100vh;
	min-height: calc(var(--vh, 1vh) * 100);
	background: $matisse;
	overflow: hidden;

	@include media-breakpoint-down(md) {
		padding-top: 10rem;
		padding-bottom: 4.3rem;
	}

	.ellipse {
		position: absolute;
		border-radius: 50%;

		&.ellipse-1 {
			top: -10%;
			left: -50%;
			width: 160rem;
			height: 160rem;
			background: radial-gradient(50% 50% at 50% 50%, #005570 0%, rgba(0, 85, 112, 0) 100%);
		}

		&.ellipse-2 {
			top: 50%;
			transform: translateY(-50%);
			right: 0;
			width: 108.9rem;
			height: 108.9rem;
			background: radial-gradient(50% 50% at 50% 50%, #005570 0%, rgba(0, 85, 112, 0) 100%);
		}

		&.ellipse-3 {
			top: -46%;
			right: -25%;
			width: 126.2rem;
			height: 117.6rem;
			background: radial-gradient(50% 50% at 50% 50%, #1f98be 0%, rgba(31, 152, 190, 0) 100%);
		}
	}

	.container {
		position: relative;
		z-index: 2;
	}

	&__title {
		color: $white;
		margin-bottom: 3rem;
		font-size: 4rem;
		line-height: 1.24;
		font-family: 'Oswald';
		text-transform: uppercase;
		@include media-breakpoint-up(xl) {
			margin-bottom: 6rem;
			font-size: 6.4rem;
			line-height: 1.19;
		}
	}
	&__text {
		color: $white;
		margin-bottom: 0.8rem;
		font-size: 1.6rem;
		line-height: 1.24;
		@include media-breakpoint-up(xl) {
			margin-bottom: 1rem;
			font-size: 2rem;
			line-height: 1.2;
		}
	}
	&__email {
		color: $white;
		font-size: 2.6rem;
		line-height: 1.24;
		@include media-breakpoint-up(md) {
			font-size: 3.2rem;
			line-height: 1.87;
		}

		&:hover {
			color: $candlelight;
		}
	}
	&__tag {
		color: $white;
		margin-top: 3.2rem;
		margin-bottom: 1.1rem;
		font-size: 1.6rem;
		line-height: 1.24;
		@include media-breakpoint-up(xl) {
			margin-top: 6rem;
			margin-bottom: 2.3rem;
			font-size: 2rem;
			line-height: 1.2;
		}
	}
	&__wrapper {
		background-color: $white;
		box-sizing: border-box;
		border-radius: 1.2rem;
		@include media-breakpoint-up(md) {
			max-width: 60rem;
		}
	}
	&__wrapper-body {
		padding: 5rem 4rem;

		@include media-breakpoint-down(md) {
			padding: 3rem 2rem;
		}
	}
	&__wrapper-title {
		margin-bottom: 2.4rem;
		font-size: 2.6rem;
		line-height: 1.23;
		font-family: 'Oswald';
		text-transform: uppercase;
		@include media-breakpoint-up(xl) {
			margin-bottom: 3.8rem;
			font-size: 3.2rem;
			line-height: 1.25;
		}
	}
	&__wrapper-subtitle {
		margin-bottom: 1rem;
		font-size: 1.8rem;
		line-height: 1.55;
		@include media-breakpoint-up(xl) {
			margin-bottom: 1.2rem;
			font-size: 2.2rem;
			line-height: 1.82;
		}
	}
	&__user-decision {
		margin-bottom: 2.4rem;
		display: flex;
		flex-direction: column;
		label {
			font-size: 1.6rem;
			line-height: 1.87;
			@include media-breakpoint-up(sm) {
				margin-right: 3.6rem;
			}
			@include media-breakpoint-up(xl) {
				margin-bottom: 4.9rem;
				font-size: 1.8rem;
				line-height: 1.66;
			}
		}
		input {
			margin-bottom: 1.5rem;
		}
		@include media-breakpoint-up(xl) {
			flex-direction: row;
		}
	}
	&__form {
		max-width: 52rem;
	}

	.social-links {
		margin-bottom: 4.3rem;
	}
}
</style>

<style lang="scss">
.contact-page {
	.input-group {
		.label {
			background: $white;
		}

		.form-control {
			background: $white;
		}
	}
}
</style>
