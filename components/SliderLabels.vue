<template>
	<div class="slider-labels">
		<template v-if="up_lg">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item, index) in labelsList" :key="index">
					<CardLable class="style2" :svg-title="item.svgTitle" :title="item.title" :description="item.description" :type="item.type" :topic="item.topic" :website-link="item.websiteLink" :img="item.img" card-color="white" :card-background-color="item.cardBackgroundColor" :btn-color="item.btnColor" :btn-background-color="item.btnBackgroundColor" :card-style="item.cardStyle" :style-img="item.styleImg" :img-style-up-md="item.imgStyleUpMd" :img-style-down-md="item.imgStyleDownMd" :img-up-md="item.imgUpMd" :img-down-md="item.imgDownMd" :nuxt-link="item.nuxtLink" />
				</swiper-slide>
			</swiper>
		</template>
		<template v-else>
			<CardLable v-for="(item, index) in sliceLabelsArray" :key="index" class="style2" :svg-title="item.svgTitle" :title="item.title" :description="item.description" :type="item.type" :topic="item.topic" :website-link="item.websiteLink" :img="item.img" card-color="white" :card-background-color="item.cardBackgroundColor" :btn-color="item.btnColor" :btn-background-color="item.btnBackgroundColor" :card-style="item.cardStyle" :img-style-up-md="item.imgStyleUpMd" :img-style-down-md="item.imgStyleDownMd" :img-up-md="item.imgUpMd" :img-down-md="item.imgDownMd" :nuxt-link="item.nuxtLink" />

			<template v-if="limitLabelsMobile">
				<div class="col-12 d-flex justify-content-center d-md-none col-w-btn pt-3">
					<Button title="VIEW ALL" class="btn-link" type="nuxt-link" to="/labels" />
				</div>
			</template>
		</template>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import LabelsBig from "@/constants/labelsBig";
import CardLable from "@/components/CardLable";
import getterBreakpoints from "@/mixins/getterBreakpoints";

export default {
	name: "SliderLabels",
	props: {
		limitLabelsMobile: {
			type: Number,
			default: null
		}
	},
	components: {
		Swiper,
		SwiperSlide,
		CardLable
	},
	mixins: [getterBreakpoints],
	data() {
		return {
			swiperOption: {
				slidesPerView: 1,
				speed: 1600,
				direction: "vertical",
				spaceBetween: 0,
				// freeMode: true,
				mousewheel: {
					releaseOnEdges: true
				},
				grabCursor: true
			},
			labelsList: []
		};
	},
	mounted() {
		this.labelsList = LabelsBig;

		// const swiperWrapper = document.querySelector(".swiper-wrapper");

		// console.log(swiperWrapper);

		// setTimeout(() => {
		// 	const card = document.querySelector(".label-card").getBoundingClientRect();

		// 	console.log(card.height);
		// }, 10);
	},
	computed: {
		sliceLabelsArray() {
			return this.limitLabelsMobile ? this.labelsList.slice(0, this.limitLabelsMobile) : this.labelsList;
		}
	}
};
</script>

<style lang="scss">
.slider-labels {
	overflow: hidden;

	.swiper-container {
		overflow: visible;
	}

	.swiper-wrapper {
		height: 64rem !important;
	}

	.label-card {
		@include media-breakpoint-up(lg) {
			margin-bottom: 0;
		}

		.btn {
			padding-left: 3rem;
			padding-right: 3rem;
		}
	}
}
</style>
