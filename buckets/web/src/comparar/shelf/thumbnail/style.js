import styled from '@kuba/styled'

export default styled.style`
  .thumbnail {
    width: 300px;
  }

  .thumbnail__picture {
    border-radius: var(--border-radius-sm);
    height: auto;
    padding-top: calc(5 / 4 * 100%) !important;
  }

  .thumbnail__caption {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-xs) 0;
    text-align: center;
    white-space: normal !important;
  }

  @media (min-width: 769px) {
    .thumbnail__caption {
      text-align: start;
    }
  }

  .thumbnail__caption > p {
    line-height: var(--line-height-lg) !important;
  }
`
