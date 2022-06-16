<template>
<div class="our-partners">
    <div class="our-parnters">
		<div class="container">
			<h2 class="our-partners__title">Our partners</h2>
			<div class="our-partners__people row justify-content-sm-center">
				<div class="col-sm-auto col-xl-3">
					<img src="../assets/imgs/our-partners01.png" alt="partner-photo" width="310" height="380">
					<p class="our-partners__name">Black, Marvin</p>
					<p class="our-partners__job">Starbucks</p>
				</div>
				<div class="col-sm-auto col-xl-3">
					<img src="../assets/imgs/our-partners02.png" alt="partner-photo" width="310" height="380">
					<p class="our-partners__name">Cooper, Kristin</p>
					<p class="our-partners__job">MasterCard</p>
				</div>
				<div class="col-sm-auto  col-xl-3">
					<img src="../assets/imgs/our-partners03.png" alt="partner-photo" width="310" height="380">
					<p class="our-partners__name">Miles, Esther</p>
					<p class="our-partners__job">IBM</p>
				</div>
				<div class="col-sm-auto col-xl-3">
					<img src="../assets/imgs/our-partners04.png" alt="partner-photo" width="310" height="380">
					<p class="our-partners__name">Flores, Juanita</p>
					<p class="our-partners__job">L'Oréal</p>
				</div>
			</div>
		</div>
		<div class="our-partners__items container-fluid">
			<div class="row">
				<div class="our-partners__item col col-xs-auto d-flex justify-content-center">
					<picture>
						<source srcset="../assets/imgs/partners-logo01.png" media="(max-width: 420px)" width="128" height="85">
						<img src="../assets/imgs/partners-logo01.png" alt="partners-logo" width="180" height="120">
					</picture>
				</div>
				<div class="our-partners__item col col-xs-auto d-flex justify-content-center">
					<picture>
						<source srcset="../assets/imgs/partners-logo02.png" media="(max-width: 420px)" width="111" height="85">
						<img src="../assets/imgs/partners-logo02.png" alt="partners-logo" width="156" height="120">
					</picture>
				</div>
				<div class="our-partners__item col col-xs-auto d-flex justify-content-center">
					<picture>
						<source srcset="../assets/imgs/partners-logo03.png" media="(max-width: 420px)" width="94" height="85">
						<img src="../assets/imgs/partners-logo03.png" alt="partners-logo" width="132" height="120">
					</picture>
				</div>
				<div class="our-partners__item col col-xs-auto d-flex justify-content-center">
					<picture>
						<source srcset="../assets/imgs/partners-logo04.png" media="(max-width: 420px)" width="113" height="85">
						<img src="../assets/imgs/partners-logo04.png" alt="partners-logo" width="158" height="120">
					</picture>
				</div>
				<div class="our-partners__item col col-xs-auto d-flex justify-content-center">
					<picture>
						<source srcset="../assets/imgs/partners-logo05.png" media="(max-width: 420px)" width="208" height="85">
						<img src="../assets/imgs/partners-logo05.png" alt="partners-logo" width="293" height="120">
					</picture>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
    name: "OurPartners"
};
</script>

<style lang="scss" scoped>
.our-partners {
	padding: 100px 0;
	.our-partners__items {
		max-width: 116.3rem;
		border-bottom: 1px solid gray;
		padding-bottom: 70px;
		margin-top: 120px;
		@include media-breakpoint-down(md) {
				margin-top: 30px;
				padding-bottom: 10px;
				.our-partners__item {
					margin-bottom: 30px;
				}
			}
	}
	.container {
 		max-width: 133.9rem;
		.our-partners__people {
			@include media-breakpoint-down(md) {
				display: none;
			}
		}
		.our-partners__title {
		text-align: center;
		margin-bottom: 60px;
		@include media-breakpoint-down(md) {
				margin-bottom: 0px;
			}
		}

		.our-partners__name {
			margin-top: 30px;
			line-height: 4rem;
			font-size: 22px;
			font-weight: 400;
		}
		.our-partners__job {
			opacity: 0.5;
			font-size: 20px;
			line-height: 40px;
		}
 	}
	
}
</style>