import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './vuex'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件


Vue.config.productionTip = false

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')


