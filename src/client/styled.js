import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    width: 100%;
    height: 100%;
  }
  
  *, :after, :before {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  input {
    height: 100%;
    border: 0.5px solid #ccc
    font-size: 16px;
  }
`
