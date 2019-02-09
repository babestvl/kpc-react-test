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
    padding: 4px;
    height: 100%;
    border: 0.5px solid #ccc
    font-size: 16px;
  }

  span {
    @media (min-width: 768px) {
      font-size: 20px;
    }
    font-size: 16px;
  }

  input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0;
	}
`
