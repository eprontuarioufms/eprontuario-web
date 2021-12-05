import feedbackFactory from './feedback.factory'
import paciente from './paciente.factory'
import professor from './professor.factory'

export default {
  ...paciente,
  ...professor,
  ...feedbackFactory,
}
