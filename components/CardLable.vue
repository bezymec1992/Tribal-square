<template>
	<div class="label-card" :style="style">
		<div class="row">
			<div class="col-md-7 col-lg-7">
				<div class="content-holder">
					<div class="svg-title">
						<img :src="require(`@/assets/imgs/${svgTitle}`)" :alt="title" class="svg-html" />
					</div>
					<div class="text-holder">
						<p>{{ description }}</p>
					</div>
					<div class="row">
						<div class="col-5">
							<ul>
								<li>TYPE</li>
								<li>{{ type }}</li>
							</ul>
						</div>
						<div class="col-7">
							<ul>
								<li>TOPIC</li>
								<li>{{ topic }}</li>
							</ul>
						</div>
					</div>
					<Button v-if="cardStyle === 'style2'" title="Discover more" class="d-none d-md-inline-flex" type="nuxt-link" :to="nuxtLink" :color="btnColor" :background-color="btnBackgroundColor">
						<template #icon>
							<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="CurrentColor" />
							</svg>
						</template>
					</Button>
				</div>
			</div>
			<div class="col-md-5 col-lg-5 d-md-flex align-items-end justify-content-between justify-content-md-end align-items-md-start">
				<div class="img-holder" :style="imgStyle">
					<picture>
						<source :srcset="require('@/assets/imgs/' + imgUpMd)" media="(min-width: 768px)" type="image/jpg" />
						<img :src="require('@/assets/imgs/' + imgDownMd)" :alt="title" />
					</picture>
				</div>

				<Button v-if="cardStyle === 'style1'" title="WEBSITE" class="btn-link" type="link" :to="websiteLink" />

				<Button v-if="cardStyle === 'style2'" title="Discover more" class="d-md-none" type="nuxt-link" :to="nuxtLink" :color="btnColor" :background-color="btnBackgroundColor">
					<template #icon>
						<svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="CurrentColor" />
						</svg>
					</template>
				</Button>
			</div>
		</div>
	</div>
</template>

<script>
import getterBreakpoints from "@/mixins/getterBreakpoints";

export default {
	name: "CardLable",
	mixins: [getterBreakpoints],
	props: {
		cardColor: {
			type: String,
			default: "black"
		},
		cardBackgroundColor: {
			type: String,
			default: "white"
		},
		btnColor: {
			type: String,
			default: "black"
		},
		btnBackgroundColor: {
			type: String,
			default: "white"
		},
		websiteLink: {
			type: String,
			default: "/"
		},
		title: {
			type: String,
			default: "Title of project"
		},
		svgTitle: {
			type: String,
			default: "tribal-cyber.svg"
		},
		imgUpMd: {
			type: String,
			default: "img-05.png"
		},
		imgDownMd: {
			type: String,
			default: "img-05.png"
		},
		description: {
			type: String,
			default: "This is a place of a short description of the website and about what we do there."
		},
		type: {
			type: String,
			default: "type"
		},
		topic: {
			type: String,
			default: "topic"
		},
		cardStyle: {
			type: String,
			default: ""
		},
		nuxtLink: {
			type: String,
			default: "/"
		},
		imgStyleUpMd: {
			type: String,
			default: ""
		},
		imgStyleDownMd: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			style: {
				"--card-color": this.cardColor,
				"--card-background-color": this.cardBackgroundColor
			}
		};
	},
	computed: {
		imgStyle() {
			if (this.up_md) {
				return this.imgStyleUpMd;
			} else {
				return this.imgStyleDownMd;
			}
		}
	},
	mounted() {
		const imgs = document.querySelectorAll(".svg-html");

		imgs.forEach((element) => {
			this.replaseInlineSvg(element);
		});
	},

	methods: {
		replaseInlineSvg(el) {
			const imgID = el.getAttribute("id");
			const imgClass = el.getAttribute("class");
			const imgURL = el.getAttribute("src");

			fetch(imgURL)
				.then((data) => data.text())
				.then((response) => {
					const parser = new DOMParser();
					const xmlDoc = parser.parseFromString(response, "text/html");
					const svg = xmlDoc.querySelector("svg");

					if (typeof imgID !== "undefined") {
						svg.setAttribute("id", imgID);
					}

					if (typeof imgClass !== "undefined") {
						svg.setAttribute("class", imgClass + " replaced-svg");
					}

					svg.removeAttribute("xmlns:a");

					if (el.parentNode) {
						el.parentNode.replaceChild(svg, el);
					}
				});
		}
	}
};
</script>

