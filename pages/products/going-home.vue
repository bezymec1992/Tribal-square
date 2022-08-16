<template>
	<div class="product-page">
		<Intro-section class="product-page">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs />
					</div>
				</div>
				<div class="row align-items-md-center">
					<div class="col-lg-7">
						<h1 class="h1">Going Home</h1>
						<div class="text-holder">
							<p class="product__main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac</p>
						</div>
					</div>
					<div class="col-lg-5 d-md-flex justify-content-lg-end">
						<Button title="Visit website" class="btn-dark" type="link" href="/">
							<template #icon>
								<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="CurrentColor" />
								</svg>
							</template>
						</Button>
					</div>
				</div>
			</div>
		</Intro-section>
		<MainImg :img="{ desktop: 'img-079.jpg', mobile: 'img-080.jpg' }" />

		<SectionTwoTextCols first-title="Idea" :first-text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ']" second-title="Assets" :second-text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ']" />

		<SecondImg :img="{ desktop: 'img-081.jpg', mobile: 'img-082.jpg' }" :section-style="'max-width: 124.2rem'" />

		<SectionThreeCols title="Tagret audience" :paragraphs="['Small car companies', 'Different car dealers', 'Other car companies']" />

		<SectionLocation />

		<TextBlock title="Here should be additional info about the product" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege." />

		<BlockToSite :img="{ desktop: 'img-085.jpg', tablet: 'img-086.jpg', alt: 'partners img' }" :btn="{ href: '/' }" />

		<DiscoverProducts />

		<ContactSection />
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection";
// import Discover from "@/components/Discover";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTwoTextCols from "@/components/SectionTwoTextCols";
import SectionThreeCols from "@/components/ProductPage/SectionThreeCols";
import BlockToSite from "@/components/ProductPage/BlockToSite";
import TextBlock from "@/components/ProductPage/TextBlock";
import DiscoverProducts from "@/components/ProductPage/DiscoverProducts";
import MainImg from "@/components/ProductPage/MainImg";
import SecondImg from "@/components/ProductPage/SecondImg";
// import SectionVideo from "@/components/ProductPage/SectionVideo";
import SectionLocation from "@/components/SectionLocation";

export default {
	name: "GoingHome",
	components: {
		// Discover,
		IntroSection,
		Button,
		ContactSection,
		Breadcrumbs,
		SectionTwoTextCols,
		SectionThreeCols,
		BlockToSite,
		TextBlock,
		DiscoverProducts,
		MainImg,
		SecondImg,
		// SectionVideo,
		SectionLocation
	}
};
</script>

<style lang="scss" scoped>
.second-img {
	padding-top: 5rem;
	padding-bottom: 2rem;
	font-family: 'Oswald';
	text-transform: uppercase;
	@include media-breakpoint-up(md) {
		padding-top: 10rem;
		padding-bottom: 8rem;
	}
}
</style>
