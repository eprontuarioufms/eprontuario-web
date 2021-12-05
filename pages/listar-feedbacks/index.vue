<template>
  <v-page-template title="Feedbacks" has-back-button>
    <v-card class="my-4">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="feedback in feedbacks"
          :key="feedback.id"
          class="py-2"
        >
          <v-expansion-panel-header>
            {{ feedback.email }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ feedback.content }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-page-template>
</template>

<script lang="ts">
import Vue from 'vue'

import { GetAllFeedbacksUseCase } from '~/usecases/feedback'

export default Vue.extend({
  async asyncData({ $axios }) {
    return {
      feedbacks: await new GetAllFeedbacksUseCase($axios).execute(),
    }
  },
})
</script>
