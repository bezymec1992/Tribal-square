<template>
	<div class="breadcrumbs">
		<ul>
			<li v-for="(crumb, index) in crumbs" :key="index">
				<nuxt-link property="item" :to="crumb.path">
					<span property="name">{{ $route.fullPath === crumb.path && title !== null ? title : crumb.title }}</span>
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Breadcrumbs",
	props: {
		title: {
			type: String,
			default: null
		}
	},
	computed: {
		crumbs() {
			const fullPath = this.$route.fullPath;
			const params = fullPath.startsWith("/") ? fullPath.substring(1).split("/") : fullPath.split("/");
			const crumbs = [];
			let path = "";
			params.forEach((param) => {
				path = `${path}/${param}`;
				const match = this.$router.match(path);
				if (match.name !== null) {
					crumbs.push({
						title: param.replace(/-/g, " "),
						...match
					});
				}
			});
			return crumbs;
		}
	}
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		font-weight: 300;
		font-size: 2.2rem;
		text-transform: capitalize;

		@include media-breakpoint-down(md) {
			font-size: 1.6rem;
		}

		li {
			display: inline-flex;

			&:first-child {
				opacity: 0.5;
			}

			&:not(:last-child) {
				&::after {
					content: "/";
					display: block;
					margin-left: 1.4rem;
					margin-right: 1.4rem;
				}
			}

			&:last-child {
				pointer-events: none;
			}
		}
	}
}
</style>
