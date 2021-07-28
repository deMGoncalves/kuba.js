import styled from '@kuba/styled'

export default styled.style`
  .hero {
    padding-bottom: var(--size-largest);
    padding-top: var(--size-medium);
  }

  .hero__figure {
    position: relative;
  }

  .hero__picture {
    border-radius: var(--size-smallest);
    padding-top: calc(400 / 736 * 100%) !important;
  }

  @media (min-width: 769px) {
    .hero__picture {
      padding-top: calc(400 / 928 * 100%) !important;
    }
  }

  @media (min-width: 961px) {
    .hero__picture {
      padding-top: calc(400 / 1198 * 100%) !important;
    }
  }

  .hero__figcaption {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--size-medium);
    margin: 0 auto;
    padding-top: var(--size-smaller);
    width: 89%;
  }

  @media (min-width: 426px) {
    .hero__figcaption {
      width: 68%;
    }
  }

  @media (min-width: 769px) {
    .hero__figcaption {
      align-items: flex-start;
      height: 100%;
      justify-content: center;
      left: 0;
      padding: var(--size-largest);
      position: absolute;
      top: 0;
      width: 42%;
    }
  }

  .hero__text {
    line-height: 1.382;
    text-align: center;
  }

  @media (min-width: 769px) {
    .hero__text {
      text-align: left;
    }
  }
`
