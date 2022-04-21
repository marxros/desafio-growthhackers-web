import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 310px;
  width: 360px;
  max-width: 100%;
  justify-content: space-between;
  color: #1b3c34;
  background: #FFFFFF;
  border-radius: 5px;
  position: relative;

  > span {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #adadad;
  }
`;

export const ImageContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;

  img {
    max-width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  height: 50px;

  justify-content: space-between; 
  align-items: center;
`;