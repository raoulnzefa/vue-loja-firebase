<template>
	<div class="admin">
		<div class="page-wrapper default-theme sidebar-bg bg1 toggled">
			<a href="#" id="show-sidebar" class="btn btn-sm btn-dark" @click="fecharMenu">
				<i class="fas fa-bars"></i>
			</a>
			<nav class="sidebar-wrapper" id="sidebar">
				<div class="sidebar-content">
					<!--sidebar-brand-->
					<div class="sidebar-item sidebar-brand">
						<a href="#">Loja Online</a>
						<div id="fechar-sidebar" @click="fecharMenu">
							<i class="fas fa-times"></i>
						</div>
					</div>
					<!--sidebar-header-->
					<div class="sidebar-item sidebar-header">
						<div class="user-pic">
							<img class="img-responsive img-rounded" src="/img/user.png" alt="Foto do usuário">
						</div>
						<div class="user-info">
							<span class="uiser-name">Fulano
								<strong>De Tal</strong>
							</span>
							<span class="user-role"> {{email }}</span>
							<span class="user-status">
								<i class="fa fa-circle"></i>
								<span>Online</span>
							</span>
						</div>
					</div>
					<!--sidebar-buscar-->
					<div class="sidebar-item sidebar-search">
						<div>
							<div class="input-group">
								<input type="text" class="form-control serach-menu" placeholder="Pesquisar...">
								<div class="input-group-append">
									<span class="input-group-text">
										<i class="fa fa-search" aria-hidden="true"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
					<!--sidebar-menu-->
					<div class="sidebar-item sidebar-menu">
						<ul>
							<li class="header-menu">
								<span>Menu</span>
							</li>
							<li>
								<router-link to="/admin/visaogeral">
                                <i class="fa fa-chart-line"></i>
                                <span>Visão geral</span>
								</router-link>
							</li>
							<li>
								<router-link to="/admin/produtos">
                                <i class="fab fa-amazon"></i>
                                <span>Produtos</span>
								</router-link>
							</li>
							<li>
								<router-link to="/admin/pedidos">
                                <i class="fab fa-amazon"></i>
                                <span>Pedidos</span>
								</router-link>
							</li>
							<li>
								<router-link to="/admin/perfil">
                                <i class="fab fa-amazon"></i>
                                <span>Perfil</span>
								</router-link>
							</li>
							<li>
								<a href="#" @click="sair">
                                <i class="fab fa-power-off"></i>
                                <span>Sair</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<!--sidebar-conteudo -->
			<main class="page-content">
				<router-view></router-view>
			</main>
		</div>
	</div>
</template>
<script>
//import Hero from "@/components/Hero.vue";
import {fb} from '../firebase';
import $ from 'jquery'
export default {
	name: 'Admin',
	data() {
		return {
			nome: null,
			email: null
		}
	},
	components: {
		//Hero
	},
	methods: {
		fecharMenu() {
			$('.page-wrapper').toggleClass('toggled')
		},
		sair() {
			fb.auth().signOut()
			.then(() => {
				this.$router.replace('/')
			})
			.catch((err) => {
				console.log(err);
			})
		}
	},
	created() {
		let usuario = fb.auth().currentUser 
		this.email = usuario.email
	}
}
</script>