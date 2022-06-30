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
	padding: 1.6rem 4rem;
	font-size: 2.2rem;
	line-height: 1;
	color: $white;
	letter-spacing: 0.1rem;
	background: $purple;
	text-transform: uppercase;
	border: solid 0.2rem $purple;
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
