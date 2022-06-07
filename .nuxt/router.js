import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f18bdf3 = () => interopDefault(import('../pages/for-partners.vue' /* webpackChunkName: "pages/for-partners" */))
const _77e25506 = () => interopDefault(import('../pages/main.vue' /* webpackChunkName: "pages/main" */))
const _6b301889 = () => interopDefault(import('../pages/our-products.vue' /* webpackChunkName: "pages/our-products" */))
const _35ec2cdb = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _c17e9384 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/for-partners",
    component: _2f18bdf3,
    name: "for-partners"
  }, {
    path: "/main",
    component: _77e25506,
    name: "main"
  }, {
    path: "/our-products",
    component: _6b301889,
    name: "our-products"
  }, {
    path: "/privacy-policy",
    component: _35ec2cdb,
    name: "privacy-policy"
  }, {
    path: "/",
    component: _c17e9384,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
