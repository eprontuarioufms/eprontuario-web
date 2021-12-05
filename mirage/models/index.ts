import { Model } from 'miragejs'
import feedbackModel from './feedback.model'

import pacienteModel from './paciente.model'
import professorModel from './professor.model'

export default {
  paciente: pacienteModel,
  professores: professorModel,
  feedback: feedbackModel,
  login: Model.extend({
    email: '',
    password: '',
  }),
}
