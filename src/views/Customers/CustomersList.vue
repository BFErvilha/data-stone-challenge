<template>
  <b-container>
    <b-row>
      <b-col cols="6" class="mt-2 d-flex justify-content-start">
        Clientes
      </b-col>
      <b-col cols="6" class="mt-2 d-flex justify-content-end">
        <b-button to="/customers/create" variant="success"
          >Novo Cliente</b-button
        >
      </b-col>
      <b-col cols="12" class="mt-4">
        <b-table
          striped
          stacked="sm"
          hover
          :fields="fields"
          :items="customers"
          :small="true"
        >
          <template #empty>
            <h4>No momento não temos clientes cadastrados ainda</h4>
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
  name: 'Customers',
  data() {
    return {
      fields: [
        { key: 'name', label: 'Produto' },
        { key: 'document', label: 'Documento' },
        { key: 'phone', label: 'Telefone' },
        { key: 'email', label: 'E-mail' },
        { key: 'products', label: 'Produtos' },
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
    customers() {
      return this.$store.getters.allCustomers;
    },
  },
  methods: {
    statusToClass(status) {
      if (status) return 'badgeActive';
      return 'badgeInactive';
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
