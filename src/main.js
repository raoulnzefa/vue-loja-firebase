import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import JQuery from 'jquery'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)

window.$ = window.JQuery = JQuery

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.component('produtos-lista', require('./sections/ProdutoLista.vue').default)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')