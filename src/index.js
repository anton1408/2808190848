// JS - ./js/index.js
import './js/'

// SCSS
import './scss/main.scss'

// CSS (example)
import './css/main.css'

// Bootstrap (example)
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// Vue.js
window.Vue = require('vue')
//import store from './store'

// Vue components (for use in html)
Vue.component('chat-header', require('./components/ChatHeader.vue').default)
Vue.component('services', require('./components/Services.vue').default)
Vue.component('messages', require('./components/Messages.vue').default)
Vue.component('make-message', require('./components/MakeMessage.vue').default)



// Vue init
var app = new Vue({
  el: '#app',
  data: {

  },
  methods: {

  }
})
