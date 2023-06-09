import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-style: italic;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a,
  button {
    cursor: pointer;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.offWhite};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
