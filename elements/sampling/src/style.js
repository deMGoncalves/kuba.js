import styled from '@kuba/styled'

export default styled.style`
  .sampling {
    display: flex;
    flex-direction: column;
    gap: var(--size-smallest);
  }

  .sampling__picture {
    border-radius: var(--size-smallest);
    padding-top: calc(5 / 4 * 100%);
  }

  .sampling__figcaption {
    display: flex;
    flex-direction: column;
    gap: var(--size-smallest);
  }
`
