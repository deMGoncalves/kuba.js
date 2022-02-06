import h from '@kuba/h'
import icon from '@kuba/icon'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <div className={style.tamanho}>
    <text.Data className={style.tamanho__data} master darker xs bold>{tamanho.valor}</text.Data>
    <icon.ArrowLongRight small />
    <text.Data className={style.tamanho__data} master darker xs bold>
      {tamanho.wheelbase}
      <text.Stub master darker xxxs> wb</text.Stub>
    </text.Data>
  </div>
