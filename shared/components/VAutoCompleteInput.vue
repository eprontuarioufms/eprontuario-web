<template>
  <v-responsive max-width="300">
    <v-autocomplete
      v-model="select"
      :items="documentos"
      :search-input.sync="search"
      item-text="titulo"
      item-value="symbol"
      cache-items
      class="mx-4"
      hide-no-data
      hide-details
      dense
      flat
      label="Procedimentos"
      solo-inverted
      return-object
    />
  </v-responsive>
</template>

<script lang="ts">
import Vue from 'vue'

import { GetOnlyDocumentTitle } from '~/usecases/document'
export default Vue.extend({
  name: 'VAutoCompleteInput',
  data: () => ({
    search: '',
    select: null,
    documentos: [],
  }),
  watch: {
    select(val) {
      this.search = ''
      if (this.$route.path !== `/documento/${val}`) {
        this.$router.push(`/documento/${val}`)
      }
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const { data } = await new GetOnlyDocumentTitle(this.$axios).execute()
      this.documentos = data
    },
  },
})
</script>

<style></style>
