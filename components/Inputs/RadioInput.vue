<template>
	<div class="wrapper-radio">
		<label class="control checkbox">
			<input type="radio" :value="inputValue" v-model="model" />
			<span class="control-indicator"></span>
			{{ label }}
		</label>
	</div>
</template>

<script>
export default {
	name: "RadioInput",
	props: {
		value: [Boolean, String, Object],
		inputValue: [Boolean, String, Object],
		label: String
	},
	computed: {
		model: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit("input", value);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.wrapper-radio {
	.control {
		display: inline-flex;
		margin-bottom: 1.1rem;
		font-size: 1.8rem;
		line-height: 1.8;
		cursor: pointer;

		@include media-breakpoint-down(md) {
			font-size: 1.6rem;
			line-height: 1.6;
		}

		input {
			position: absolute;
			opacity: 0;
			z-index: -1;

			&:checked ~ .control-indicator {
				&::before {
					opacity: 1;
				}
			}
		}

		.control-indicator {
			position: relative;
			display: block;
			margin-right: 0.8rem;
			min-width: 3rem;
			width: 3rem;
			height: 3rem;
			background-color: transparent;
			pointer-events: none;
			border-radius: 50%;
			border: solid 1px rgba($black, 0.4);
			user-select: none;

			@include media-breakpoint-down(md) {
				min-width: 2.6rem;
				width: 2.6rem;
				height: 2.6rem;
			}

			&::before {
				content: "";
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 60%;
				height: 60%;
				background: $purple;
				border-radius: 50%;
				box-shadow: 0.2rem 0.4rem 1rem rgba($purple, 0.6);
				transition: $transition;
				opacity: 0;
			}

			@include media-breakpoint-down(lg) {
				margin-right: 11px;
			}
		}
	}
}
</style>
