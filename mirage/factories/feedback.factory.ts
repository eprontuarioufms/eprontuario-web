import { Factory } from 'miragejs'

import faker from 'faker'

export default {
  feedback: Factory.extend({
    id: (i) => i,
    email: faker.internet.email(),
    content: faker.lorem.lines(4),
  }),
}
