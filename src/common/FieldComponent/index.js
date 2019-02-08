import React from 'react'
import { FieldWrapper, Title } from './styled'

const FieldComponent = ({ children, title, require }) => (
	<>
		<FieldWrapper>
			<Title>{`${title}:${require ? '*' : ''}`}</Title>
			{children}
		</FieldWrapper>
	</>
)

export default FieldComponent
