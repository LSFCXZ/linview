import Vue from 'vue'
import '../components/css/card.scss'
import '../components/css/demo.scss'
import Card from '../components/lib/card/index.js'
import Demo from '../components/lib/demo/index.js'
//Vue.component('name',Demo)
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Demo)//Demo.install -> vue.component
Vue.use(Card)
new Vue({
  render: h => h(App),
}).$mount('#app')
