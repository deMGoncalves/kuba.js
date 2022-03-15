import { render } from '@kuba/h'
import * as f from '@kuba/f'
import { paint } from '@kuba/sandbox'

export default {
  is (event) {
    return f.and(
      f.equal('render', event.data?.action),
      f.of(
        f.equal('head', event.data?.payload?.element),
        f.equal('body', event.data?.payload?.element)
      )
    )
  },

  execute (event) {
    render(
      document[event.data.payload.element],
      ...f.map(event.data?.payload?.children, paint)
    )
  }
}
