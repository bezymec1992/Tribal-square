<template>
	<transition>
		<div class="wrapper">
			<Header class="style-2" />
			<main class="main">
				<nuxt />
			</main>
			<Footer />
			<Cookies />
		</div>
	</transition>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cookies from "@/components/Cookies";
import globalBreakpoints from "@/mixins/globalBreakpoints";

export default {
	components: {
		Header,
		Footer,
		Cookies
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
