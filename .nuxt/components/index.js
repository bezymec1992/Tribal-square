export { default as BurgerMenu } from '../../components/BurgerMenu.vue'
export { default as FooterSection } from '../../components/FooterSection.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as SocialBar } from '../../components/SocialBar.vue'
export { default as Product } from '../../components/product.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
