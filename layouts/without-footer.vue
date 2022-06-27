<template>
	<transition>
		<div class="wrapper">
			<Header class="style-2" />
			<main class="main">
				<nuxt />
			</main>
		</div>
	</transition>
</template>

<script>
import Header from "@/components/Header";
import globalBreakpoints from "@/mixins/globalBreakpoints";

export default {
	components: {
		Header
	},
	mixins: [globalBreakpoints],
	mounted() {
		this.correctVh();
	},
	methods: {
		correctVh() {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", vh + "px");
		}
	}
};
</script>
