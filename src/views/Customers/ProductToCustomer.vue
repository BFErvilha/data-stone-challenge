<template>
  <b-container>
    <b-row>
      <b-col class="mt-4" cols="12"> Product To Costumer </b-col>
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
          <b-form-group
            label="Using sub-components:"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              id="checkbox-group-2"
              v-model="customersProduct.products"
              :aria-describedby="ariaDescribedby"
              name="flavour-2"
            >
              <b-form-checkbox
                v-for="product in products"
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
    },
  },
};
</script>

<style></style>
