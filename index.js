import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    // Adicione outros estados globais aqui, como detalhes do usuário e inventário de produtos
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    // Adicione outras mutations aqui
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    // Adicione outras ações aqui
  },
  getters: {
    cartItemCount: state => {
      return state.cart.length;
    },
    // Adicione outros getters aqui
  }
});