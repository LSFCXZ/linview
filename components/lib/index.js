import Card from './card'
import Demo from './demo'

const components = {
  Demo,
  Card
}
const install = function (Vue) {
  if (install.install) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
}
const API = {
  install
}
export default API