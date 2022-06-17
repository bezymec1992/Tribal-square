<template>
	<div class="home-page">
		<Intro-section>
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<h1 class="h1">Intelligent client engagement—at scale</h1>
						<div class="text-holder">
							<p>
								Lorem ipsum dolor sit amet, consectetur <br class="d-none d-md-block" />
								adipiscing elit. Aenean egestas in est ut aliquet
							</p>
						</div>

						<Button title="ABOUT US" class="btn-warning">
							<template #icon>
								<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
									<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
								</svg>
							</template>
						</Button>
					</div>
				</div>
			</div>
		</Intro-section>
		<OurPartners />
	</div>
</template>

<script>
import OurPartners from "@/components/OurPartners";
import IntroSection from "@/components/IntroSection";
import Button from "@/components/Button.vue";
export default { components: { OurPartners, IntroSection, Button } };
</script>

<style lang="scss" scoped>
.home-page {
	.intro-section {
		color: $white;
		background: $purple;
	}
}
</style>
