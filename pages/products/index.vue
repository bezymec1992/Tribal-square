<template>
	<div class="products-page">
		<Intro-section>
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<h1 class="h1">Discover TribalSquare Products</h1>
						<div class="text-holder">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean <br class="d-none d-md-block" />
								egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta <br class="d-none d-md-block" />
								velit. Nulla facilisi. Phasellus at placerat felis. Intege.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Intro-section>
		<CustomerExperienceSection />
		<ContactSection />
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection";
import ContactSection from "@/components/ContactSection";
import CustomerExperienceSection from "@/components/CustomerExperienceSection";

export default {
	name: "Products",
	components: {
		IntroSection,
		ContactSection,
		CustomerExperienceSection
	}
};
</script>

<style lang="scss" scoped></style>
