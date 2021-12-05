import { NuxtAxiosInstance } from '@nuxtjs/axios'

interface Response {
  data: {
    titles: [string]
  }
}

export class GetOnlyDocumentTitle {
  constructor(protected axios: NuxtAxiosInstance) {
    this.axios = axios
  }

  async execute(): Promise<Response> {
    return await this.axios.get('api/documentos/titulos')
  }
}
