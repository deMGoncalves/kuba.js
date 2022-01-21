import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default () =>
  <header className={style.header}>
    <text.Strong className={style.header__strong} master darker xxxs>Comparar</text.Strong>
    <text.P className={style.header__p} master darker xs medium>Selecione dois shapes para fazer uma comparação</text.P>
  </header>