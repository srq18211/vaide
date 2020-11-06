import Vue from 'vue'
// render dom to document.body
function create(Component, props) {
  const Ctor = Vue.extend(Component)
  const comp = new Ctor({ propsData: props });
  comp.$mount()
  document.body.appendChild(comp.$el)

  comp.remove = () => {
    document.body.removeChild(comp.$el);
    comp.$destroy();
  };
  return comp;
}
export default create
