import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.custom}>
    <s.Container>
      <h2 className={style.custom__h2}>produto confeccionado com primor e coração</h2>
      <picture className={style.custom__picture}>
        <source srcSet='https://dummyimage.com/747x400/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
        <source srcSet='https://dummyimage.com/939x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet='https://dummyimage.com/1200x200/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
        <img className={style.custom__img} loading='lazy' alt='custom' />
      </picture>
      <a className={style.custom__a} href='#'>ver mais</a>
    </s.Container>
  </section>
