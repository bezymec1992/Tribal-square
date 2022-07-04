<template>
	<div class="slider-labels">
		<div v-if="up_lg">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item, index) in labelsList" :key="index">
					<div class="container">
						<CardLable class="style2" :svg-title="item.svgTitle" :title="item.title" :description="item.description" :type="item.type" :topic="item.topic" :website-link="item.websiteLink" :img="item.img" card-color="white" :card-background-color="item.cardBackgroundColor" :btn-color="item.btnColor" :btn-background-color="item.btnBackgroundColor" :card-style="item.cardStyle" :style-img="item.styleImg" />
					</div>
				</swiper-slide>
			</swiper>
		</div>
		<div v-else>
			<div class="container">
				<CardLable v-for="(item, index) in labelsList" :key="index" class="style2" :svg-title="item.svgTitle" :title="item.title" :description="item.description" :type="item.type" :topic="item.topic" :website-link="item.websiteLink" :img="item.img" card-color="white" :card-background-color="item.cardBackgroundColor" :btn-color="item.btnColor" :btn-background-color="item.btnBackgroundColor" :card-style="item.cardStyle" :style-img="item.styleImg" />
			</div>
		</div>
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
				spaceBetween: 20,
				// freeMode: true,
				mousewheel: {
					releaseOnEdges: true
				},
				grabCursor: true,
				breakpoints: {
					768: {
						spaceBetween: 40
					}
				}
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
		height: 67rem !important;
	}

	.label-card {
		.btn {
			padding-left: 3rem;
			padding-right: 3rem;
		}
	}
}
</style>
