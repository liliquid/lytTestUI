import Vue from 'vue'
import App from './App.vue'

import 'lyt-test-ui/dist/css/index.css'
import MUI from 'lyt-test-ui'
Vue.use(MUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
