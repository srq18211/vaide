import create from './create.js';
import Vaide from './vaide.vue';

export default {
  install: function (Vue, router, options) {
    const defaultConf = {
      buoy: true
    }
    const mergeOptions = Object.assign(defaultConf, options)
    if (process.env.NODE_ENV !== 'development') {
      return
    }
    // Vue.prototype.$vaide =

    const { clear, buoy } = mergeOptions
    if (buoy) {
      create(Vaide, router)
    }

    router.resolveHooks.push((to, from, next) => {
      let route = {}
      to.matched.forEach(item => {
        route[item.path||'/'] = item.components.default.__file
      })

      window.sessionStorage.setItem('route', JSON.stringify(route))
      next()
    })
  }
}
