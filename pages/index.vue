<template>
	<div class="home-page">
		<Intro-section>
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<h1 class="h1">
							Intelligent client engagement — <br />
							at scale
						</h1>
						<Button title="About us" class="btn-dark" type="nuxt-link" to="/contact">
							<template #icon>
								<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor" />
								</svg>
							</template>
						</Button>
					</div>
				</div>
			</div>
		</Intro-section>
		<Solutions :title="info.title" :text="info.text" :img="info.img" :img-mob="info.imgMob" :button="true" class="style-3" />
		<InformersSection />
		<CustomerExperienceSection img="img-021.jpg" bg-color="#09291A" :btn="{ title: 'Our labels', to: '/labels' }" />
		<OurPartners />
		<SolutionSection />
		<ContactSection />
	</div>
</template>

<script>
import OurPartners from "@/components/OurPartners";
import IntroSection from "@/components/IntroSection";
import Solutions from "@/components/Solutions";
import Button from "@/components/Button";
import SolutionSection from "@/components/SolutionSection";
import CustomerExperienceSection from "@/components/CustomerExperienceSection";
import ContactSection from "@/components/ContactSection";
import InformersSection from "@/components/InformersSection";

export default {
	components: { OurPartners, IntroSection, Button, CustomerExperienceSection, SolutionSection, ContactSection, Solutions, InformersSection },
	data() {
		return {
			info: {
				title: "We provide solutions that help your business grow",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.",
				img: "img-020.jpg",
				imgMob: "img-020.jpg"
			}
		};
	},
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
.home-page {
	.intro-section {
		color: $white;
		background: $purple;

		.h1 {
			margin-bottom: 8rem;

			@include media-breakpoint-down(md) {
				margin-bottom: 4rem;
			}
		}

		.btn {
			position: relative;
			background: linear-gradient(#00381d, #00381d) padding-box, linear-gradient(45deg, #001804, #b4d1b8) border-box;
			border: 0.1rem solid transparent;
		}
	}

	.our-partners {
		@include media-breakpoint-down(md) {
			padding-bottom: 2rem;
		}
	}
}
</style>
