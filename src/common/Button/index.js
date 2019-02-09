import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	width: 100%;
	height: 100%;
	font-size: 20px;
`

const Button = ({ className }) => (
	<div className={className}>
		<StyledButton>SUBMIT</StyledButton>
	</div>
)

export default Button
