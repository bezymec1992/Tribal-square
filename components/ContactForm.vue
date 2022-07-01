<template>
	<div class="contact-form">
		<form @submit.prevent>
			<div class="text-holder">
				<p>You are interested in</p>
			</div>

			<div class="radios">
				<div class="radios-row">
					<RadioInput v-model="form.type" :input-value="'Find a partner'" :label="'Find a partner'" />
					<RadioInput v-model="form.type" :input-value="'Partner with us'" :label="'Partner with us'" />
					<RadioInput v-model="form.type" :input-value="'Other'" :label="'Other'" />
				</div>

				<span v-if="$v.form.type.$error" class="error-message">Requred filed</span>
			</div>
			<div class="row">
				<div class="col-md-6">
					<Input v-model="form.name" :error-showing="$v.form.name.$error" placeholder="Name" label="Name" @input="formatInput('name')" />
				</div>
				<div class="col-md-6">
					<Input v-model="form.email" :error-showing="$v.form.email.$error" placeholder="Email" label="Email" @input="formatInput('email')">
						<template #error>
							<span v-if="$v.form.email.$dirty && $v.form.email.$invalid" class="error-message">
								<span v-if="!$v.form.email.email">Incorrect email</span>
								<span v-if="!$v.form.email.required">Requred filed</span>
							</span>
						</template>
					</Input>
				</div>
			</div>
			<Input v-model="form.message" placeholder="Type your message" label="Your message" input-type="textarea" :error-showing="$v.form.message.$error" />
			<Button type="button" title="Send" class="btn-primary" @click="submitForm" />
		</form>
		<modal ref="modal">
			<template #modal-body>
				<div class="modal-request">
					<h3 class="h2 text-center">PROCESSING</h3>
					<div class="text-holder text-center" :class="request.status">
						<span v-if="request.loading" class="loading-dots"></span>
						<p v-else>
							<template v-if="request.status === 'success'">
								Request from <strong>{{ form.email }}</strong>
								<span class="green">{{ request.message }}</span>
							</template>

							<template v-else>
								{{ request.message }}
							</template>
						</p>
					</div>
				</div>
			</template>
		</modal>
	</div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import Input from "@/components/Inputs/Input";
import Button from "@/components/Button";
import RadioInput from "@/components/Inputs/RadioInput";

export default {
	name: "ContactForm",
	components: {
		Input,
		Button,
		RadioInput
	},
	mixins: [validationMixin],
	data() {
		return {
			form: {
				name: "",
				email: "",
				message: "",
				type: ""
			},
			request: {
				loading: true,
				status: "",
				message: ""
			}
		};
	},
	validations() {
		return {
			form: {
				name: { required },
				email: { required, email },
				message: { required },
				type: { required }
			}
		};
	},
	methods: {
		formatInput(Vmodel) {
			if (Vmodel === "name") {
				const x = this.form[Vmodel].replace(/[&/\\#,+()$~^%@!;№":*?+=<>{}0-9]/g, "").replace(/[^\p{L}\p{N}\p{P}\p{Z}`\n]/gu, "");
				this.form[Vmodel] = x.substring(0, 50);
			} else if (Vmodel === "email") {
				const x = this.form[Vmodel].replace(/[&/\\#,+()$~%^'":*?<>{ }]/g, "");
				this.form[Vmodel] = x.substring(0, 100);
			}
		},
		submitForm() {
			this.$v.form.$touch();

			if (this.$v.form.$invalid) {
				return console.log("some erorr");
			} else {
				console.log("form success");
				this.requestDataSet("success", "has been sent");
				this.openModal();

				setTimeout(() => {
					this.request.loading = false;
				}, 2000);

				setTimeout(() => {
					this.closeModal();
					this.clearForm();
				}, 5000);
			}
		},

		clearForm() {
			this.$v.$reset();

			this.form.name = "";
			this.form.email = "";
			this.form.message = "";
			this.form.type = "";
		},
		requestDataSet(status, message) {
			this.request.status = status;
			this.request.message = message;
		},

		openModal() {
			this.$refs.modal.handleOpen();
		},
		closeModal() {
			this.$refs.modal.handleClose();
		}
	}
};
</script>

<style lang="scss" scoped>
.contact-form {
	.btn {
		width: 100%;
		max-width: 28rem;

		@include media-breakpoint-down(sm) {
			max-width: 100%;
		}
	}

	.text-holder {
		margin-bottom: 2.2rem;
		font-size: 2.2rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 1.2rem;
			font-size: 1.8rem;
		}
	}

	.radios {
		position: relative;
		margin-bottom: 2.7rem;

		.radios-row {
			display: flex;
			flex-wrap: wrap;

			@include media-breakpoint-down(md) {
				flex-wrap: wrap;
			}

			@include media-breakpoint-down(sm) {
				flex-direction: column;
			}
		}

		@include media-breakpoint-down(md) {
			margin-bottom: 2.1rem;
		}

		.wrapper-radio {
			&:not(:last-child) {
				margin-right: 3.6rem;
			}
		}

		.error-message {
			position: absolute;
			left: 0;
			bottom: -1.3rem;
			font-size: 1.5rem;
			color: $red;

			@include media-breakpoint-down(md) {
				bottom: -0.5rem;
				font-size: 1.2rem;
			}
		}
	}
}
</style>
