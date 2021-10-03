import Demo from './src/Index.vue';
Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo)
}
export default Demo