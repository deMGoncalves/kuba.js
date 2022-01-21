import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import story from '@kuba/story'
import text from '@kuba/text'
import style from './style'

export default (related) =>
  <story.Section className={style.related} empty:isTruthy={related.empty}>
    <container.Div className={style.related__container}>
      <text.H2 master darker md medium>Separamos alguns shapes</text.H2>
      <Metro className={style.related__metro}>
        {related.shapes}
      </Metro>
    </container.Div>
  </story.Section>