import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import component from './component'

@paint(component)
class Material {
  get master () {
    return Shape.master?.laminas
  }

  get slave () {
    return Shape.slave?.laminas
  }
}

export default Material