import * as f from '@kuba/f'
import Attributes from './attributes'
import Children from './children'
import ClassName from './className'
import domParser from './domParser'
import Events from './events'

class Tag {
  #attributes
  #children
  #className
  #element
  #entity
  #events
  #is
  #name
  #slot
  #uid

  get attributes () {
    return this.#attributes
  }

  get children () {
    return this.#children
  }

  get className () {
    return this.#className
  }

  get element () {
    return this.#element ??= document.createElement(this.name, { is: this.is })
  }

  get entity () {
    return this.#entity
  }

  get events () {
    return this.#events
  }

  get is () {
    return this.#is
  }

  get isNode () {
    return f.T()
  }

  get name () {
    return this.#name
  }

  get slot () {
    return this.#slot
  }

  get type () {
    return 1
  }

  get uid () {
    return this.#uid
  }

  constructor (tagName, props, children) {
    this.#attributes = Attributes.create(props, this)
    this.#children = Children.create(children, this)
    this.#className = ClassName.create(props, this)
    this.#events = Events.create(props, this)
    this.#is = props.is
    this.#name = tagName
    this.#slot = props.slot
    this.#uid = props.uid
  }

  addEventListener (name, listener) {
    this.element[name] = listener
    return this
  }

  append (...children) {
    this.element.append(...f.map(children, c => c.paint()))
    return this
  }

  appendChild (child) {
    this.element.appendChild(child.paint())
    return this
  }

  connect (entity) {
    this.#entity = entity
    return this
  }

  didMount () {
    f.idle(() =>
      this.#entity?.[f.magic('didMount')]?.())()
    return this
  }

  didUnmount () {
    f.idle(() =>
      this.#entity?.[f.magic('didUnmount')]?.())()
    return this
  }

  didUpdate () {
    f.idle(() =>
      this.#entity?.[f.magic('didUpdate')]?.())()
    return this
  }

  insertAdjacentElement (position, element) {
    f.forEach(
      domParser(element),
      (element) => this.element.insertAdjacentElement(position, element)
    )
    return this
  }

  paint () {
    this.willMount()
    this.attributes.paint()
    this.children.paint()
    this.className.paint()
    this.events.paint()
    this.didMount()
    return this.element
  }

  reflow (tag) {
    this.willUpdate()
    this.attributes.reflow(tag.attributes)
    this.className.reflow(tag.className)
    this.events.reflow(tag.events)
    this.children.reflow(tag.children)
    this.didUpdate()
    return this
  }

  remove () {
    this.willUnmount()
    this.element.remove()
    this.didUnmount()
    return this
  }

  removeAttribute (key) {
    this.element.removeAttribute(key)
    return this
  }

  removeEventListener (name) {
    this.element[name] = undefined
    return this
  }

  replace (tag) {
    this.willUnmount()
    this.element.parentNode.replaceChild(tag.paint(), this.element)
    this.didUnmount()
    return this
  }

  setAttribute (key, value) {
    f.not(f.isNil(value)) && (
      this.element.setAttribute(key, value)
    )
    return this
  }

  willMount () {
    this.#entity?.[f.magic('willMount')]?.()
    return this
  }

  willUnmount () {
    this.#entity?.[f.magic('willUnmount')]?.()
    return this
  }

  willUpdate () {
    this.#entity?.[f.magic('willUpdate')]?.()
    return this
  }

  [f.magic('isEmpty')] () {
    return f.F()
  }

  static create (tagName, props, children) {
    return new Tag(tagName, props, children)
  }

  static is (target) {
    return f.test(/^\w+$/, target)
  }
}

export default Tag
