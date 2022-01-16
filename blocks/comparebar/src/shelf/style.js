import styled from '@kuba/styled'

export default styled.style`
  .shelf {
    min-height: calc(100vh - 176px);
  }

  .shelf__container {
    display: grid;
    grid-column-gap: var(--spacing_inset-xs);
    grid-row-gap: var(--spacing_inset-lg);
    grid-template-columns: repeat(2, 1fr);
  }
`