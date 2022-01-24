import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (helper) =>
  <div className={style.helper__tooltip}>
    <span className={style.helper__span}>{helper.text}</span>
    <text.Label className={style.helper__icon}>?</text.Label>
  </div>
