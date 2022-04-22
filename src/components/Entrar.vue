<template>
	<div class="login">
		<!--Modal-->
		<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<ul class="nav nav fill nav-pills mb-3" id="pills-home-tab" role="tablist">
							<li class="nav-item">
								<a class="nav-link active"  data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Entrar</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="true">Cadastrar-se</a>
							</li>
						</ul>

						<div class="tab-content" id="pills-content">
							<div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
								<h5 class="text-center">Faça login por favor</h5>
								<div class="form-group">
									<label for="exampleInputEmail1">Endereço de Email</label>
									<input type="email" name="" id="exampleInputEmail1" v-model="email" class="form-control" aria-describedby="emailHelp" placeholder="Digite seu Email">
									<small class="form-text text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</small>
								</div>
								<div class="form-group">
									<label for="exampleInputPassword1">Senha</label>
									<input type="password" @keyup.enter="entrar" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
								</div>
								<div class="form-group">
									<button class="btn btn-primary" @click="entrar">Entrar</button>
								</div>
							</div>

							<!--Modal de Cadastro de Usuário-->
							<div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
								<h5 class="text-center">Criar nova conta</h5>

								<div class="form-group">
									<label for="nome">Seu Nome</label>
									<input type="text" v-model="nome" name="" id="nome" class="form-control" placeholder="Seu Nome">
								</div>
								<div class="form-group">
									<label for="email">Seu Endereço de Email</label>
									<input type="text" v-model="email" name="" id="email" class="form-control" placeholder="Seu Email" aria-describedby="emailHelp">
									<small class="form-text text-muted">Nunca compartilharemos seu e-mail com mais ninguém.</small>
								</div>
								<div class="form-group">
									<label for="password">Sua Senha de Acesso</label>
									<input type="password" v-model="password" name="" id="password" class="form-control" placeholder="Sua Senha">
								</div>
								<div class="form-group">
									<button class="btn btn-primary" @click="registrar">Cadastrar</button>
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
import { fb, db } from '../firebase'
import $ from 'jquery'

export default {
	name: "Entrar",
	data() {
		return {
			nome: null,
			email: null,
			password: null
		}
	},
	methods: {
		entrar() {
			fb.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
				$('#entrar').modal('hide')
				this.$router.replace('admin')
			})
			.catch(function(error) {
				var erroCodigo = error.code
				var erroMensagem = error.message 

				if (erroCodigo == 'auth/wrong-password') {
					alert('Senha errada.')
				} else {
					alert(erroMensagem)
				}
				console.log(error);
			})
		},
		registrar() {
			fb.auth().createUserWithEmailAndPassword(this.email, this.password)
			.then((user) => {
				$('#entrar').modal('hide')

				db.collection('perfil').doc(user.user.uid).set({
					nome: this.nome
				})
				.then(function() {
					console.log("Documento registrado com sucesso!");
				})
				.catch(function (error) {
					console.error("Erro ao registrar documento: " + error);
				})
				this.$router.replace('admin')
			})
			.catch(function (error) {
				var erroCodigo = error.code 
				var erroMensagem = error.message 

				if (erroCodigo == 'auth/weak-password') {
					alert('A senha é muito fraca.')
				} else {
					alert(erroMensagem)
				}
				console.log(error);
			})
		}
	}
}
</script>