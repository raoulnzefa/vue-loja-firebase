<template>
	<div class="products">
		<div class="container">
			<div class="intro h-100">
				<div class="row h-100 align-items-center">
					<div class="col-md-6 ml-3">
						<h3>Configurações de Perfil</h3>
						<p>
							ALtere suas configurações de perfil por aqui
						</p>
					</div>
					<div class="col-md-5">
						<img src="/img/svg/profile.svg" width="300" alt="" class="img-fluid">
					</div>
				</div>
			</div>
			<div class="profile-content">
				<ul class="nav nav-pills ml-3" id="myTab" role="tablist">
					<li class="nav-item">
						<a href="#perfil"  class="nav-link active" id="profile-tab" data-toggle="tab"  role="tab" aria-controls="perfil" aria-selected="true">Perfil</a>
					</li>
					<li class="nav-item">
						<a href="#conta" class="nav-link" id="conta-tab" data-toggle="tab" role="tab" aria-controls="conta" aria-selected="false">Configurações de conta</a>
					</li>
				</ul>
				<div class="tab-content" id="myTabContent">
					<div class="tab-pane fade show active pt-3" id="perfil" role="tabpanel" aria-labelledby="profile-tab">
						<div class="container">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" v-model="perfil.nome" placeholder="Nome completo" class="form-control">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" v-model="perfil.telefone" placeholder="Telefone" class="form-control">
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<input type="text" v-model="perfil.endereco" placeholder="Endereço" class="form-control">
									</div>
								</div>
								<div class="col-md-8">
									<div class="form-group">
										<input type="text" v-model="perfil.cep" placeholder="Cep" class="form-control">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<input type="submit" @click="atualizarPerfil()" value="Salvar Alterações" class="btn btn-primary w-100">
									</div>
								</div>
							</div>
						</div>
					</div>

					<!--fade -->
					<div class="tab-pane fade pt-3" id="conta" role="tabpanel" aria-labelledby="conta-tab">
						<div class="container">
							<div class="row">
								<div class="col-md-6">
									<div class="alert alert-info">
										Use o botão Redefinir e-mail de senha para redefinir a senha. O formulário não funciona atualmente
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" v-model="conta.nome" placeholder="Nome de Usuário" class="form-control">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" v-model="conta.email" placeholder="Endereço de email" class="form-control">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" v-model="conta.password" placeholder="Nova senha" class="form-control">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input type="text" v-model="conta.confirmaSenha" placeholder="Confirmar Senha" class="form-control">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<input type="file" @change="enviarImagem" class="form-control">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<input type="submit" value="Salvar Alterações" class="btn btn-primary w-100">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<input type="button" @click="redefinirSenha" value="Redefinir senha email" class="btn btn-success w-100">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
//import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';
import Toast from 'sweetalert2'

export default {
	name: 'Perfil',
	data() {
		return {
			perfil: {
				nome:null,
				telefone:null,
				endereco:null,
				cep:null
			},
			conta: {
				nome:null,
				email:null,
				fotoUrl:null,
				emailVerificado:null,
				password:null,
				confirmaSenha:null,
				uid:null
			}
		}
	},
	firestore() {
		const user = fb.auth().currentUser;
		return {
			perfil: db.collection('perfis').doc(user.uid),
		}
	},
	methods: {
		atualizarPerfil() {
			console.log(this.perfil)
			this.$firestore.perfil.update(this.perfil);
		},
		redefinirSenha() {
			const auth = fb.auth();

			auth.sendPasswordResetEmail(auth.currentUser.email).then(() => {
				Toast.fire({
					type: 'success',
					title: 'Email enviado'
				})
			}).catch((error) => {
				console.log(error);
			});
		},
		enviarImagem() {

		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>