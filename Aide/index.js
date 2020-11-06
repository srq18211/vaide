import create from './create'
import vaide from './src/vaide.vue'

export default {
  install: function (Vue, router) {

    Vue.prototype.$vaide = create(vaide, { router})
    
    console.log(
      `%c Vaide %c ${'Vue DevAide 1.0.0'} %c`,
      'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      // 'background:#008c8c ; padding: 1px; border-radius: 0 3px 5px 0;  color: #fff',
      'background:#1890ff ; padding: 1px; border-radius: 0 3px 5px 0;  color: #fff',
      // 'background:#ff5f10 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      'background:transparent'
    )
  }
}