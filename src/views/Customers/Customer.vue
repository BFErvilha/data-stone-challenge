<template>
  <b-container>
    <b-row>
      <b-col cols="12"> Novo Cliente </b-col>
      <b-col cols="12">
        <b-card style="max-width: 20rem; margin: 0 auto" class="mb-2">
          <b-form-group
            id="fieldset-1"
            label="Cliente"
            label-for="customer-name"
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
          >
            <b-form-checkbox
              id="customer-status"
              v-model="customer.status"
              name="checkbox-1"
            >
              Ativo
            </b-form-checkbox>
          </b-form-group>

          <b-button @click="saveCustomer()" variant="primary"
            >Registrar</b-button
          >
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
  },
};
</script>

<style></style>
