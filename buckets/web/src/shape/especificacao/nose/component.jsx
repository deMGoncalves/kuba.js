import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <>
    <Show when={nose.valor}>
      <div className={style.nose}>
        <text.Strong className={style.nose__text} master darker xs bold>Nose</text.Strong>
        <text.Span className={style.nose__text} master xxxs>Parte frontal inclinada do shape</text.Span>
      </div>
    </Show>
    <Show when={nose.pristine}>
      <div className={style.nose}>
        <text.Strong className={style.nose__text} master darker xs bold/>
        <text.Span className={style.nose__text} master xxxs />
      </div>
    </Show>
  </>
