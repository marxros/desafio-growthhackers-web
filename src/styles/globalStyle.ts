import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fafafa;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;



export { GlobalStyle };