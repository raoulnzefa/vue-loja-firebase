<template>
	<div class="home">
        <Navbar />
		<ProdutosLista />
		<div class="container h-100">
			<div class="row p-5 h-100 justify-content-center align-items-center">
				<div class="col-md-6">
					<img src="" alt="" width="400">
				</div>
				<div class="col-md-6">
					<h3>Descubra mais sobre nós</h3>
					<p>
						Loja Online
					</p>
					<button class="btn custom-btn btn-online-primary mr-4">Buscar Produtos</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ProdutosLista from '../sections/ProdutoLista.vue';
import Navbar from '@/components/Navbar.vue';
export default {
	name: "Home",

	components: {
		ProdutosLista, Navbar
	}
}
</script>
<style lang="">
	
</style>