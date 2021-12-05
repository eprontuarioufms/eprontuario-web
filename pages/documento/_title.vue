<template>
  <v-page-template :title="title" has-back-button> </v-page-template>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  asyncData({ params }) {
    const { title } = params
    return { title }
  },
})
</script>
