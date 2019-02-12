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

const GenderRadioButton = ({ className, data, setDataField }) => {
	const handleOnChange = ({ target: { value } }) => {
		setDataField('Gender', value)
	}

	return (
		<FieldComponent className={className} title="Gender">
			<OptionWrapper>
				<input
					type="radio"
					value="male"
					checked={data.Gender === 'male'}
					onChange={handleOnChange}
				/>
				<OptionText>Male</OptionText>
			</OptionWrapper>
			<OptionWrapper>
				<input
					type="radio"
					value="female"
					checked={data.Gender === 'female'}
					onChange={handleOnChange}
				/>
				<OptionText>Female</OptionText>
			</OptionWrapper>
			<OptionWrapper>
				<input
					type="radio"
					value="unisex"
					checked={data.Gender === 'unisex'}
					onChange={handleOnChange}
				/>
				<OptionText>Unisex</OptionText>
			</OptionWrapper>
		</FieldComponent>
	)
}

export default GenderRadioButton
