import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Produtos from './views/Produtos.vue'
import Admin from './views/Admin.vue'
import Perfil from './views/Perfil.vue'
import VisaoGeral from './views/VisaoGeral.vue'
import Pedidos from './views/Pedidos.vue'

import { fb } from './firebase'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            meta: { requiresAuth: true },
            children: [

                {
                    path: 'produtos',
                    name: 'Produtos',
                    component: Produtos
                },
                {
                    path: 'perfil',
                    name: 'Perfil',
                    component: Perfil
                },
                {
                    path: 'visaogeral',
                    name: 'Visaogeral',
                    component: VisaoGeral
                },
                {
                    path: 'pedidos',
                    name: 'Pedidos',
                    component: Pedidos
                }
            ]
        },
        {
            path: '/confirmar',
            name: 'Confirmar',
            component: () =>
                import ('./views/Confirmar.vue')
        },
        {
            path: '/sobre',
            name: 'Sobre',
            component: () =>
                import ('./views/Sobre.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = fb.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router