<style lang="scss">
.svg-title {
	svg {
		width: 100%;
		height: auto;
	}
}
</style>

<style lang="scss" scoped>
.label-card {
	position: relative;
	color: var(--card-color);
	background: var(--card-background-color);
	transition: $transition;
	overflow: hidden;

	.content-holder {
		position: relative;
		z-index: 1;
	}

	.svg-title {
		max-width: 23.5rem;
		margin-bottom: 2.4rem;

		@include media-breakpoint-down(md) {
			max-width: 18rem;
			margin-bottom: 2rem;
		}
	}

	.text-holder {
		margin-bottom: 3.6rem;
		padding-bottom: 3.6rem;
		font-size: 2rem;
		line-height: 1.6;
		border-bottom: solid 0.1rem;

		p {
			margin-bottom: 0;
		}

		@include media-breakpoint-down(md) {
			margin-bottom: 2.4rem;
			padding-bottom: 2.4rem;
			font-size: 1.6rem;
		}
	}

	.btn-link {
		position: relative;
		padding: 0;
		color: inherit;
		z-index: 1;
		transition: auto;

		@include media-breakpoint-down(md) {
			white-space: nowrap;
		}
	}

	.img-holder {
		@include media-breakpoint-up(md) {
			position: absolute;
			right: 0;
			bottom: 0;
		}

		@include media-breakpoint-down(md) {
			margin-right: -2rem;
			margin-bottom: -3rem;
		}

		img {
			width: 100%;
			height: auto;
		}
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 2rem;
		letter-spacing: 0.2rem;

		@include media-breakpoint-down(md) {
			font-size: 1.6rem;
		}

		li {
			&:not(:last-child) {
				margin-bottom: 1rem;
			}
		}
	}

	&.style1 {
		margin-bottom: 2.4rem;
		padding: 5rem 4rem;
		border-radius: 1.2rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2rem;
			padding: 3rem 2rem;
		}

		&:hover {
			color: $white;
			background: $cloud-burst;
		}

		.img-holder {
			@include media-breakpoint-down(md) {
				margin-bottom: -6rem;
			}
		}
	}

	&.style2 {
		padding: 10rem;
		border-radius: 1.2rem;

		@include media-breakpoint-down(xl) {
			padding: 5rem;
		}

		@include media-breakpoint-down(lg) {
			margin-bottom: 2rem;
			padding: 4rem 2rem;
		}

		@include media-breakpoint-up(lg) {
			min-height: 64rem;
			max-height: 64rem;
		}

		ul {
			@include media-breakpoint-up(md) {
				margin-bottom: 5.2rem;
			}
		}

		.svg-title {
			margin-bottom: 4.4rem;

			@include media-breakpoint-up(md) {
				max-width: 43rem;
			}

			@include media-breakpoint-down(md) {
				margin-bottom: 2rem;
			}
		}

		.text-holder {
			margin-bottom: 5rem;
			padding-bottom: 5rem;

			@include media-breakpoint-down(md) {
				margin-bottom: 2.4rem;
				padding-bottom: 2.4rem;
			}
		}

		.img-holder {
			@include media-breakpoint-down(md) {
				margin-right: -2rem;
				margin-left: 0;
				margin-bottom: -4rem;
			}

			@include media-breakpoint-up(md) {
				width: 40%;
			}
		}

		.btn {
			@include media-breakpoint-down(md) {
				position: absolute;
				left: 2.6rem;
				bottom: 3rem;
				max-width: calc(100% - 5.2rem);
			}
		}
	}
}
</style>
