import React from 'react'
import { FieldWrapper, Title } from './styled'

const FieldComponent = ({ className, children, title, require }) => (
	<FieldWrapper className={className}>
		<Title>{`${title}:${require ? '*' : ''}`}</Title>
		{children}
	</FieldWrapper>
)

export default FieldComponent
