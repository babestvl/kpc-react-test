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
	state = {
		data: '',
	}

	handleOnChange = inputType => ({ target: { value } }) => {
		const { data: propsData, title } = this.props
		propsData[title] = value
		this.setState({ data: value })
	}

	handlePassportInput = ({ target: { value } }) => {
		const upperValue = value.toUpperCase()
		const { data: propsData, title } = this.props
		propsData[title] = value
		this.setState({ data: upperValue })
	}

	render() {
		const { data } = this.state
		const { className, title, inputType, require, endingText } = this.props
		const passport = inputType === 'passport'
		const type = inputType === 'salary' ? 'number' : 'text'
		return (
			<FieldComponent className={className} title={title} require={require}>
				<StyledInput
					type={type}
					value={data}
					maxLength={passport ? 8 : 100}
					onChange={
						passport ? this.handlePassportInput : this.handleOnChange(inputType)
					}
				/>
				<EndingText>{endingText || ''}</EndingText>
			</FieldComponent>
		)
	}
}

export default InputField
