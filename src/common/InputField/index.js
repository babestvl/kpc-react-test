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

	handleOnChange = ({ target: { value } }) => {
		this.setState({ data: value })
	}

	render() {
		const { data } = this.state
		const {
			className,
			title,
			inputType = 'text',
			require = false,
			endingText,
		} = this.props

		return (
			<FieldComponent className={className} title={title} require={require}>
				<StyledInput
					type={inputType}
					value={data}
					onChange={this.handleOnChange}
				/>
				<span>{endingText || ''}</span>
			</FieldComponent>
		)
	}
}

export default InputField
