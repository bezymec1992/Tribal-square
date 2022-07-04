<template>
	<nuxt-link v-if="type === 'nuxt-link'" :to="to" class="btn" :style="style"
		>{{ title }}
		<span v-if="hasIconSlot" class="icon-holder">
			<slot name="icon" />
		</span>
	</nuxt-link>
	<a v-else-if="type === 'link'" :href="href" target="_blank" class="btn" :style="style"
		>{{ title }}

		<span v-if="hasIconSlot" class="icon-holder">
			<slot name="icon" />
		</span>
	</a>
	<button v-else-if="type === 'button'" class="btn" :style="style" @click="click">
		{{ title }}

		<span v-if="hasIconSlot" class="icon-holder">
			<slot name="icon" />
		</span>
	</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		type: {
			type: String,
			default: "button",
			require: false
		},
		title: {
			type: String,
			default: "title",
			require: false
		},
		to: {
			type: [String, Object],
			default: ""
		},
		href: {
			type: String,
			default: "#",
			require: false
		},
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
	},
	computed: {
		hasIconSlot() {
			return !!this.$slots.icon;
		}
	},
	methods: {
		click() {
			this.$emit("click");
		}
	}
};
</script>

<style lang="scss" scoped>
.btn {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 1.6rem 4rem;
	font-size: 2.2rem;
	line-height: 1;
	color: var(--color);
	letter-spacing: 0.1rem;
	background: var(--background-color);
	text-transform: uppercase;
	border: solid 0.2rem var(--background-color);
	border-radius: 0;

	@include media-breakpoint-down(md) {
		padding: 1.55rem 4rem;
		font-size: 1.8rem;
	}

	&:focus {
		box-shadow: none;
	}

	.icon-holder {
		display: inline-flex;
		margin-left: 2.3rem;

		@include media-breakpoint-down(md) {
			margin-left: 2rem;
		}
	}

	&.btn-primary {
		color: $white;
		background: $purple;
		border-color: $purple;

		&:hover {
			background: lighten($purple, 10);
			border-color: lighten($purple, 10);
		}
	}

	&.btn-outline-primary {
		color: $black;
		background: transparent;
		border: solid 0.2rem $purple;

		&:hover {
			color: $white;
			background: $purple;
		}
	}

	&.btn-warning {
		color: $black;
		background: $candlelight;
		border-color: $candlelight;

		&:hover {
			background: lighten($candlelight, 10);
			border-color: lighten($candlelight, 10);
		}
	}

	&.btn-link {
		padding: 0;
		color: $black;
		background: transparent;
		text-decoration: none;
		border-color: transparent;

		&:hover {
			background: transparent;
		}
	}

	&.btn-danger {
		color: $white;
		background: $torch-red;
		border-color: $torch-red;

		&:hover {
			background: lighten($torch-red, 10);
			border-color: lighten($torch-red, 10);
		}
	}
}
</style>
