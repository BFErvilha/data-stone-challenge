<template>
  <b-container>
    <b-row>
      <b-col class="mt-4" cols="12"> Novo Cliente </b-col>
      <b-col class="mt-4" cols="12">
        <b-card style="max-width: 300px; margin: 0 auto" class="mb-2">
          <b-form-group
            id="fieldset-1"
            label="Cliente"
            label-for="customer-name"
            class="mb-2"
          >
            <b-form-input
              id="customer-name"
              v-model="customer.name"
              type="text"
              trim
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="fieldset-1"
            label="Telefone"
            label-for="customer-phone"
            class="mb-2"
          >
            <b-form-input
              id="customer-phone"
              type="text"
              v-model="customer.phone"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-1"
            label="Document"
            label-for="customer-document"
            class="mb-2"
          >
            <b-form-input
              type="text"
              id="customer-document"
              v-model="customer.document"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-1"
            label="E-mail"
            label-for="customer-email"
            class="mb-2"
          >
            <b-form-input
              type="email"
              id="customer-email"
              v-model="customer.email"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-1"
            label="Status"
            label-for="customer-status"
            class="mb-4"
          >
            <b-form-checkbox
              id="customer-status"
              v-model="customer.status"
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
              v-if="!hasRegister"
              @click="saveCustomer()"
              variant="primary"
              size="sm"
              >Registrar</b-button
            >
            <b-button
              size="sm"
              v-else
              @click="updateCustomer()"
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
  name: 'Customer',
  data() {
    return {
      hasRegister: false,
      customer: {
        name: null,
        document: null,
        phone: null,
        email: null,
        products: 0,
        status: false,
      },
    };
  },
  methods: {
    saveCustomer() {
      this.$store.dispatch('addNewCustomer', this.customer);
      this.$router.push({ name: 'customersList' });
    },
    updateCustomer() {
      this.$store.dispatch('updateExistingCustomer', this.customer);
      this.$router.push({ name: 'customersList' });
    },
    getStoreCustomer(customerId) {
      this.hasRegister = true;
      this.customer = this.$store.getters.customerById(customerId);
    },
    returnPage() {
      this.$router.back();
    },
  },
  created() {
    if (this.$route.params.customerId) {
      this.getStoreCustomer(parseInt(this.$route.params.customerId));
    }
  },
};
</script>

<style></style>
