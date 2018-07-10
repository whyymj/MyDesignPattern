import Vue from 'vue'
import Cell from './cell.vue'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Cell },
  template: '<Cell/>'
})
