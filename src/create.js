import Vue from 'vue'
// render dom to document.body
function create(Component, props) {
  const Ctor = Vue.extend(Component)
  const comp = new Ctor({ propsData: props });
  comp.$mount()
  const ele = comp.$el
  document.body.appendChild(ele)

  comp.remove = () => {
    document.body.removeChild(ele);
    comp.$destroy();
  };
  return comp;
}
export default create
