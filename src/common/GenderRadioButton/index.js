import React, { PureComponent } from 'react'
import FieldComponent from 'common/FieldComponent'
import styled from 'styled-components'

const OptionWrapper = styled.div`
	display: flex;
	margin: 0 8px;
	align-items: center;
`

const OptionText = styled.span`
	margin-left: 4px;
`

class GenderRadioButton extends PureComponent {
	state = {
		selectedOption: 'male',
	}

	handleOnChange = ({ target: { value } }) => {
		this.setState({ selectedOption: value })
	}

	render() {
		const { selectedOption } = this.state
		const { className } = this.props
		return (
			<FieldComponent className={className} title="Gender">
				<OptionWrapper>
					<input
						type="radio"
						value="male"
						checked={selectedOption === 'male'}
						onChange={this.handleOnChange}
					/>
					<OptionText>Male</OptionText>
				</OptionWrapper>
				<OptionWrapper>
					<input
						type="radio"
						value="female"
						checked={selectedOption === 'female'}
						onChange={this.handleOnChange}
					/>
					<OptionText>Female</OptionText>
				</OptionWrapper>
				<OptionWrapper>
					<input
						type="radio"
						value="unisex"
						checked={selectedOption === 'unisex'}
						onChange={this.handleOnChange}
					/>
					<OptionText>Unisex</OptionText>
				</OptionWrapper>
			</FieldComponent>
		)
	}
}

export default GenderRadioButton
