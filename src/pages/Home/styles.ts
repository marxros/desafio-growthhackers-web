import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 3rem;
  /* justify-content: space-around; */
  > h1 {
    width: 100%;
  }
  > span {
    color: #646464;
    width: 100%;
    padding-bottom: 20px;
    border-bottom:1px solid #d4d4d4;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  > div {
    margin: 10px;
  }
`;


