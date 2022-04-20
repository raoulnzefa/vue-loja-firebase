<template>
	<div class="products" id="produtos">
		<div class="container">
			<h1 class="text-center p-5">Sua Lista de Produtos</h1>
			<div class="row">
				<div class="col-md-4" v-for="(produto, index) in produtos" v-bind:key="index">
					<div class="card product-item">
						<carousel :perPage="1">
							<slide v-for="(imagem, index) in produtos.imagens" v-bind:key="index">
								<img :src="imagem" alt="" class="card-img-top" width="250px">
							</slide>
						</carousel>
						<div class="card-body">
							<div class="d-flex justify-content-between">
								<h5 class="card-title">{{produto.titulo}}</h5>
								<h5 class="card-price">{{produto.preco | currency}} </h5>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {db} from '../firebase'
export default {
	name: "Produtos-Lista",
	props: {
		msg: String
	},
	data() {
		return {
			produtos: []
		}
	},
	methods: {
	},
	firestore() {
		return {
			produtos: db.collection('produtos')
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>