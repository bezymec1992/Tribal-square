<template>
	<div class="label-card" :style="style">
		<div class="row">
			<div class="col-md-7">
				<div class="content-holder">
					<h3>Tribal Cyber</h3>
					<div class="text-holder">
						<p>This is a place of a short description of the website and about what we do there.</p>
					</div>
					<div class="row">
						<div class="col-6">
							<ul>
								<li>TYPE</li>
								<li>Website</li>
							</ul>
						</div>
						<div class="col-6">
							<ul>
								<li>TOPIC</li>
								<li>Cyber Security</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-5 d-flex align-items-end justify-content-between justify-content-md-end align-items-md-start">
				<Button title="VIEW ALL" class="btn-link" type="nuxt-link" to="/products">
					<template #icon>
						<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 0V14H0" stroke="CurrentColor" stroke-width="1.5" />
							<path d="M15 14L1 0.93335" stroke="CurrentColor" stroke-width="1.5" />
						</svg>
					</template>
				</Button>
				<div class="img-holder">
					<img src="@/assets/imgs/img-05.png" alt="img of project" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CardLable",
	props: {
		color: {
			type: String,
			default: "black"
		},

		backgroundColor: {
			type: String,
			default: "white"
		}
	},
	data() {
		return {
			style: {
				"--color": this.color,
				"--background-color": this.backgroundColor
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.label-card {
	position: relative;
	color: var(--color);
	background: var(--background-color);
	transition: $transition;

	.content-holder {
		position: relative;
		z-index: 1;
	}

	h3 {
		margin-bottom: 2.4rem;
		font-size: 4rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2rem;
			font-size: 2rem;
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
			margin-left: -9rem;
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
			@include media-breakpoint-up(md) {
				color: $white;
				background: $cloud-burst;
			}
		}
	}
}
</style>
