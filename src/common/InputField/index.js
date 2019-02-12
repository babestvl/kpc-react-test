import React from 'react'
import FieldComponent from 'common/FieldComponent'
import styled from 'styled-components'

const EndingText = styled.span`
	margin-left: 8px;
	align-self: center;
`

const StyledInput = styled.input`
	@media (max-width: 768px) {
		width: 160px;
	}
	width: 200px;
`

const InputField = ({
	className,
	title,
	inputType,
	require,
	endingText,
	setDataField,
	data,
}) => {
	const fieldName = title.replace(' ', '')
	const handleOnChange = ({ target: { value } }) => {
		setDataField(fieldName, value)
	}

	const handlePassportInput = ({ target: { value } }) => {
		const upperValue = value.toUpperCase()
		setDataField(fieldName, upperValue)
	}

	const passport = inputType === 'passport'
	const type = inputType === 'salary' ? 'number' : 'text'
	return (
		<FieldComponent className={className} title={title} require={require}>
			<StyledInput
				type={type}
				value={data[fieldName]}
				maxLength={passport ? 8 : 100}
				onChange={passport ? handlePassportInput : handleOnChange}
			/>
			<EndingText>{endingText || ''}</EndingText>
		</FieldComponent>
	)
}

export default InputField
