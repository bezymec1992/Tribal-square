<template>
	<div class="modal-contact-form">
		<form @submit.prevent>
			<h3>{{ modalType }}</h3>

			<div class="text">
				<p>Write us a we will contact you as soon as possible</p>
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
			<Button type="button" title="Send" class="btn-dark" @click="submitForm" />
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
								<span>{{ request.message }}</span>
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

export default {
	name: "ContactForm",
	components: {
		Input,
		Button
	},
	mixins: [validationMixin],
	props: {
		modalType: {
			type: String,
			default: ""
		}
	},

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
				message: { required }
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
		async submitForm() {
			this.$v.form.$touch();

			if (this.$v.form.$invalid) {
				return console.log("some erorr");
			} else {
				const url = this.$config.apiURL + "/contact-form";
				const formData = {
					name: this.form.name,
					email: this.form.email,
					text: this.form.message,
					type: this.modalType.toUpperCase().replace(/\s/g, "_")
				};

				try {
					this.requestDataSet("success", "has been sent");
					this.openModal();

					const response = await fetch(url, {
						headers: {
							"Content-Type": "application/json"
						},
						method: "POST",
						body: JSON.stringify(formData)
					});
					await response.json();
					console.log("form success");
				} catch (error) {
					console.error("error", error);
				}

				console.log("form success");
				this.requestDataSet("success", "has been sent");
				this.openModal();

				setTimeout(() => {
					this.request.loading = false;
				}, 1500);

				setTimeout(() => {
					this.closeModal();
					this.clearForm();
					this.$emit("submitForm");
				}, 4000);
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

<style lang="scss">
.modal-contact-form {
	.input-group {
		.label {
			background: $white;
		}

		.form-control {
			background: $white;
		}
	}
}
</style>

<style lang="scss" scoped>
.modal-contact-form {
	h3 {
		margin-bottom: 1rem;
		font-size: 3.2rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 1.1rem;
			font-size: 2.8rem;
		}
	}

	.btn {
		width: 100%;
		max-width: 28rem;

		@include media-breakpoint-down(sm) {
			max-width: 100%;
		}
	}

	.text {
		margin-bottom: 4.4rem;
		font-size: 1.6rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 5.2rem;
		}

		p {
			margin-bottom: 0;
		}
	}
}
</style>
