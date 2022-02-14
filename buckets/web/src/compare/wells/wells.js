import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Wells {
  get master () {
    return Shape.master?.wheel_wells
      ? 'Sim'
      : '-'
  }

  get slave () {
    return Shape.slave?.wheel_wells
      ? 'Sim'
      : '-'
  }
}

export default Wells
