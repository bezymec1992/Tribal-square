<template>
	<div class="home-page">
		<OurPartners/>
		<Solutions
		:title="info.title"
		:text="info.text"
		:img="info.img"
		:imgMob="info.imgMob"
		/>
	</div>
</template>

<script>
	import OurPartners from '@/components/OurPartners';
	import Solutions from '@/components/Solutions';
	export default {
		components: {
			OurPartners,
			Solutions
		},
		data() {
			return {
				info: {
					title: 'We provide solutions that help your business grow',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. Nulla facilisi. Phasellus at placerat felis. Intege.',
					img: 'solution-desk.png',
					imgMob: 'solution-mb.png'
				}
			}
		}
		
	};
</script>

<style lang="scss" scoped>
</style>
