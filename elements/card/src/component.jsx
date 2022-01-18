import h, { Fragment } from '@kuba/h'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import style from './style'

export default (shape) =>
  <section className={style.shape} onClick={() => shape.redirect()}>
    <header className={style.shape__header}>
      {shape.marca}
    </header>
    <Picture className={style.shape__picture}>
      <Show when={shape.thumbnail}>
        <source srcSet={shape.thumbnail} slot='sources' />
      </Show>
    </Picture>
    <main className={style.shape__main}>
      {shape.modelo}
      {shape.laminas}
    </main>
    <footer className={style.shpae__footer}>
      {shape.tamanho}
    </footer>
  </section>