// JS - ./js/index.js
import './js/'

// SCSS
import './scss/main.scss'

// CSS (example)
import './css/main.css'

// Bootstrap
//import './bootstrap/css/bootstrap-reboot.min.css'

// Vue.js
window.Vue = require('vue')
//import store from './store'

// Vue components (for use in html)
Vue.component('chat-header', require('./components/ChatHeader.vue').default)
Vue.component('chat-services', require('./components/ChatServices.vue').default)
Vue.component('chat-body', require('./components/ChatBody.vue').default)
Vue.component('chat-send-message', require('./components/ChatSendMessage.vue').default)



// Vue init
var app = new Vue({
  el: '#app',
  data: {

  },
  methods: {

  }
})
