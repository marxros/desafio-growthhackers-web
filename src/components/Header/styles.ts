import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid #a8a8b3;
`;

export const Content = styled.div`
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.nav`
  max-width: 100%;
  height: 5rem;
  margin: 0 auto;
  /* padding: 0 2rem; */

  display: flex;
  align-items: center;

  a {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: #29292e;

    transition: color 0.2s ease-in-out;

    &+a {
      margin-left: 2rem;
    }

    &:hover {
      color: #ccc;
    }

    &.active::after {
      content: '';
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background-color: var(--yellow-500);
    }
  }
`;
