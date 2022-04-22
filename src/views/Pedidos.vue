<template>
	<div class="produtos">
		<div class="container">
			<div class="intro h-100">
				<div class="row h-100 justify-content-center align-items-center">
					<div class="col-md-6">
						<h3>Pedidos</h3>
						<p>
							Lista de Pedidos da loja
						</p>
					</div>
					<div class="col-md-6">
						<img src="/img/svg/oreders.svg" alt="" class="img-fluid">
					</div>
				</div>
			</div>

			<hr>

			<div class="product-test">
				<h3 class="d-inline-block">Lista de Pedidos</h3>
				<button @click="addNovo" class="btn btn-primary float-right">Add Pedido</button>

				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th>Nome</th>
								<th>Preço</th>
								<th>Ação</th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="(produto, index) in produtos" :key="index">
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
									<input type="text" name="" id="" placeholder="Nome do Produto" v-model="produto.nome" class="form-control">
								</div>
								<div class="form-group">
									<vue-editor v-model="produto.descricao"></vue-editor>
								</div>
							</div>
							<!--produto sidebar-->
							<div class="col-md-4">
								<h4 class="display-6">Detalhes do Produto</h4>
								<hr>

								<div class="form-group">
									<input type="text" name="" id="" placeholder="Preço do Produto" v-model="produto.preco" class="form-control">
								</div>
								<div class="form-group">
									<input type="text" placeholder="Produto tags" v-model.trim="tag" @keypress.prevent.stop.enter="addTag" class="form-control">
									<div class="d-flex">
										<p v-for='(tag, index) in produto.tags' v-bind:key="index">
											<span class="p-1">{{tag}}</span>
										</p>
									</div>
								</div>

								<div class="form-group">
									<label for="product_image">Imagem do Produto</label>
									<input type="file" @change="subirImagem" class="form-control">
								</div>

								<div class="form-group d-flex">
									<div class="p-1" v-for="(imagem, index) in produto.imagens" v-bind:key="index">
										<div class="img-wrapp">
											<img :src="imagem" alt="" width="80px">
											<span class="delete-img">X</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
						<button @click="addProduto()" type="button" class="btn btn-primary" v-if="modal == 'novo'">Salvar Alterações</button>
						<button type="button" class="btn btn-primary">Aplicar Alterações</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import $ from 'jquery'
import {fb, db} from '../firebase'
import { VueEditor } from "vue2-editor";
import Swal from 'sweetalert2'
export default {
	name: "Pedidos",
	components: {
		VueEditor
	},
	data() {
		return {
			produtos: [],
			produto: {
				nome: null,
				descricao: null,
				preco: null,
				tags: [],
				imagens: []
			},
			ativarItem: null,
			modal: null,
			tag: null
		}
	},
	firestore() {
		return {
			produtos: db.collection('produtos')
		}
	},
	methods: {
		redefinir() {	
			this.produto ={
				nome: null,
				descricao: null,
				preco: null,
				tags: [],
				imagens: []
			}
		},
		addNovo() {
			this.modal = 'novo'
			this.redefinir()
			$('#produto').modal('show')
		},
		addTag() {
                if (this.tag && ! this.tags.includes(this.tag)) {
                    this.produto.tags.push(this.tag);
                    this.tag = '';
                }
            },
		subirImagem(e) {
			if (e.target.files[0]) {
				let arquivo = e.target.files[0]
				var storageRef = fb.storage().ref('produtos/' + Math.random() + '_' + arquivo.name)
				let subirTarefa = storageRef.put(arquivo)
				subirTarefa.on('state_changed', (snapshot) => {
					console.log(snapshot);
				}, (error) => {
					console.log(error);
				}, () => {
					subirTarefa.snapshot.ref.getDownloadURL().then((downloadURL) => {
						this.produto.imagens.push(downloadURL)
					})
				})
			}
		},
		addProduto() {
			this.$firestore.produtos.add(this.produto)

			Swal.fire({	
				type: 'success',
				title: "Produto adicionado com sucesso"
			})
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}

</style>