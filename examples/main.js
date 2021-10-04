import Vue from 'vue'
import '../dist/css/demo.css'
import { Demo } from '../dist/index.umd.js'
//Vue.component('name',Demo)
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Demo)//Demo.install -> vue.component
new Vue({
  render: h => h(App),
}).$mount('#app')
