import React, { PureComponent } from 'react'
import FieldComponent from 'common/FieldComponent'
import styled from 'styled-components'
// import numeral from 'numeral'

const StyledInput = styled.input`
	width: 200px;
`

const EndingText = styled.span`
	margin-left: 8px;
	align-self: center;
`

class InputField extends PureComponent {
	state = {
		data: '',
	}

	handleOnChange = inputType => ({ target: { value } }) => {
		if (inputType === 'number') {
			if (+value || '') {
				this.setState({ data: value })
			}
		} else {
			this.setState({ data: value })
		}
	}

	handlePassportInput = ({ target: { value } }) => {
		const upperValue = value.toUpperCase()
		this.setState({ data: upperValue })
	}

	// handleOnBlur = inputType => e => {
	// 	const { data } = this.state
	// 	if (inputType === 'number') {
	// 		const number = numeral(data).format()
	// 		this.setState({ data: number })
	// 	}
	// }

	render() {
		const { data } = this.state
		const {
			className,
			title,
			inputType = 'text',
			require,
			passport,
			endingText,
		} = this.props

		return (
			<FieldComponent className={className} title={title} require={require}>
				<StyledInput
					type="text"
					value={data}
					maxLength={passport ? 8 : 100}
					onChange={
						passport ? this.handlePassportInput : this.handleOnChange(inputType)
					}
					// onBlur={this.handleOnBlur(inputType)}
				/>
				<EndingText>{endingText || ''}</EndingText>
			</FieldComponent>
		)
	}
}

export default InputField
