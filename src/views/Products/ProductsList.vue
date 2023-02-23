<template>
  <b-container>
    <b-row>
      <b-col cols="6" class="mt-2 d-flex justify-content-start">
        Produtos
      </b-col>
      <b-col cols="6" class="mt-2 d-flex justify-content-end">
        <b-button to="/products/create" variant="success"
          >Criar Produto</b-button
        >
      </b-col>
      <b-col cols="12" class="mt-4">
        <b-table striped hover :fields="fields" :items="products">
          <template #empty>
            <h4>No momento não temos Produtos Cadastrados</h4>
          </template>
          <template #cell(actions)="">
            <div class="btn-actions d-flex justify-content-end">
              <b-button variant="success">Editar</b-button>
              <b-button variant="secondary">Desativar</b-button>
            </div>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: 'Products',
  data() {
    return {
      fields: [
        { key: 'name', label: 'Produto' },
        { key: 'status', label: 'Status' },
        { key: 'actions', label: 'Ações' },
      ],
    };
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-actions {
  button {
    margin-left: 15px;
  }
}
</style>
