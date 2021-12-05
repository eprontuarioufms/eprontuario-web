import { Module, VuexModule } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name: 'DocumentModel',
  stateFactory: true,
})
export class DocumentModel extends VuexModule {
  titles: string[] = ['ds', 'doij']
}
