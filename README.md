# Data Stone Challenge

Cadastro simples de cliente e produtos com associação de produtos por cliente.

Na ausência de API foi utilizado dados mockados na Store do projeto para popular as tabelas, podendo também sendo realizada a adição de novos produtos e clientes na tabela.

Divisão do projeto:

- Home: Com infomações básicas
- Listagem de Produtos: Uma tabela de listagem de produtos sendo populada através de consulta realizada na store do projeto(Vuex), com botões de ações (Editar e Ativar/Desativar produto), botão de criação de novo produto.
- Cadastro / Atualização de produto: Página utilizada tanto para cadastro quanto atualização de informações de produtos, que são salvas na store do projeto.
- Listagem de Clientes: Uma tabela de listagem de clientes sendo populada através de consulta realizada na store do projeto, com botões de ações (Adicionar produto, Editar e Ativar/Desativar cliente), e botão de criação de novo cliente.
- Cadastro / Atualização de Cliente: Página utilizada tanto para cadastro quanto para atualização do cliente, que são salvas na store do projeto.
- Adicionar Produto: Pagina que lista produtos já vinculados do cliente e produtos disponibilizados para o vinculo.

### Esse projeto contém:

- Vue.JS 2
- Bootstrap Vue

### Considerações especiais:

Projeto foi desenvolvido nas versões 18.12.1(node) e 8.19.2(npm)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
