<template>
	<nuxt-link v-if="type === 'nuxt-link'" :to="to" class="btn"
		>{{ title }}
		<span v-if="hasIconSlot" class="icon-holder">
			<slot name="icon" />
		</span>
	</nuxt-link>
	<a v-else-if="type === 'link'" :href="href" target="_blank" class="btn"
		>{{ title }}

		<span v-if="hasIconSlot" class="icon-holder">
			<slot name="icon" />
		</span>
	</a>
	<button v-else-if="type === 'button'" class="btn" @click="click">
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
		}
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
	padding: 1.6rem 4.35rem;
	font-size: 2.2rem;
	line-height: 1;
	color: var(--text-color);
	letter-spacing: 0.1rem;
	background: var(--bg-color);
	text-transform: uppercase;
	border: solid 0.1rem var(--bg-color);
	border-radius: 0;

	@include media-breakpoint-down(md) {
		padding: 1.55rem 4.2rem;
		font-size: 1.8rem;
	}

	&:hover {
		color: var(--text-hover-color);
		background: var(--bg-hoverColor);
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

		&:hover {
			background: lighten($purple, 10);
		}
	}

	&.btn-outline-primary {
		color: $black;
		background: transparent;
		border-color: $purple;

		&:hover {
			color: $white;
			background: $purple;
		}
	}

	&.btn-warning {
		color: $black;
		background: $candlelight;

		&:hover {
			background: lighten($candlelight, 10);
		}
	}

	&.btn-link {
		color: $black;
		background: transparent;
		text-decoration: none;

		&:hover {
			background: transparent;
		}
	}
}
</style>
