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
		<div class="products-section">
			<div class="container">
				<div class="row">
					<div v-for="(item, index) in productsList" :key="index" class="col-md-6"><Card class="style2" :img="item.img" :category="item.category" :title="item.title" :description="item.description" :about-link="item.aboutLink" :card-img="item.cardImg" /></div>
				</div>
			</div>
		</div>
		<CustomerExperienceSection title="The perfect balance" img="img-022.jpg" :btn="{ title: 'About us', to: '/about' }" bg-color="#1C354C">
			<template #title
				>The perfect <br />
				balance</template
			>
			<template #text
				>Lorem ipsum dolor sit amet, <br />
				consectetur adipiscing elit. Aenean <br class="d-none d-md-block" />
				egestas in est ut aliquet</template
			>
		</CustomerExperienceSection>
		<ContactSection />
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection";
import ContactSection from "@/components/ContactSection";
import CustomerExperienceSection from "@/components/CustomerExperienceSection";
import Card from "@/components/Card";
import Products from "@/constants/products";

export default {
	name: "Products",
	components: {
		IntroSection,
		ContactSection,
		CustomerExperienceSection,
		Card
	},
	data() {
		return {
			productsList: []
		};
	},
	mounted() {
		this.productsList = Products;
	}
};
</script>

<style lang="scss" scoped>
.products-page {
	.intro-section {
		padding-bottom: 50px;
		@include media-breakpoint-down(md) {
			padding-top: 18rem;
			padding-bottom: 2rem;
		}
	}

	.products-section {
		padding-bottom: 8rem;

		@include media-breakpoint-down(md) {
			padding-bottom: 6rem;
		}

		.row {
			@include media-breakpoint-up(xl) {
				@include grid-gutter(4rem);
			}
		}

		.card {
			@include media-breakpoint-up(md) {
				margin-bottom: 4rem;
			}
		}
	}

	.contact-section {
		@include media-breakpoint-up(md) {
			padding-top: 13rem;
		}
	}
}
</style>
