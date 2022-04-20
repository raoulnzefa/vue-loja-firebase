<template>
	<div class="produtos">
		<div class="container">
			<div class="intro h-100">
				<div class="row h-100 justify-content-center align-items-center">
					<div class="col-md-6">
						<h3>Produtos</h3>
						<p>
							Lista dos itens da loja
						</p>
					</div>
					<div class="col-md-6">
						<img src="" alt="">
					</div>
				</div>
			</div>

			<hr>

			<div class="product-test">
				<h3 class="d-inline-block">Lista de Produtos</h3>
				<button class="btn btn-primary float-right">Add Produto</button>

				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th>Nome</th>
								<th>Preço</th>
								<th>Modificar</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>{{produto.nome }}</td>
								<td>{{produto.preco}}</td>

								<td>
									<button class="btn btn-primary">Editar</button>
									<button class="btn btn-danger">Deletar</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<!--Modal-->
		<div class="modal fade" id="produto" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-label="true">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="editLabel">Editar Produto</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<!--produto principal-->
							<div class="col-md-8">
								<div class="form-group">
									<input type="text" name="" id="" placeholder="Nome do Produto" class="form-control">
								</div>
								<div class="form-group">

								</div>
							</div>
							<!--produto sidebar-->
							<div class="col-md-4">
								<h4 class="display-6">Detalhes do Produto</h4>
								<hr>

								<div class="form-group">
									<input type="text" name="" id="" placeholder="Preço do Produto" class="form-control">
								</div>
								<div class="form-group">
									<input type="text" name="" id="" placeholder="Tags Produto" class="form-control">

									<div class="d-flex">
										<p>
											<span class="p-1">{{tag}}</span>
										</p>
									</div>
								</div>

								<div class="form-group">
									<label for="product_image">Imagem do Produto</label>
									<input type="file" name="" id="" class="form-control">
								</div>

								<div class="form-group d-flex">
									<div class="p-1">
										<div class="img-wrapp">
											<img src="" alt="">
											<span class="delete-img">X</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
						<button type="button" class="btn btn-primary">Salvar Alterações</button>
						<button type="button" class="btn btn-primary">Aplicar Alterações</button>
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