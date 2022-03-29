import styled from '@kuba/styled'

export default styled.style`
  @media (min-width: 769px) {
    .shape__main {
      display: grid;
      gap: 0;
      grid-template-areas:
        'modelo hero'
        'descricao hero'
        'variacao hero'
        'especificacao hero'
        'material hero'
        'relacionado relacionado';
      grid-template-columns: calc(100% * 0.618) calc(100% * 0.382);
      margin: 0 auto;
      max-width: 987px;
      min-height: auto;
      row-gap: var(--spacing_inset-lg);
    }
  }
`