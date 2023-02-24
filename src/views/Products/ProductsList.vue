<template>
  <b-container>
    <b-row>
      <b-col cols="6" class="mt-2 d-flex justify-content-start">
        Produtos
      </b-col>
      <b-col cols="6" class="mt-2 d-flex justify-content-end">
        <b-button to="/products/create" variant="success"
          >Novo Produto</b-button
        >
      </b-col>
      <b-col cols="12" class="mt-4">
        <b-table
          striped
          stacked="sm"
          hover
          :fields="fields"
          :items="products"
          :small="true"
        >
          <template #empty>
            <h4>No momento não temos Produtos Cadastrados</h4>
          </template>
          <template #cell(status)="data">
            <div class="badge" :class="statusToClass(data.item.status)">
              {{ data.item.status | statusName }}
            </div>
          </template>
          <template #cell(actions)="data">
            <div class="btn-actions d-flex justify-content-end">
              <b-button :to="`/products/${data.item.id}`" variant="success"
                >Editar</b-button
              >
              <b-button
                @click="statusChange(data.item.id)"
                :variant="data.item.status ? 'warning' : 'secondary'"
                >{{ data.item.status ? 'Desativar' : 'Ativar' }}</b-button
              >
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
        {
          key: 'actions',
          label: 'Ações',
          thStyle: { width: '250px !important' },
        },
      ],
    };
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
  methods: {
    statusToClass(status) {
      if (status) return 'badgeActive';
      return 'badgeInactive';
    },
    statusChange(id) {
      this.$store.dispatch('productStatusChange', id);
    },
  },
  filters: {
    statusName(status) {
      if (status) return 'Ativo';
      return 'Inativo';
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
.badgeActive {
  background-color: #53a653;
}

.badgeInactive {
  background-color: #f32013;
}
</style>
