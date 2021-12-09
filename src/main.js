// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMask from 'v-mask'
import vuetify from '@/plugins/vuetify'
import 'vue-ads-table-tree/dist/vue-ads-table-tree.css'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(VueMask);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  vuetify
})
