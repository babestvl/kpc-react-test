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
					value="Male"
					checked={data.Gender === 'Male'}
					onChange={handleOnChange}
				/>
				<OptionText>Male</OptionText>
			</OptionWrapper>
			<OptionWrapper>
				<input
					type="radio"
					value="Female"
					checked={data.Gender === 'Female'}
					onChange={handleOnChange}
				/>
				<OptionText>Female</OptionText>
			</OptionWrapper>
			<OptionWrapper>
				<input
					type="radio"
					value="Unisex"
					checked={data.Gender === 'Unisex'}
					onChange={handleOnChange}
				/>
				<OptionText>Unisex</OptionText>
			</OptionWrapper>
		</FieldComponent>
	)
}

export default GenderRadioButton
