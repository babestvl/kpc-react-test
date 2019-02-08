import React from 'react'
import Dropdown from 'react-dropdown'
import styled from 'styled-components'
import { FieldWrapper, Title } from 'common/styled'
import options from './options'
import 'react-dropdown/style.css'

const StyledDropdown = styled(Dropdown)`
	margin-left: 8px;
`

const DropdownComponent = ({ titleText, optionType, require }) => {
	let storeValue = optionType ? '' : options.gender[0]
	const dropdownOptions = optionType || 'gender'

	const handleOnChange = ({ value }) => {
		storeValue = value
	}

	return (
		<FieldWrapper>
			<Title>{`${titleText}:${require ? '*' : ''}`}</Title>
			<StyledDropdown
				options={options[dropdownOptions]}
				onChange={handleOnChange}
				value={storeValue}
				placeholder={storeValue ? '' : '-- Please Select --'}
			/>
		</FieldWrapper>
	)
}

export default DropdownComponent
