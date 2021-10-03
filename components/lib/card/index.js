import Card from './src/Index.vue';
Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}
export default Card