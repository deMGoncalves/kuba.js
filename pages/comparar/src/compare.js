import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
class Compare {
  get description () {
    return 'Está com dúvidas? Descubra qual shape é o melhor para seu setup'
  }

  get title () {
    return 'Comparar'
  }

  @didMount
  [f.dunder.mount] () {
    setTitle(this.title)
    setDescription(this.description)
    return this
  }
}

export default Compare