import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let carrinho = window.localStorage.getItem('carrinho')

export default new Vuex.Store({
    state: {
        carrinho: carrinho ? JSON.parse(carrinho) : []
    },
    getters: {
        precoTotal: state => {
            let total = 0
            state.carrinho.filter((item) => {
                total += (item.produtoPreco * item.produtoQuantidade)
            })
            return total
        }
    },
    mutations: {
        addNoCarrinho(state, item) {
            let encontrado = state.carrinho.find(produto => produto.produtoId == item.produtoId)

            if (encontrado) {
                encontrado.produtoQuantidade++
            } else {
                state.carrinho.push(item)
            }
            this.commit('salvarDado')
        },
        salvarDado(state) {
            window.localStorage.setItem('carrinho', JSON.stringify(state.carrinho))
        },
        removerDoCarrinho(state, item) {
            let index = state.cart.indexOf(item)
            state.carrinho.splice(index, 1)
            this.commit('salvarDado')
        }
    },
    actions: {

    }
})