import create from './create';
import Vaide from './vaide.vue';

export default {
  install: function (Vue, router, options) {
    const defaultConf = {
      log: true,
      clear: false
    }
    const mergeOptions = Object.assign(defaultConf, options)
    if (process.env.NODE_ENV !== 'development') {
      return
    }
    // Vue.prototype.$vaide =

    const { log, clear, vaide } = mergeOptions
    if (vaide) {
      create(Vaide, router)
    }

    if (log) {
      
      router.resolveHooks.push((to, from, next) => {
        if (clear) {
          console.clear()
        }
        let route = {}
        to.matched.forEach(item => {
          route[item.path]=item.components.default.__file
        })

        window.sessionStorage.setItem('currentRoutePath', JSON.stringify(route))
        next()
      })
    }
  }
}
