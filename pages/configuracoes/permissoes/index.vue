<template>
  <v-page-template
    title="Painel de Permissões"
    has-back-button
  ></v-page-template>
</template>

<script>
import { LAYOUT } from '~/constants'
export default {
  layout: LAYOUT.default,
  middleware: 'auth',
}
</script>

<style></style>
