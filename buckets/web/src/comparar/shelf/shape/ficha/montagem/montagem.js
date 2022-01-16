import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Montagem {
  #valor
  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = f.or('-', valor)
  }

  static create (valor) {
    return new Montagem(valor)
  }
}

export default Montagem