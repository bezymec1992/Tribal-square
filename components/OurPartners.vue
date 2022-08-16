<template>
	<div class="our-partners">
		<div v-if="peopleIsShow" class="container">
			<h2 class="our-partners__title h2">Our partners</h2>
			<div class="our-partners__people row justify-content-sm-center">
				<div class="partners__people col-sm-auto col-xl-3">
					<img src="../assets/imgs/our-partners01.png" alt="partner-photo" width="310" height="380" />
					<p class="our-partners__name">Black, Marvin</p>
					<p class="our-partners__job">Starbucks</p>
				</div>
				<div class="partners__people col-sm-auto col-xl-3">
					<img src="../assets/imgs/our-partners02.png" alt="partner-photo" width="310" height="380" />
					<p class="our-partners__name">Cooper, Kristin</p>
					<p class="our-partners__job">MasterCard</p>
				</div>
				<div class="partners__people col-sm-auto col-xl-3">
					<img src="../assets/imgs/our-partners03.png" alt="partner-photo" width="310" height="380" />
					<p class="our-partners__name">Miles, Esther</p>
					<p class="our-partners__job">IBM</p>
				</div>
				<div class="partners__people col-sm-auto col-xl-3">
					<img src="../assets/imgs/our-partners04.png" alt="partner-photo" width="310" height="380" />
					<p class="our-partners__name">Flores, Juanita</p>
					<p class="our-partners__job">L'Oréal</p>
				</div>
			</div>
		</div>
		<div class="our-partners__items container-fluid">
			<div class="row">
				<div class="our-partners__item col col-xs-auto d-flex justify-content-center">
					<picture>
						<source srcset="../assets/imgs/partners-logo01.png" media="(max-width: 575px)" width="128" height="85" />
						<img src="../assets/imgs/partners-logo01.png" alt="partners-logo" width="180" height="120" />
					</picture>
				</div>
				<div class="our-partners__item col col-xs-auto d-flex justify-content-center">
					<picture>
						<source srcset="../assets/imgs/partners-logo02.png" media="(max-width: 575px)" width="111" height="85" />
						<img src="../assets/imgs/partners-logo02.png" alt="partners-logo" width="156" height="120" />
					</picture>
				</div>
				<div class="our-partners__item col col-xs-auto d-flex justify-content-center">
					<picture>
						<source srcset="../assets/imgs/partners-logo03.png" media="(max-width: 575px)" width="94" height="85" />
						<img src="../assets/imgs/partners-logo03.png" alt="partners-logo" width="132" height="120" />
					</picture>
				</div>
				<div class="our-partners__item col col-xs-auto d-flex justify-content-center">
					<picture>
						<source srcset="../assets/imgs/partners-logo04.png" media="(max-width: 575px)" width="113" height="85" />
						<img src="../assets/imgs/partners-logo04.png" alt="partners-logo" width="158" height="120" />
					</picture>
				</div>
				<div class="our-partners__item col col-xs-auto d-flex justify-content-center">
					<picture>
						<source srcset="../assets/imgs/partners-logo05.png" media="(max-width: 575px)" width="208" height="85" />
						<img src="../assets/imgs/partners-logo05.png" alt="partners-logo" width="293" height="120" />
					</picture>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "OurPartners",
	props: {
		peopleIsShow: {
			type: Boolean,
			default: true
		}
	}
};
</script>

<style lang="scss" scoped>
.our-partners {
	padding: 10rem 0 0 0;
	background: $white;
	.h2	{
		font-family: 'Oswald';
		text-transform: uppercase;
	}
	.our-partners__items {
		max-width: 116.3rem;
		padding-bottom: 7rem;
		padding-top: 6rem;
		@include media-breakpoint-down(md) {
			padding-top: 3rem;
			padding-bottom: 1rem;
			.our-partners__item {
				margin-bottom: 3rem;
			}
		}
	}
	.container {
		max-width: 133.9rem;
		.our-partners__people {
			.partners__people img {
				width: 100%;
				height: auto;
			}
			.partners__people {
				margin-bottom: 6rem;
			}
			@include media-breakpoint-down(md) {
				display: none;
			}
		}
		.our-partners__title {
			text-align: center;
			margin-bottom: 6rem;
			@include media-breakpoint-down(md) {
				margin-bottom: 0rem;
			}
		}

		.our-partners__name {
			margin-top: 3rem;
			line-height: 1.27;
			font-size: 22px;
			font-weight: 500;
		}
		.our-partners__job {
			opacity: 0.5;
			font-size: 2rem;
			line-height: 1.27;
		}
	}

	&.cp-border-bottom {
		.our-partners__items {
			padding-bottom: 10rem;

			@include media-breakpoint-down(md) {
				padding-bottom: 0;
			}

			.row {
				padding-bottom: 7rem;
				border-bottom: 0.1rem solid rgba($black, 0.2);

				@include media-breakpoint-down(md) {
					padding-bottom: 4rem;
				}
			}
		}
	}
}
</style>
