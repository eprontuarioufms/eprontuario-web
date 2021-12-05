<template>
  <v-page-template title="Configurações" has-back-button>
    <v-row class="mx-4 mt-5">
      <v-col cols="12" sm="12" md="6">
        <v-card elevation="12" hover ripple @click="goTo('/professores')">
          <v-card-title>Professores</v-card-title>
          <v-card-subtitle>Cadastrar e remover</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="12" hover ripple @click="goTo('/academicos')">
          <v-card-title>Academicos</v-card-title>
          <v-card-subtitle>Cadastrar e Remover</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mx-4">
      <v-col cols="12" sm="12" md="6">
        <v-card elevation="12" hover ripple @click="goTo('disciplinas')">
          <v-card-title>Disciplinas</v-card-title>
          <v-card-subtitle>Cadastrar e remover</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="12" hover ripple @click="goTo('matriculas')">
          <v-card-title>Matriculas</v-card-title>
          <v-card-subtitle>Cadastrar e remover</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mx-4">
      <v-col sm="12" md="6" v-if="isUserAdmin">
        <v-card
          elevation="12"
          hover
          ripple
          @click="goTo('configuracoes/permissoes')"
        >
          <v-card-title>Painel de Permissões</v-card-title>
          <v-card-subtitle>Adiciona e Remove Permissões</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col sm="12" md="6" v-if="isUserAdmin">
        <v-card elevation="12" hover ripple @click="goTo('/listar-feedbacks')">
          <v-card-title>Feedbacks</v-card-title>
          <v-card-subtitle>Listagem de feedbacks</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-page-template>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { LAYOUT } from '~/constants'
import { routerMixin } from '~/shared/mixins'
export default Vue.extend({
  mixins: [routerMixin],
  layout: LAYOUT.default,
  middleware: ['auth'],

  computed: {
    ...mapGetters('User', ['isUserAdmin']),
  },
})
</script>
VPageTemplate
<style></style>
