<template>
	<div class="how-it-work">
		<div class="wrapper-content">
			<div class="container">
				<h3 class="how-it-work__title text-center">How does it work</h3>
				<div class="row">
					<!-- How does it work section mobile-->
					<div class="col-12 col-md-6 d-md-none d-flex justify-content-center">
						<img class="how-it-work__desktop-img" src="@/assets/images/how-does-it-work-006.png" alt="image description" />
					</div>
					<div class="col-12 col-md-6 d-md-none text-center">
						<ul class="how-it-work__list list-unstyled">
							<li class="how-it-work__item">
								Create events for desirous
								<div class="hr-dashed"></div>
							</li>
							<li class="how-it-work__item">
								Looking for partner
								<div class="hr-dashed"></div>
							</li>
							<li class="how-it-work__item">
								Invest in ideas and companies
								<div class="hr-dashed"></div>
							</li>
							<li class="how-it-work__item">Create inner meeting</li>
						</ul>
					</div>

					<!-- How does it work section Desktop-->

					<div class="col-12 d-flex how-it-work__wrap">
						<div class="col-6 d-none d-md-flex how-it-work__desktop-left">
							<ul class="how-it-work__desktop-list list-unstyled">
								<li class="how-it-work__item">
									<p class="how-it-work__item-text">Create events for desirous</p>
									<div class="hr-dashed-img d-flex">
										<img src="@/assets/images/how-does-it-work-ellipse-007.svg" alt="ellipse" />
										<img src="@/assets/images/how-does-it-work-line-left-009.svg" alt="line" />
									</div>
								</li>
								<li class="how-it-work__item">
									<p class="how-it-work__item-text">Looking for partner</p>
									<div class="hr-dashed-img d-flex">
										<img src="@/assets/images/how-does-it-work-ellipse-007.svg" alt="ellipse" />
										<img src="@/assets/images/how-does-it-work-line-left-009.svg" alt="line" />
									</div>
								</li>
							</ul>
						</div>

						<div class="col-6 d-none d-md-flex how-it-work__desktop-right">
							<ul class="how-it-work__desktop-list-right list-unstyled">
								<li class="how-it-work__item how-it-work__item-right">
									<p class="how-it-work__item-text-right">Invest in ideas and companies</p>

									<div class="hr-dashed-img d-flex">
										<img src="@/assets/images/how-does-it-work-line-right-008.svg" alt="line" />
										<img src="@/assets/images/how-does-it-work-ellipse-007.svg" alt="ellipse" />
									</div>
								</li>
								<li class="how-it-work__item how-it-work__item-right">
									<p class="how-it-work__item-text-right">Create inner meetings</p>
									<div class="hr-dashed-img d-flex">
										<img src="@/assets/images/how-does-it-work-line-right-008.svg" alt="line" />
										<img src="@/assets/images/how-does-it-work-ellipse-007.svg" alt="ellipse" />
									</div>
								</li>
							</ul>
						</div>
						<div class="col-12 d-none d-md-flex how-it-work__visual justify-content-center">
							<img class="how-it-work__img" src="@/assets/images/how-does-it-work-006.png" alt="image description" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HowItWork"
};
</script>

<style lang="scss" scoped>
.how-it-work {
	.wrapper-content {
		background-color: $aqua-haze;
		padding: 6rem 0 4rem;

		@include media-breakpoint-up(md) {
			padding: 4rem 0 1rem;
		}
		@include media-breakpoint-up(lg) {
			padding: 7rem 3.5rem 1rem;
		}
		@include media-breakpoint-up(xl) {
			max-width: 130rem;
			margin: auto;
			border-radius: 1.2rem;
			padding: 7rem 7.3rem 0;
		}
	}

	&__wrap {
		position: relative;
		@include media-breakpoint-up(md) {
			padding: 0 4rem;
		}
	}
	&__title {
		margin-bottom: 2.4rem;
		font-size: 2.4rem;
		line-height: 1.24;
		@include media-breakpoint-up(md) {
			margin-bottom: 7rem;
			font-size: 4rem;
			line-height: 1;
		}
	}
	&__desktop-right {
		flex-direction: row-reverse;
	}
	&__visual {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);

		@include media-breakpoint-up(xxl) {
			top: -12%;
			width: 113%;
		}
	}
	&__img {
		max-width: 100%;
		height: auto;
		@include media-breakpoint-up(md) {
			width: 50%;
		}
	}
	&__desktop-img {
		width: 100%;
	}
	&__item {
		padding-bottom: 1.6rem;
		@include media-breakpoint-up(md) {
			margin-bottom: 8.8rem;
		}

		@include media-breakpoint-up(md) {
			padding: 0 1rem;
			position: relative;
		}
	}
	&__item-right {
		text-align: right;
		justify-content: right;
		display: flex;
		flex-direction: column;
		align-items: self-end;
		margin-bottom: 8.8rem;
	}
	&__item-text {
		font-size: 1.8rem;
		line-height: 2.22;

		@include media-breakpoint-up(md) {
			max-width: 53%;
		}
		@include media-breakpoint-up(lg) {
			font-size: 2.6rem;
			line-height: 1;
		}
	}
	&__item-text-right {
		font-size: 1.8rem;
		line-height: 2.22;

		@include media-breakpoint-up(md) {
			max-width: 52%;
		}
		@include media-breakpoint-up(lg) {
			max-width: 58%;
			font-size: 2.6rem;
			line-height: 1;
		}
	}

	.hr-dashed {
		height: 1px;
		background-size: 1.6rem 0.1rem;
		background-repeat: repeat-x;
		background-image: linear-gradient(to right, black 50%, rgba(255, 255, 255, 0) 0%);
		margin-top: 2rem;
		opacity: 20%;
		margin-left: 4rem;
		margin-right: 4rem;
	}
	.hr-dashed-img {
		display: flex;
		flex-direction: row;
	}
}
</style>
