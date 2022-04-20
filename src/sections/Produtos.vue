<template>
	<div class="products" id="produtos">
		<div class="container">
			<h1 class="text-center p-5">Seus Produtos</h1>
			<div class="row">
				<div class="col-md-4">
					<div class="card-product-item">
						<img src="" alt="..." class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">Microsoft Surface Book 2</h5>
							<p class="card-text">
								Microsoft Surface Book 2 Core i7 8th gen 16gb Ram 512gb SSD 13.5"
							</p>
							<a href="#" class="btn btn-primary">Add Carrinho</a>
						</div>
					</div>
				</div>
				<div class="colm-4">
					<div class="card product-item">
						<img src="" alt="" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">Notebook Surface Laptop 2</h5>
							<p class="card-text">
								Notebook Surface Laptop 2 13.5" Intel Core i5 1.6GHz 8GB SSD-128GB + Touchscreen
							</p>
							<a href="#" class="btn btn-primary">Add Carrinho</a>
						</div>
					</div>
				</div>
				<div class="colm-4">
					<div class="card product-item">
						<img src="" alt="" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">Microsoft Surface Studio 2</h5>
							<p class="card-text">
								Microsoft Surface Studio 2 (Intel Core i7, 16 GB de RAM, 1 TB) - Versão mais recente
							</p>
							<a href="#" class="btn btn-primary">Add Carrinho</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Produtos"
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
