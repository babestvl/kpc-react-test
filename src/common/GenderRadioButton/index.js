import React from 'react'
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

const GenderRadioButton = ({ className, data }) => {
	if (!data.gender) {
		data.gender = 'male'
	}

	const handleOnChange = ({ target: { value } }) => {
		data.gender = value
	}

	return (
		<FieldComponent className={className} title="Gender">
			<OptionWrapper>
				<input
					type="radio"
					value="male"
					checked={data.gender === 'male'}
					onChange={handleOnChange}
				/>
				<OptionText>Male</OptionText>
			</OptionWrapper>
			<OptionWrapper>
				<input
					type="radio"
					value="female"
					checked={data.gender === 'female'}
					onChange={handleOnChange}
				/>
				<OptionText>Female</OptionText>
			</OptionWrapper>
			<OptionWrapper>
				<input
					type="radio"
					value="unisex"
					checked={data.gender === 'unisex'}
					onChange={handleOnChange}
				/>
				<OptionText>Unisex</OptionText>
			</OptionWrapper>
		</FieldComponent>
	)
}

export default GenderRadioButton
