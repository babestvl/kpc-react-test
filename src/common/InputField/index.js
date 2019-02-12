import React, { PureComponent } from 'react'
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

class InputField extends PureComponent {
	handleOnChange = ({ target: { value } }) => {
		const { title, setDataField } = this.props
		const fieldName = title.replace(' ', '')
		setDataField(fieldName, value)
	}

	handlePassportInput = ({ target: { value } }) => {
		const { title, setDataField } = this.props
		const upperValue = value.toUpperCase()
		const fieldName = title.replace(' ', '')
		setDataField(fieldName, upperValue)
	}

	render() {
		const {
			className,
			title,
			inputType,
			require,
			endingText,
			data,
		} = this.props
		const fieldName = title.replace(' ', '')
		const passport = inputType === 'passport'
		const type = inputType === 'salary' ? 'number' : 'text'
		const value = data[fieldName] || ''
		return (
			<FieldComponent className={className} title={title} require={require}>
				<StyledInput
					type={type}
					value={value}
					maxLength={passport ? 8 : 100}
					onChange={passport ? this.handlePassportInput : this.handleOnChange}
				/>
				<EndingText>{endingText || ''}</EndingText>
			</FieldComponent>
		)
	}
}

export default InputField
