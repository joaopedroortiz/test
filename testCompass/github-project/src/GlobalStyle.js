import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    margin: auto;
    font-family: 'Roboto', sans-serif; 
    }

    body {
      background-color: #b5b5b5;
    }
    
    a {
      text-decoration: none;
    }
  `;

export default GlobalStyle;
