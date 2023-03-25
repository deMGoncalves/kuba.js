import styled from '@kuba/styled'

export default styled`
  .header {
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
  }

  @media (max-width: 767px) {
    .header div:nth-child(2) {
      display: none;
    }
  }
`
