<template>
  <b-container>
    <b-row>
      <b-col class="mt-4" cols="12"> Vincular Produto em Cliente </b-col>
      <b-col class="mt-4" cols="12"> {{ customer.name }} </b-col>
      <b-col class="mt-4" cols="6">
        <div style="width: 100%">
          <b-list-group>
            <b-list-group-item v-for="cp in costumerProducts" :key="cp.id">
              <div class="d-flex justify-content-between">
                {{ cp.name }}
                <b-button
                  @click="removeProduct(cp.id)"
                  variant="danger"
                  size="sm"
                  v-b-tooltip.hover.bottom="'Remover Produto'"
                >
                  <b-icon icon="trash-fill" />
                </b-button>
              </div>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
      <b-col class="mt-4" cols="6">
        <div style="width: 100%">
          <b-form-group label="Produtos disponiveis:">
            <b-form-checkbox-group
              id="checkbox-group-2"
              v-model="customersProduct.products"
              name="flavour-2"
            >
              <b-form-checkbox
                v-for="product in productsToShow"
                :key="product.id"
                :value="product"
                >{{ product.name }}</b-form-checkbox
              >
            </b-form-checkbox-group>
          </b-form-group>
        </div>
      </b-col>
      <b-col class="mt-4" cols="12">
        <b-button size="sm" @click="linkProducts()" variant="primary">
          Vincular Produtos
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'ProductToCostumer',
  data() {
    return {
      customersProduct: {
        customerId: '',
        products: [],
      },
    };
  },
  computed: {
    customer() {
      return this.$store.getters.customerById(
        parseInt(this.$route.params.customerId),
      );
    },
    costumerProducts() {
      return this.$store.getters.productsCustomerById(
        parseInt(this.$route.params.customerId),
      );
    },
    products() {
      return this.$store.getters.allProducts;
    },
    productsToShow() {
      let productList = [...this.products, ...this.costumerProducts].filter(
        (prod) =>
          !(
            this.products.some((prod1) => prod1.id === prod.id) &&
            this.costumerProducts.some((prod2) => prod2.id === prod.id)
          ),
      );
      productList = productList.filter((prod) => prod.status !== false);
      return productList;
    },
  },
  methods: {
    linkProducts() {
      this.customersProduct.customerId = this.customer.id;
      this.$store.dispatch('productTocustomer', this.customersProduct);
    },
    removeProduct(productId) {
      let toRemove = {
        customerId: this.customer.id,
        productId: productId,
      };
      this.$store.dispatch('removeProductFromCustomer', toRemove);
      this.customersProduct.products = this.customersProduct.products.filter(
        (prod) => prod.id !== productId,
      );
    },
  },
};
</script>

<style></style>
