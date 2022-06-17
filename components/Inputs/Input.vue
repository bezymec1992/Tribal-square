<template>
	<div class="input-group" :class="{ focus: labelShow }">
		<label v-if="inputType === 'input'">
			<transition name="fade">
				<span v-if="label && labelShow" class="label">{{ label }}</span>
			</transition>
			<input class="form-control" :type="type" :placeholder="placeholder" :value="value" v-on="listeners" @input="onInput" @focus="showHideLabel(true)" @blur="showHideLabel(false)" />
			<slot name="error">
				<span v-if="errorShowing" class="error-message"
					><span>{{ errorMessage }}</span></span
				>
			</slot>
		</label>
		<label v-if="inputType === 'textarea'">
			<transition name="fade">
				<span v-if="label && labelShow" class="label">{{ label }}</span>
			</transition>
			<div class="textarea-holder">
				<textarea ref="textarea" class="form-control" :maxlength="maxlength" :placeholder="placeholder" :value="value" v-on="listeners" @input="onInput" @focus="showHideLabel(true)" @blur="showHideLabel(false)"></textarea>
				<span class="maxlength">
					{{ maxLength }}
				</span>
			</div>
			<slot name="error">
				<span v-if="errorShowing" class="error-message"
					><span>{{ errorMessage }}</span></span
				>
			</slot>
		</label>
	</div>
</template>

<script>
export default {
	name: "Input",
	props: {
		inputType: {
			type: String,
			default: "input"
		},
		type: {
			type: String,
			default: "text"
		},
		value: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
		errorMessage: {
			type: String,
			default: "Required field"
		},
		errorShowing: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: Number,
			default: 500
		}
	},
	data() {
		return {
			labelShow: false
		};
	},
	computed: {
		listeners() {
			const { input, ...rest } = this.$listeners;
			return rest;
		},

		maxLength() {
			return this.maxlength - this.value.length;
		}
	},
	methods: {
		onInput(value) {
			this.$emit("input", value.target.value);
		},
		onChange(value) {
			this.$emit("change", value.target.value);
		},
		showHideLabel(value) {
			this.labelShow = value;
		}
	}
};
</script>

<style lang="scss" scoped>
.input-group {
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 3.3rem;

	@include media-breakpoint-down(md) {
		margin-bottom: 2.5rem;
	}

	label {
		width: 100%;
	}

	.label {
		position: absolute;
		top: 0;
		left: 1.4rem;
		transform: translateY(-50%);
		display: block;
		padding: 0.5rem 0.3rem;
		font-size: 1.4rem;
		color: rgba($black, 0.8);
		background: $aqua-haze;
		z-index: 2;
	}

	.form-control {
		padding: 1.6rem 1.5rem;
		font-size: 1.5rem;
		color: $black;
		border: 0.1rem solid rgba($black, 0.4);
		border-radius: 0.2rem;

		&::placeholder {
			color: rgba($black, 0.5);
		}

		@include media-breakpoint-down(md) {
			font-size: 1.4rem;
		}

		&:focus {
			box-shadow: none;
			border-color: $purple;
		}
	}

	.textarea-holder {
		position: relative;

		.maxlength {
			position: absolute;
			right: 1.2rem;
			bottom: 1.5rem;
			font-size: 1rem;
			color: rgba($black, 0.5);
		}
	}

	textarea {
		min-height: 11.5rem;
		resize: none;
	}

	.error-message {
		position: absolute;
		left: 0;
		bottom: -2rem;
		font-size: 1.5rem;
		color: $red;

		@include media-breakpoint-down(md) {
			bottom: -1.6rem;
			font-size: 1.2rem;
		}
	}

	&.focus {
		.label {
			color: $purple;
		}
	}
}
</style>
