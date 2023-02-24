<template>
  <b-container>
    <b-row>
      <b-col class="mt-4" cols="12">
        <h1>Code Challenge Data Stone</h1>
      </b-col>
      <b-col class="mt-4" cols="12">
        <p class="mt-4">Desafio Técnico Data Stone</p>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <p class="mt-4">Foram utilizados:</p>
            <b-list-group>
              <b-list-group-item>Vue.Js 2</b-list-group-item>
              <b-list-group-item>Vuex</b-list-group-item>
              <b-list-group-item>Vue Router</b-list-group-item>
              <b-list-group-item>Bootstrap-Vue</b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col class="mt-4" sm="12" md="6" lg="6">
            <p>
              Dados foram mockados na store do projeto para uma pré-visualização
              de cada listagem e ações requisitadas no teste
            </p>

            <div class="d-flex justify-content-around">
              <b-button size="sm" to="/customers" variant="primary"
                >Listagem de Clientes</b-button
              >
              <b-button size="sm" to="/products" variant="success"
                >Listagem de Produtos</b-button
              >
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Home',
};
</script>

<style></style>
