import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	width: 100%;
	height: 100%;
	font-size: 20px;
	border-radius: 4px;
`

const Button = ({ text, className, onClick }) => (
	<div className={className}>
		<StyledButton onClick={onClick}>{text}</StyledButton>
	</div>
)

export default Button
