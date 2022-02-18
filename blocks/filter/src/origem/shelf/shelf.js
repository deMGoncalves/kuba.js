import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import component from './component'
import Origem from './origem'
import schema from './schema.json'

@paint(component)
class Shelf {
  #origens

  get origens () {
    return this.#origens ??= f.map(schema, Origem.create(this))
  }

  [Origem.onChange] () {
    echo.emit('filter:change', {
      key: 'origem',
      value: f
        .from(this.origens)
        .pipe(f.filter(f.__, f.prop('selected')))
        .pipe(f.map(f.__, f.prop('valor')))
        .done()
    })
    return this
  }
}

export default Shelf