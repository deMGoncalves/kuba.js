import styled from '@kuba/styled'

export default styled.style`
  .side {
    background-color: var(--color-master-lightest);
    border-left: 1px solid var(--color-master-light);
    box-shadow: 0 10px 37px 0 rgba(0, 0, 0, 0.15);
    height: 100vh;
    opacity: 0;
    -ms-overflow-style: none;
    overflow-y: auto;
    position: fixed;
    right: 0;
    scrollbar-width: none;
    top: 0;
    transform: translate(298px, 0);
    transition: all 618ms cubic-bezier(0.77, 0, 0.175, 1);
    width: 298px;
    z-index: 1;
  }

  .side::-webkit-scrollbar {
    display: none;
  }

  .side[opened=true] {
    opacity: 1;
    transform: translate(0, 0);
  }

  .side__overlayer {
    display: none;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: calc(100vw - 298px);
    z-index: 1;
  }

  .side__overlayer[opened=true] {
    display: block;
  }
`
