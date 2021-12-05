<template>
  <v-page-template title="Documentos" has-back-button></v-page-template>
</template>

<script lang="ts">
import Vue from 'vue'
import { LAYOUT } from '~/constants'
import VPageTemplate from '~/shared/components/VPageTemplate.vue'

export default Vue.extend({
  components: { VPageTemplate },
  layout: LAYOUT.default,
  middleware: ['auth'],
})
</script>
