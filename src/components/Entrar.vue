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
									<input type="password" name="" class="form-control" id="exampleInputPassword1" placeholder="Senha">
								</div>
								<div class="form-group">
									<button class="btn btn-primary"></button>
								</div>
							</div>
							<div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
								<h5 class="text-center">Criar nova conta</h5>

								<div class="form-group">
									<label for="nome">Seu Nome</label>
									<input type="text" v-model="nome" name="" id="nome" class="form-control" placeholder="Seu Nome">
								</div>
								<div class="form-group">
									<label for="email">Seu Endereço de Email</label>
									<input type="text" v-model="email" name="" id="email" class="form-control" placeholder="Seu Email" aria-describedby="emailHelp">
								</div>
								<div class="form-group">
									<label for="password">Seu Endereço de Email</label>
									<input type="password" v-model="password" name="" id="password" class="form-control" placeholder="Sua Senha">
								</div>
								<div class="form-group">
									<button class="btn btn-primary">Cadastrar</button>
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
export default {
	name: "Entrar",
	data() {
		return {
			nome: null,
			email: null,
			password: null
		}
	},
}
</script>