import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: 'Produto 1', id: 1, status: 'ativo' },
      { name: 'Produto 2', id: 2, status: 'inativo' },
      { name: 'Produto 3', id: 3, status: 'ativo' },
    ],
  },
  getters: {
    allProducts: (state) => state.products,
    productById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },
  mutations: {
    addProduct(state, newProduct) {
      state.products.push(newProduct);
    },
    updateProduct(state, productUpdated) {
      state.products.map((product) => {
        if (product.id === productUpdated.id) {
          product.status = productUpdated.status;
          product.name = productUpdated.name;
        }
      });
    },
  },
  actions: {
    addNewProduct({ commit }, newProduct) {
      commit('addProduct', newProduct);
    },
    updateExistingProduct({ commit }, productUpdated) {
      commit('updateProduct', productUpdated);
    },
  },
  modules: {},
});
