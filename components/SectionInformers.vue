<template>
	<div class="section-informers">
		<div class="container">
			<div class="row">
				<div class="col-xl-4 d-none d-lg-block">
					<ul class="anchor-links">
						<li><a href="#">PRODUCTS</a></li>
						<li><a href="#">COMPANIES</a></li>
						<li><a href="#">WORK WITH US</a></li>
					</ul>
				</div>
				<div class="col-xl-8">
					<div class="products-informer">
						<div class="header d-flex align-items-center justify-content-between">
							<h3 class="h2">Discover our Products</h3>
							<Button title="VIEW ALL" class="btn-link d-none d-sm-inline-flex" type="nuxt-link" to="/products">
								<template #icon>
									<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
										<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
									</svg>
								</template>
							</Button>
						</div>
						<div class="row">
							<div class="col-md-6">
								<Card />
							</div>
							<div class="col-md-6"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button";
import Card from "@/components/Card";

export default {
	name: "SectionInformers",
	components: {
		Button,
		Card
	}
};
</script>

<style lang="scss" scoped>
.section-informers {
	padding-top: 14rem;
	padding-bottom: 16rem;

	@include media-breakpoint-down(md) {
		padding-top: 8rem;
		padding-bottom: 10rem;
	}

	.anchor-links {
		margin: 0 0 6rem 0;
		padding: 0;
		list-style: none;

		li {
			&:not(:last-child) {
				margin-bottom: 6rem;
			}

			a {
				font-size: 2.2rem;
				color: rgba($black, 0.5);
			}
		}
	}

	.header {
		margin-bottom: 3.2rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2rem;
		}

		.h2 {
			margin-bottom: 0;
		}

		.btn-link {
			padding: 0;
		}
	}
}
</style>
