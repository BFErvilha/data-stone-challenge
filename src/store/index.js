import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: 'GeForce RTX 3090', status: true },
      { id: 2, name: 'GeForce RTX 3070', status: false },
      { id: 3, name: 'GeForce RTX 2080 Ti', status: true },
      { id: 4, name: 'GeForce RTX 2080 Super', status: true },
      { id: 5, name: 'GeForce RTX 2070 Super', status: true },
      { id: 6, name: 'Radeon RX 7900 XTX', status: true },
      { id: 7, name: 'Radeon RX 6950 XT', status: true },
      { id: 8, name: 'Radeon RX 7900 XT', status: true },
    ],
    customers: [
      {
        id: 1,
        name: 'Hecos Fernandes',
        document: '12.615.084-9',
        phone: '(95) 2931-7452',
        email: 'hecos@teste.com',
        products: [],
        status: true,
      },
      {
        id: 2,
        name: 'Wuyga Francisco',
        document: '48.540.489-8',
        phone: '(95) 3168-7062',
        email: 'wuyga@teste.com',
        products: [],
        status: false,
      },
      {
        id: 3,
        name: 'Clark Kent',
        document: '43.611.010-6',
        phone: '(96) 3314-7196',
        email: 'clark@teste.com',
        products: [],
        status: false,
      },
      {
        id: 4,
        name: 'Bruce Wayne',
        document: '26.921.951-1',
        phone: '(84) 2634-7281',
        email: 'bruce@teste.com',
        products: [],
        status: false,
      },
      {
        id: 5,
        name: 'Barry Allen',
        document: '16.488.357-5',
        phone: '(28) 2879-3770',
        email: 'barry@teste.com',
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
