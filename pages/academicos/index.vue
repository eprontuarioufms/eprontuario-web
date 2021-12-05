<template>
  <v-page-template title="Academicos" has-back-button> </v-page-template>
</template>

<script lang="ts">
import Vue from 'vue'
import { LAYOUT } from '~/constants'

export default Vue.extend({
  layout: LAYOUT.default,
  middleware: ['auth'],
})
</script>

<style></style>
