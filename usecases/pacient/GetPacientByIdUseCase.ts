import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Paciente } from '~/interfaces'

export class GetPacienteByIdUseCase {
  constructor(protected id: number, protected axios: NuxtAxiosInstance) {
    this.id = id
    this.axios = axios
  }

  async execute(): Promise<Paciente> {
    return await this.axios.get('api/pacientes/' + this.id)
  }
}
