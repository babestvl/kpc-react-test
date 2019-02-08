import React from 'react'
import Dropdown from 'react-dropdown'
import styled from 'styled-components'
import FieldComponent from 'common/FieldComponent'
import options from './options'
import 'react-dropdown/style.css'

const StyledDropdown = styled(Dropdown)`
	.Dropdown-placeholder {
		color: #888;
	}

	.is-selected {
		color: #333;
	}
`

const DropdownComponent = ({ className, title, optionType, require }) => {
	let storeValue = optionType ? '' : options.gender[0]
	const dropdownOptions = optionType || 'gender'

	const handleOnChange = ({ value }) => {
		storeValue = value
	}

	return (
		<FieldComponent className={className} title={title} require={require}>
			<StyledDropdown
				options={options[dropdownOptions]}
				onChange={handleOnChange}
				value={storeValue}
				placeholder={storeValue ? '' : '-- Please Select --'}
			/>
		</FieldComponent>
	)
}

export default DropdownComponent
