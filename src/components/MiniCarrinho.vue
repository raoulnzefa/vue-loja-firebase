<template>
	<div class="mini-cart">
		<!--Modal-->
		<div class="modal fade" id="miniCarrinho" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Minha Sacola</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
							<span aria-hidden="true">&times;</span>
						</button>			
					</div>
					<div class="modal-body">
						<ul>
							<li class="media" v-for="(item, index) in $store.state.carrinho" :key="index">
								<img :src="item.produtoImagem" width="80px" class="align-self-center mr-3" alt="">
								<div class="media-body">
									<h5 class="mt-0">{{item.produtoNome}}
										<span class='float-right' @click="$store.commit('removerDoCarrinho',item)">X</span>
									</h5>
									<p class="mt-0">{{item.produtoPreco | currency}}</p>
									<p class="mt-0">Quantidade: {{item.produtoQuantidade}}</p>
								</div>
							</li>
						</ul>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Continuar comprando</button>
						<button type="button" class="btn btn-primary" @click="verificar">Confirmar</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

import $ from 'jquery'

export default {
	name: 'MiniCarrinho',
	methods: {
		verificar() {
			$('#miniCarrinho').modal('hide')
			this.$router.push('/confirmar')
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>