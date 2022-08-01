<template>
    <div class="juridische-handjes">
        <Intro-section class="label-page">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs />
					</div>
				</div>
				<div class="row align-items-md-center">
					<div class="col-lg-6">
						<h1 class="h1">Juridische Handjes</h1>
						<div class="text-holder">
							<p class="product__main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac</p>
						</div>
						<Button title="Visit website" class="btn-dark" type="link" href="/">
							<template #icon>
								<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor" />
								</svg>
							</template>
						</Button>
					</div>
					<div class="col-lg-6">
						<div class="img-holder">
							<picture>
								<source srcset="@/assets/imgs/img-0019.jpg" media="(min-width: 768px)" type="image/jpg" />
								<img src="@/assets/imgs/img-0020.jpg" alt="Powwows" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</Intro-section>

		<SectionTwoTextCols first-title="About the label" :first-text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ']" :second-text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ']" />

		<div class="back-section">
			<p>
				With our support <br/>
				you can keep focus <br/>
				on what you are <br/>
				good at
			</p>
		</div>

		<TextBlock title="What do we do at core" :description="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.']" />

		<SectionInfoBlock :img="{ desktop: 'img-0023.jpg', mobile: 'img-0024.jpg', alt: 'Services we provide' }" :btn="{ href: '/' }">
			<template #title>
				Services we <br/> provide
			</template>
			<template #list>
				<div class="row">
					<div class="col-12">
						<ul>
							<li>Contracten & Voorwaarden</li>
							<li>Werk, Inkomen & Belasting</li>
                            <li>Vergunningen & Bezwaren</li>
                            <li>Ondernemers</li>
							<li>Advies / Overig</li>
						</ul>
					</div>
				</div>
			</template>
		</SectionInfoBlock >

		<SectionSlogan>
			<template #title>
				This is a place for a final <br class="d-none d-md-block" />
				slogan about this label
			</template>
		</SectionSlogan>

        <NextLabel :label="{ title: 'TribalHands', text: 'This is a place of a short description of the website and about what we do there.' }" :img="{ desktop: 'img-018.jpg', mobile: 'img-044.jpg', alt: 'TribalHands' }" />
    </div>
</template>

<script>
import IntroSection from "@/components/IntroSection";
import Button from "@/components/Button";
import TextBlock from "@/components/LabelPage/TextBlock";
import SectionInfoBlock from "@/components/LabelPage/SectionInfoBlock";
import SectionSlogan from "@/components/LabelPage/SectionSlogan";
import NextLabel from "@/components/NextLabel";

export default {
	name: "juridische-handjes",
	components: {
		IntroSection,
        Button,
		TextBlock,
		SectionInfoBlock,
		SectionSlogan,
		NextLabel,
    }
}
</script>

<style lang="scss" scoped>
.juridische-handjes {
        background: white;
        .back-section {
			font-size: 5rem;
			line-height: 5.6rem;
			padding-left: 8rem;
			padding-top: 25.5rem;
			height: 70rem;
			width: 134rem;
			max-width: 100%;
			margin: 0 auto;
			background: url('@/assets/imgs/img-0021.jpg') no-repeat right;
			background-size: cover;
			margin-top: 8rem;
			margin-bottom: 16rem;
			@include media-breakpoint-down(md) {
				background: url('@/assets/imgs/img-0022.jpg') no-repeat bottom;
				background-size: cover;
				padding-left: 2rem;
				padding-top: 5rem;
				font-size: 2.8rem;
				line-height: 3.5rem;
				margin-bottom: 8rem;
			}
		}
    }
</style>