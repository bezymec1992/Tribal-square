<template>
	<div class="contact-form">
		<form @submit.prevent>
			<div class="text-holder">
				<p>You are interested in</p>
			</div>
			<div class="radios">
				<RadioInput :input-value="'Find a partner'" :label="'Find a partner'" v-model="form.type" />
				<RadioInput :input-value="'Partner with us'" :label="'Partner with us'" v-model="form.type" />
				<RadioInput :input-value="'Other'" :label="'Other'" v-model="form.type" />
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
				const x = this.form[Vmodel].replace(/[&/\\#,+()$~%@!'":*?+=<>{}0-9]/g, "");
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
				// console.log("all good");
				this.$v.$reset();
				this.form.name = "";
				this.form.email = "";
				this.form.message = "";
			}
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
		display: flex;
		margin-bottom: 2.7rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 0.7rem;
			flex-wrap: wrap;
		}

		@include media-breakpoint-down(sm) {
			flex-direction: column;
		}

		.wrapper-radio {
			&:not(:last-child) {
				margin-right: 3.6rem;
			}
		}
	}
}
</style>
