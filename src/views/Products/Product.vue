<template>
  <b-container>
    <b-row>
      <b-col class="mt-4" cols="12"> Novo Produto </b-col>
      <b-col class="mt-4" cols="12">
        <b-card style="max-width: 20rem; margin: 0 auto" class="mb-2">
          <b-form-group id="fieldset-1" label="Produto" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="product.name"
              class="mb-2"
              trim
            ></b-form-input>
          </b-form-group>

          <b-form-group id="fieldset-1" label="Status" label-for="input-1">
            <b-form-checkbox
              id="checkbox-1"
              v-model="product.status"
              class="mb-2"
              name="checkbox-1"
            >
              Ativo
            </b-form-checkbox>
          </b-form-group>

          <div class="d-flex justify-content-between">
            <b-button @click="returnPage()" variant="outline-primary">
              Voltar
            </b-button>
            <b-button
              size="sm"
              v-if="!hasRegister"
              @click="saveProduct()"
              variant="primary"
              >Registrar</b-button
            >
            <b-button
              size="sm"
              v-else
              @click="updateProduct()"
              variant="primary"
              >Atualizar</b-button
            >
          </div>
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
      hasRegister: false,
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
      this.$store.dispatch('updateExistingProduct', this.product);
      this.$router.push({ name: 'productsList' });
    },
    getStoreProduct(productId) {
      this.hasRegister = true;
      this.product = this.$store.getters.productById(productId);
    },
    returnPage() {
      this.$router.back();
    },
  },
  created() {
    if (this.$route.params.productId) {
      this.getStoreProduct(parseInt(this.$route.params.productId));
    }
  },
};
</script>

<style></style>
