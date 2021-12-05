import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Feedback } from '~/interfaces'

interface Response {
  data: {
    feedbacks: Feedback[]
  }
}

export class GetAllFeedbacksUseCase {
  constructor(protected axios: NuxtAxiosInstance) {
    this.axios = axios
  }

  async execute(): Promise<Response> {
    return await this.axios.$get('/api/feedback')
  }
}
