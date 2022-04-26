import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import jQuery from 'jquery'
import { fb } from './firebase'
import VueFirestore from 'vue-firestore'
require('firebase/firestore')

// O nome da propriedade. O padrão é '.key'.
// se é enumerável ou não. O padrão é verdadeiro.
Vue.use(VueFirestore, {
    key: 'id',
    enumerable: true
})

global.$ = window.jQuery = jQuery;

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

import Swal from 'sweetalert2';

global.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
})

global.Toast = Toast

import store from './store.js';

Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.component('add-no-carrinho', require('./components/AddNoCarrinho.vue').default)
Vue.component('mini-carrinho', require('./components/MiniCarrinho.vue').default)
Vue.component('produtos-lista', require('./sections/ProdutoLista.vue').default)

import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)

Vue.config.productionTip = false

let app = ''

fb.auth().onAuthStateChanged(function(user) {
    console.log(user);
    if (!app) {
        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app')
    }
})