import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	width: 100%;
	height: 100%;
	font-size: 20px;
`

const Button = ({ className, onClick }) => (
	<div className={className}>
		<StyledButton onClick={onClick}>SUBMIT</StyledButton>
	</div>
)

export default Button
