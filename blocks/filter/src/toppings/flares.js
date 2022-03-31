import { paint, repaint } from '@kuba/h'
import actions from './actions'
import template from './template'
import Topping from './topping'

@paint(template)
class Flares extends Topping {
  get nome () {
    return 'Whell Flares'
  }

  @repaint
  @actions.change('flares')
  toggle () {
    super.toggle()
    return this
  }
}

export default Flares