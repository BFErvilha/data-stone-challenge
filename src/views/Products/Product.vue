<template>
  <b-row>
    <b-col cols="12"> Novo Produto </b-col>
    <b-col>
      <b-card style="max-width: 20rem; margin: 0 auto" class="mb-2">
        <b-form-group id="fieldset-1" label="Produto" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="product.name"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-1" label="Status" label-for="input-1">
          <b-form-checkbox
            id="checkbox-1"
            v-model="product.status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Ativo
          </b-form-checkbox>
        </b-form-group>

        <b-button @click="saveProduct()" variant="primary">Registrar</b-button>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: 'Product',
  data() {
    return {
      product: {
        name: null,
        status: false,
      },
    };
  },
  methods: {
    saveProduct() {
      this.$store.dispatch('addNewProduct', this.product);
      this.$router.push({ name: 'productsList' });
    },
    getStoreProduct(productId) {
      const allProducts = this.$store.getters.allProducts;
      this.product = allProducts.filter(
        (product) => product.id === parseInt(productId),
      );
    },
  },
  created() {
    if (this.$route.params.productId) {
      const productId = parseInt(this.$route.params.productId);
      this.getStoreProduct(productId);
    }
  },
};
</script>

<style></style>
