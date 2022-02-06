import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Modelo {
  #valor

  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (shape) {
    return new Modelo(shape.modelo)
  }
}

export default Modelo
