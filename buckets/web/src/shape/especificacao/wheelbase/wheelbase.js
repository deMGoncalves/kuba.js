import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Wheelbase {
  #valor

  get valor () {
    return this.#valor
      ? `${this.#valor}"`
      : ''
  }

  @repaint
  changeValor (valor) {
    this.#valor = valor
  }
}

export default Wheelbase
