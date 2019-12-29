import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'
import axios  from 'axios'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// // 引入 vue-ele-form
// import EleForm from 'vue-ele-form'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';




// 注册 element-ui
//Vue.use(ElementUI)


Vue.config.productionTip = false

//Vue.use(EleForm)
Vue.use(Avue)

const http = axios.create({
  baseURL: 'http://127.0.0.1:3000'
})
Vue.prototype.$httpajax = http
Vue.prototype.$http = http
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
