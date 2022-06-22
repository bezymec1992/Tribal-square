<template>
	<div class="card">
		<div class="card-header">
			<div class="d-flex align-items-center">
				<div class="icon-holder">
					<img :src="require(`@/assets/imgs/${img}`)" :alt="title" />
				</div>
				<div class="content-holder">
					<span class="category">{{ category }}</span>
					<h3 class="title">{{ title }}</h3>
				</div>
			</div>
			<div class="arrow-holder">
				<svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1L19 19L1 37" stroke="CurrentColor" stroke-width="2" />
				</svg>
			</div>
		</div>

		<div class="text-holder">
			<p>Service which can help you to exchange your accommodation for a short period for free</p>
		</div>

		<div class="card-footer">
			<Button title="WEBSITE" class="btn-link" type="link" to="/contact">
				<template #icon>
					<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
						<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
					</svg>
				</template>
			</Button>

			<Button title="ABOUT" class="btn-warning d-none d-lg-inline-flex" type="nuxt-link" to="/contact">
				<template #icon>
					<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
						<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
					</svg>
				</template>
			</Button>
		</div>
	</div>
</template>

<script>
import Button from "@/components/Button";

export default {
	name: "Card",
	components: {
		Button
	},
	props: {
		category: {
			type: String,
			default: "category"
		},
		title: {
			type: String,
			default: "title"
		},
		description: {
			type: String,
			default: "description"
		},
		img: {
			type: String,
			default: "img-01.jpg"
		}
	}
};
</script>

<style lang="scss" scoped>
.card {
	margin-bottom: 2.6rem;
	padding: 4rem;
	background: $white;
	border-radius: 1.2rem;
	transition: $transition;

	@include media-breakpoint-down(md) {
		padding: 2.4rem 2rem;
		margin-bottom: 2rem;
	}

	&:hover {
		color: $white;
		background: $cloud-burst2;

		.btn-link {
			color: $white;
		}
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2.7rem;

		.icon-holder {
			width: 6rem;
			margin-right: 1.6rem;

			img {
				width: 100%;
				height: auto;
				border-radius: 0.8rem;
			}
		}

		.category {
			display: block;
			margin-bottom: 0.6rem;
			font-size: 2rem;
			line-height: 1;
			opacity: 0.4;

			@include media-breakpoint-down(md) {
				font-size: 1.8rem;
			}
		}

		.title {
			margin-bottom: 0;
			font-size: 2.6rem;

			@include media-breakpoint-down(md) {
				font-size: 2.4rem;
			}
		}

		.arrow-holder {
			width: 1.8rem;
			height: 3.6rem;

			@include media-breakpoint-down(md) {
				width: 1.5rem;
				height: 3rem;
			}

			svg {
				width: 100%;
				height: 100%;
			}
		}
	}

	.text-holder {
		position: relative;
		margin-bottom: 3.9rem;
		padding-bottom: 3.8rem;
		font-size: 1.8rem;
		line-height: 1.3;
		opacity: 0.4;

		@include media-breakpoint-down(md) {
			margin-bottom: 2.4rem;
			padding-bottom: 2.4rem;
			font-size: 1.6rem;
		}

		p {
			margin-bottom: 0;
		}

		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 0;
			border-bottom: solid 0.1rem;
			opacity: 0.4;
		}
	}

	.card-footer {
		display: flex;
		justify-content: space-between;

		.btn-link {
			padding: 0;
		}
	}

	&.style1 {
		.btn-warning {
			display: none !important;
		}
	}

	&.style2 {
		@include media-breakpoint-up(md) {
			padding-bottom: 2.2rem;
		}

		.card-header {
			@include media-breakpoint-up(md) {
				margin-bottom: 3.7rem;
			}
		}

		.text-holder {
			@include media-breakpoint-up(md) {
				margin-bottom: 2.1rem;
				padding-bottom: 3.1rem;
			}
		}

		.arrow-holder {
			@include media-breakpoint-up(md) {
				display: none;
			}
		}
	}
}
</style>
