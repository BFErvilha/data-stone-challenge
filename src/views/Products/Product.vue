<template>
  <b-container>
    <b-row>
      <b-col cols="12"> Novo Produto </b-col>
      <b-col cols="12">
        <b-card style="max-width: 20rem; margin: 0 auto" class="mb-2">
          <b-form-group id="fieldset-1" label="Produto" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="product.name"
              trim
            ></b-form-input>
          </b-form-group>

          <b-form-group id="fieldset-1" label="Status" label-for="input-1">
            <b-form-checkbox
              id="checkbox-1"
              v-model="product.status"
              name="checkbox-1"
            >
              Ativo
            </b-form-checkbox>
          </b-form-group>

          <b-button v-if="!productId" @click="saveProduct()" variant="primary"
            >Registrar</b-button
          >
          <b-button v-else @click="updateProduct()" variant="primary"
            >Atualizar</b-button
          >
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: 'Product',
  data() {
    return {
      productId: null,
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
    updateProduct() {
      this.product.id = this.productId;
      this.$store.dispatch('updateExistingProduct', this.product);
      this.$router.push({ name: 'productsList' });
    },
    getStoreProduct(productId) {
      const allProducts = this.$store.getters.allProducts;
      allProducts.map((item) => {
        if (item.id === productId) {
          this.product.name = item.name;
          this.product.status = item.status;
        }
      });
    },
  },
  created() {
    if (this.$route.params.productId) {
      this.productId = parseInt(this.$route.params.productId);
      this.getStoreProduct(this.productId);
    }
  },
};
</script>

<style></style>
