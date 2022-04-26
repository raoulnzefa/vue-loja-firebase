<template>
	<div class="home">
        <Navbar />
		<Hero />
		<produtos-lista />
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
		<entrar />
		<mini-carrinho />
	</div>
</template>
<script>
import Hero from '@/components/Hero.vue'
import Entrar from '@/components/Entrar.vue'

export default {
	name: "Home",
	components: {
		Entrar, Hero
	}
}
</script>
<style lang="">
	
</style>