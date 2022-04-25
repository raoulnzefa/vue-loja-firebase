<template>
	<div class="chekout">
		<Navbar />
		<div class="container mt-5 pt-5">
			<div class="row">
				<div class="col-md-8">
					<h4 class="py-4">Confirmar</h4>
					<ul>
						<li class="media">
							<img src="" alt="" class="align-self-center mr-3">
							<div class="media-body">
								<h5 class="mt-0">item.produtoNome
									<span class="float-right" @click="$store.commit('removerDoCarrinho', item)">X</span>
								</h5>
								<p class="mt-0">item.produtoPreco | currency : 'BRL'</p>
								<p class="mt-0">Quantidade: item.produtoQuantidade</p>
							</div>
						</li>
					</ul>
					<div class="col-md-4">
						<p>
							Preço Total: {{this.$store.getters.precoTotal | currency : 'BRL'}}
						</p>

						<card class="stripe-cerd"
						:class="{complete }"
						stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
						@change="complete = $event.complete" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { Card, createToken } from 'vue-stripe-elements-plus';

export default {
	name: 'Confirmar',
	data() {
		return {
			complete: false,
			stripeOptions: {
				
			}
		}
	},
	components: { Card },
	methods: {
		pay() {
			createToken().then(data => console.log(data.token))
		}
	}
}
</script>
<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>