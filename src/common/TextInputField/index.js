import React, { PureComponent } from 'react'
import { FieldWrapper, Title, StyledInput } from 'common/styled'

class TextInputField extends PureComponent {
	state = {
		data: '',
	}

	handleOnChange = ({ target: { value } }) => {
		this.setState({ data: value })
	}

	render() {
		const {
			titleText,
			inputType = 'text',
			require = false,
			endingText,
		} = this.props
		const { data } = this.state

		return (
			<FieldWrapper>
				<Title>{`${titleText}:${require ? '*' : ''}`}</Title>
				<StyledInput
					type={inputType}
					value={data}
					onChange={this.handleOnChange}
				/>
				<span>{endingText || ''}</span>
			</FieldWrapper>
		)
	}
}

export default TextInputField
