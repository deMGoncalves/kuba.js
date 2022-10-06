import * as f from '@kuba/f'
import { filter } from '@kuba/marionette'
import { paint, repaint } from '@kuba/h'
import actions from './actions'
import component from './component'

@paint(component)
@actions
class Option {
  #selected
  #target
  #valor

  @filter.isTruthy
  get selected () {
    return this.#selected ??= f.F()
  }

  get valor () {
    return this.#valor ??= ''
  }

  static get onChange () {
    return f.dunder.onChange
  }

  constructor (valor, target) {
    this.#target = target
    this.#valor = valor
  }

  @repaint
  toggle () {
    this.#selected = f.not(this.selected)
    this.#target[Option.onChange]()
    return this
  }

  [actions.key] () {
    return f.dunder('key', this.#target)
  }

  @repaint
  [actions.onRemove] () {
    this.#selected = f.F()
    this.#target[Option.onChange]()
    return this
  }

  [f.dunder.equal] () {
    return this.valor
  }

  static create (target) {
    return (valor) => new Option(valor, target)
  }
}

export default Option
