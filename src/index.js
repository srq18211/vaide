import create from './create';
import Vaide from './vaide.vue';

export default {
  install: function (Vue, router, options = { log: true }) {
    if (process.env.NODE_ENV !== 'development') {
      return
    }
    Vue.prototype.$vaide = create(Vaide, router)
    const { log } = options
    if (log) {
      console.log(
        `%c Vaide %c ${'version 2.0.4'} %c`,
        'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        // 'background:#008c8c ; padding: 1px; border-radius: 0 3px 5px 0;  color: #fff',
        'background:#1890ff ; padding: 1px; border-radius: 0 3px 5px 0;  color: #fff',
        // 'background:#ff5f10 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
        'background:transparent'
      )
      router.resolveHooks.push((to, from, next) => {
        var str = `          ____ Vaide: currentRoute matched ____          \n\n`
        to.matched.forEach(item => {
          str += `【${item.path}】:\n__filePath__: ${item.components.default.__file} \n\n`
        })

        console.log(`%c${str}`, 'padding:1px;color: #008c8c;text-align:right');
        next()
      })
    }

  }
}
