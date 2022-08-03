<template>
    <div class="tribal-hands">
        <Intro-section class="label-page">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs />
					</div>
				</div>
				<div class="row align-items-md-center">
					<div class="col-lg-6">
						<h1 class="h1">TribalHands</h1>
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
								<source srcset="@/assets/imgs/img-0033.jpg" media="(min-width: 768px)" type="image/jpg" />
								<img src="@/assets/imgs/img-044.jpg" alt="Powwows" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</Intro-section>

		<SectionTwoTextCols first-title="About the label" :first-text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ']" :second-text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ']" />

        <SectionImg :img="{ desktop: 'img-0037.jpg', mobile: 'img-0038.jpg', alt: 'TribalDen img' }" />

		<TextBlock title="What do we do at core" :description="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.']" />


		<div class="aa">
			<div class="test">
				<div class="container">
					<div class="row g-0 d-flex flex-md-row-reverse">
						<div class="col-12 col-md-6 align-items-center">
						<div class="test__content">
							<h2 class="h3 test__title">Technologies we use</h2>
							<div class="test__text">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Aenean egestas in est ut aliquet:
							</p>
							</div>
							<ul class="test__list">
							<li class="test__item">Full-Stack Apps</li>
							<li class="test__item">Data-Intensive Apps</li>
							<li class="test__item">Artificial Intelligence</li>
							</ul>
						</div>
						</div>
						<div class="col-12 d-md-none">
						<img src="@/assets/imgs/img-0040.png" alt="img description" />
						</div>
					</div>
				</div>
      		</div>
		</div>

		<SectionInfoBlock :img="{ desktop: 'img-0035.png', mobile: 'img-0036.png', alt: 'Services we provide' }" :btn="{ href: '/' }">
			<template #title>
				Services we provide
			</template>
			<template #list>
				<div class="row">
					<div class="col-6">
						<ul>
							<li>Product Scope</li>
                            <li>MVP Builder</li>
						</ul>
					</div>
					<div class="col-6">
						<ul>
							<li>Dedicated Teams</li>
							<li>UI/UX</li>
						</ul>
					</div>
				</div>
			</template>
		</SectionInfoBlock >

		<SectionBlock video="video-01.mp4" :text="['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet.', 'Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.']">
			<template #title>
                Where can you <br/> find us?
			</template>
		</SectionBlock>

		

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
import SectionImg from "@/components/LabelPage/SectionImg";
import TextBlock from "@/components/LabelPage/TextBlock";
import SectionBlock from "@/components/LabelPage/SectionBlock";
import SectionInfoBlock from "@/components/LabelPage/SectionInfoBlock";
import SectionSlogan from "@/components/LabelPage/SectionSlogan";
import NextLabel from "@/components/NextLabel";
export default {
	name: "Tribal-hands",
	components: {
		IntroSection,
        Button,
		SectionImg,
		TextBlock,
		SectionBlock,
		SectionInfoBlock,
		SectionSlogan,
		NextLabel
    }
}
</script>

<style lang="scss" scoped>
	.tribal-hands {
		background: white;
	}

	.test {
		overflow: hidden;
		padding-bottom: 10rem;
		.container {
			padding-left: 0;
			padding-right: 0;
		}
		.row {
			max-width: 1340px;
			min-height: 460px;
			background-color: #EEF3F5;
			@include media-breakpoint-up(md) {
				background-repeat: no-repeat;
				background-image: url("@/assets/imgs/img-0039.png");
				background-position-x: center;
				background-size: cover;
				min-height: 660px;
			}
		}
		&__content {
			padding-top: 9.7rem;
			padding-bottom: 6.8rem;
			max-width: 48rem;
			@include media-breakpoint-down(md) {
				padding-bottom: 0;
				padding-top: 6rem;
				padding-left: 2rem;
				padding-right: 2rem;
			}
		}
		&__title {
			font-size: 32px;
			text-transform: uppercase;
			margin-bottom: 1.5rem;
			@include media-breakpoint-up(md) {
			margin-bottom: 2rem;
			max-width: 360px;
			}
		}
		&__text {
			margin-bottom: 2.8rem;
			width: 480px;
			max-width: 100%;
			font-size: 18px;
			line-height: 30px;
			@include media-breakpoint-up(md) {
				margin-bottom: 4rem;
				font-size: 22px;
				line-height: 40px;
			}
		}
		&__item {
			font-size: 22px;
			line-height: 28px;
			@include media-breakpoint-up(md) {
			margin-bottom: 3rem;
			font-size: 28px;
			line-height: 35px;
			}
		}
		&__item:not(:last-child) {
			margin-bottom: 3rem;
		}
		img {
			width: 100%;
			height: auto;
		}
	}
</style>