import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Paciente } from '~/interfaces'

export class GetPacienteUseCase {
  constructor(protected axios: NuxtAxiosInstance) {
    this.axios = axios
  }

  async execute(): Promise<Paciente> {
    return await this.axios.$get(`api/pacientes`)
  }
}
