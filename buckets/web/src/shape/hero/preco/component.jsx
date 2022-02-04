import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import text from '@kuba/text'
import style from './style'

export default (preco) =>
  <>
    <Hide when={preco.empty}>
      <div className={style.preco}>
        <text.Span className={style.preco__text} master darker xxxs medium>Preço</text.Span>
        <text.Data className={style.preco__text} master darker md bold>{preco.valor}</text.Data>
        <text.P className={style.preco__text} master xxxs>Preço sujeito a alteração no site indicado</text.P>
      </div>
    </Hide>
  </>