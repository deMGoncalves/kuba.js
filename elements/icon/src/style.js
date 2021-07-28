import styled from '@kuba/styled'

export default styled.style`
  .icon img {
    object-fit: fill;
  }

  .icon {
    padding-top: var(--size-medium) !important;
    width: var(--size-medium) !important;
  }

  .icon[largest] {
    padding-top: var(--size-largest) !important;
    width: var(--size-largest) !important;
  }

  .icon[larger] {
    padding-top: var(--size-larger) !important;
    width: var(--size-larger) !important;
  }

  .icon[large] {
    padding-top: var(--size-large) !important;
    width: var(--size-large) !important;
  }

  .icon[small] {
    padding-top: var(--size-small) !important;
    width: var(--size-small) !important;
  }

  .icon[smaller] {
    padding-top: var(--size-smaller) !important;
    width: var(--size-smaller) !important;
  }

  .icon[smallest] {
    padding-top: var(--size-smallest) !important;
    width: var(--size-smallest) !important;
  }
`
