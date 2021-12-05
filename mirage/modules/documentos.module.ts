import { Response } from 'miragejs'

export default function () {
  this.get('documentos/titulos', (_) => {
    return new Response(200, {}, ['Título 1', 'Título 2', 'Título 3'])
  })
}
