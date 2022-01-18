import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Descricao {
  get valor () {
    return global.descricao
  }
}

export default Descricao
