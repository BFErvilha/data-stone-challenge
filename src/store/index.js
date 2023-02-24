import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: 'Produto 1', status: true },
      { id: 2, name: 'Produto 2', status: false },
      { id: 3, name: 'Produto 3', status: true },
    ],
    customers: [
      {
        id: 1,
        name: 'Nome 1',
        document: 'mg-11.111.111',
        phone: '12 12345-1234',
        email: 'teste@teste.com',
        products: [],
        status: true,
      },
      {
        id: 2,
        name: 'Nome 2',
        document: 'mg-22.222.222',
        phone: '12 12345-1234',
        email: 'teste2@teste2.com',
        products: [],
        status: false,
      },
    ],
  },
  getters: {
    allProducts: (state) => state.products,
    allCustomers: (state) => state.customers,
    productById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
    customerById: (state) => (id) => {
      return state.customers.find((customer) => customer.id === id);
    },
    productsCustomerById: (state) => (id) => {
      let productsCustomer = state.customers.find(
        (customer) => customer.id === id,
      );
      return productsCustomer.products;
    },
  },
  mutations: {
    addProduct(state, newProduct) {
      newProduct.id = state.products.length + 1;
      state.products.push(newProduct);
    },
    addProductToCustomer(state, productToCustomer) {
      state.customers.map((customer) => {
        if (customer.id === productToCustomer.customerId) {
          productToCustomer.products.forEach((item) => {
            if (!customer.products.some((prod) => prod.id === item.id)) {
              customer.products.push(item);
            }
          });
        }
      });
    },
    removeProductCustomer(state, productToRemove) {
      state.customers.map((customer) => {
        if (customer.id === productToRemove.customerId) {
          const index = customer.products.findIndex(
            (prod) => prod.id === productToRemove.productId,
          );
          if (index !== -1) {
            customer.products.splice(index, 1);
          }
        }
      });
    },
    updateProduct(state, productUpdated) {
      state.products.map((product) => {
        if (product.id === productUpdated.id) {
          product.status = productUpdated.status;
          product.name = productUpdated.name;
        }
      });
    },
    productEnableDisable(state, productStateChanged) {
      state.products.map((product) => {
        if (product.id === productStateChanged) {
          product.status = !product.status;
        }
      });
    },
    customerEnableDisable(state, customerStateChanged) {
      state.customers.map((customer) => {
        if (customer.id === customerStateChanged) {
          customer.status = !customer.status;
        }
      });
    },
    addCustomer(state, newCustomer) {
      newCustomer.id = state.customers.length + 1;
      state.customers.push(newCustomer);
    },
    updateCustomer(state, customerUpdated) {
      state.customers.map((customer) => {
        if (customer.id === customerUpdated.id) {
          (customer.name = customerUpdated.name),
            (customer.document = customerUpdated.document),
            (customer.phone = customerUpdated.phone),
            (customer.email = customerUpdated.email),
            (customer.status = customerUpdated.status);
        }
      });
    },
  },
  actions: {
    addNewProduct({ commit }, newProduct) {
      commit('addProduct', newProduct);
    },
    addNewCustomer({ commit }, newCostumer) {
      commit('addCustomer', newCostumer);
    },
    updateExistingProduct({ commit }, productUpdated) {
      commit('updateProduct', productUpdated);
    },
    updateExistingCustomer({ commit }, customerUpdated) {
      commit('updateCustomer', customerUpdated);
    },
    productStatusChange({ commit }, productStatus) {
      commit('productEnableDisable', productStatus);
    },
    customerStatusChange({ commit }, customerStatus) {
      commit('customerEnableDisable', customerStatus);
    },
    productTocustomer({ commit }, productTocustomer) {
      commit('addProductToCustomer', productTocustomer);
    },
    removeProductFromCustomer({ commit }, productFromcustomer) {
      commit('removeProductCustomer', productFromcustomer);
    },
  },
  modules: {},
});
