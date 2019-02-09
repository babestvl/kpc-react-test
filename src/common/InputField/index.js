import React, { PureComponent } from 'react'
import FieldComponent from 'common/FieldComponent'
import styled from 'styled-components'

const StyledInput = styled.input`
	width: 200px;
`
class InputField extends PureComponent {
	state = {
		data: '',
	}

	handleOnInput = ({ target: { value } }) => {
		this.setState({ data: value })
	}

	handlePassportInput = ({ target: { value } }) => {
		const upperValue = value.toUpperCase()
		this.setState({ data: upperValue })
	}

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
					type={inputType}
					value={data}
					maxLength={passport ? 8 : 100}
					onInput={passport ? this.handlePassportInput : this.handleOnInput}
				/>
				<span>{endingText || ''}</span>
			</FieldComponent>
		)
	}
}

export default InputField
