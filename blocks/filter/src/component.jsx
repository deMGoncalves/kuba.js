import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import Especificacao from './especificacao'
import Concave from './concave'
import Material from './material'
import Nose from './nose'
import Origem from './origem'
import Tail from './tail'
import Tamanho from './tamanho'

export default () =>
  <container.Section>
    <Metro>
      <Origem />
      <Tamanho />
      <Material />
      <Especificacao>
        <Nose />
        <Tail />
        <Concave />
      </Especificacao>
    </Metro>
  </container.Section>