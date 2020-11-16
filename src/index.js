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
    create(Vaide, router)
    const { log, clear } = mergeOptions

    // console.log(
    //   `%c Vaide %c ${'version 2.0.14'} %c`,
    //   'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    //   'background:#1890ff ; padding: 1px; border-radius: 0 3px 5px 0;  color: #fff',
    //   'background:transparent'
    // )

    if (log) {
      router.resolveHooks.push((to, from, next) => {
        if (clear) {
          console.clear()
        }
        var str = ``
        to.matched.forEach(item => {
          str += `【${item.path}】:\n__filePath__: ${item.components.default.__file} \n`
        })
        console.groupCollapsed('____ Vaide: currentRoute matched ____ ');
        console.log(`%c${str}`, 'padding:1px;color: #008c8c;text-align:right');
        console.groupEnd();
        next()
      })
    }
  }
}
