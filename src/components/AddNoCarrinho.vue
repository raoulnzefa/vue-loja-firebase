<template>
	<div class="add-to-cart">
		<button class="btn btn-primary" @click="addNoCarrinho">Add No Carrinho</button>
	</div>
</template>
<script>

export default {
	name: 'add-no-carrinho',
	props: {
		nome: String,
		preco: String,
		imagem: String,
		pId: String
	},
	data() {
		return {
			item: {
				produtoNome: this.nome,
				produtoImagem: this.imagem,
				produtoPreco: this.preco,
				produtoId: this.pId,
				produtoQuantidade: 1
			}
		}
	},
	methods: {
		addNoCarrinho() {
			$('#miniCarrinho').modal('show')
			this.$store.commit('addNoCarrinho', this.item)
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>