<template>
	<div class="discover-products">
		<div class="container">
			<div class="discover-products__wrapper d-flex justify-content-around">
				<div class="discover-products__title-wrap">
					<h2 class="h2 discover-products__title">Discover more <br/> our Products</h2>
				</div>
				<div class="discover-products__items">
					<Discover v-for="item in productsList" :key="item.id" :title="item.category" :text="item.title" :img="item.img" :route="item.aboutLink" />
					<div class="col-12 d-flex justify-content-center pt-5">
						<Button title="VIEW ALL" class="btn-link" type="nuxt-link" to="/products" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Products from "@/constants/products";
export default {
	name: "DiscoverProducts",
	
	data() {
		return {
			productsList: [],
			
		};
	},
	mounted() {
		this.productsList = Products.slice(0, 4);
	}
};
</script>

<style lang="scss" scoped>
.discover-products {
	padding-bottom: 12rem;

	@include media-breakpoint-down(md) {
		padding-bottom: 8rem;
	}

	.discover-products__wrapper {
		@include media-breakpoint-down(lg) {
			flex-direction: column;
		}
		.discover-products__items {
			width: 100%;

			@include media-breakpoint-up(lg) {
				max-width: 55rem;
			}
		}
		.discover-products__title-wrap {
			max-width: 55rem;
			font-family: 'Oswald';
			text-transform: uppercase;
			.discover-products__title {
				@include media-breakpoint-down(md) {
					max-width: 21rem;
					font-size: 32px;
				}

				@include media-breakpoint-up(xxl) {
					padding-left: 10rem;
				}
			}
		}
	}
}
</style>
