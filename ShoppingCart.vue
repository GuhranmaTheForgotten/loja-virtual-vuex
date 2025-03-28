<template>
  <div>
    <button @click="addItemToCart">Adicionar ao Carrinho</button>
    <p>Total de itens no carrinho: {{ cartItemCount }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['addToCart']),
    addItemToCart() {
      const product = { id: 1, name: 'Produto Exemplo', price: 100 };
      this.addToCart(product);
    }
  },
  computed: {
    ...mapGetters(['cartItemCount'])
  }
}
</script>