import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  input {
    padding: 4px;
    height: 100%;
    border: 0.5px solid #ccc
    font-size: 16px;
    outline: none;
  }

  button {
    outline: none;
    cursor: pointer;
    border: 0.5px solid #ccc;
    background-color: #fff;
    outline: none;

    &:hover {
      background-color: #eee;
    }

    &:active {
      background-color: #ddd;
    }
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
