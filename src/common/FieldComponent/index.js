import React from 'react'
import { FieldWrapper, Title, RequireIcon } from './styled'

const FieldComponent = ({ className, children, title, require }) => (
	<FieldWrapper className={className}>
		<Title>{`${title}:`}</Title>
		<RequireIcon>{require ? '*' : ''}</RequireIcon>
		{children}
	</FieldWrapper>
)

export default FieldComponent
