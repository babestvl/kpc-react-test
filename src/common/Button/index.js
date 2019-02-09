import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	width: 100%;
	height: 100%;
	cursor: pointer;
	font-size: 20px;
	border: 0.5px solid #ccc;
	outline: none;
	background-color: #fff;

	&:hover {
		background-color: #eee;
	}

	&:active {
		background-color: #ddd;
	}
`

const Button = ({ className }) => (
	<div className={className}>
		<StyledButton>SUBMIT</StyledButton>
	</div>
)

export default Button
