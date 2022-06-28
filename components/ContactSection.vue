<template>
	<div class="contact-section">
		<div class="container">
			<div class="row align-items-md-end">
				<div class="col-lg-5">
					<h2 class="h2">
						Ready to start <br />
						right now?
					</h2>
					<div class="text-holder d-none d-md-block">
						<p>
							Fill in the form and we will contact <br />
							you as soon as possible
						</p>
					</div>
				</div>
				<div class="col-lg-7 d-flex justify-content-lg-end">
					<ContactForm />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
	name: "ContactSection",
	components: {
		ContactForm
	}
};
</script>

<style lang="scss" scoped>
.contact-section {
	padding-top: 6rem;
	padding-bottom: 10.8rem;
	background: $aqua-haze;

	@include media-breakpoint-down(md) {
		padding-top: 6rem;
		padding-bottom: 6rem;
	}

	.container {
		max-width: 100.7rem;
	}

	.h2 {
		margin-bottom: 3.2rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 3rem;
		}
	}

	.text-holder {
		font-size: 1.8rem;
		line-height: 1.66;

		@include media-breakpoint-up(md) {
			padding-bottom: 8rem;
		}
	}

	.contact-form {
		@include media-breakpoint-up(md) {
			max-width: 52rem;
		}
	}
}
</style>
