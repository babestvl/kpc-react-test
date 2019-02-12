import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import 'react-dropdown/style.css'
import 'react-day-picker/lib/style.css'
import 'react-phone-number-input/style.css'

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
      font-size: 18px;
    }
    font-size: 14px;
  }

  input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0;
	}
`
