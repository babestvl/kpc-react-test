import React from 'react'
import Dropdown from 'react-dropdown'
import styled from 'styled-components'
import FieldComponent from 'common/FieldComponent'
import options from './options'

const StyledDropdown = styled(Dropdown)`
	.Dropdown-placeholder {
		color: #888;
	}

	.is-selected {
		color: #333;
	}
`

const DropdownComponent = ({ className, title, optionType, require, data }) => {
	const fieldName = title.replace(' ', '')
	data[fieldName] = optionType ? '' : options.gender[0]

	const dropdownOptions = optionType || 'gender'

	const handleOnChange = ({ value }) => {
		data[fieldName] = value
	}

	return (
		<FieldComponent className={className} title={title} require={require}>
			<StyledDropdown
				options={options[dropdownOptions]}
				onChange={handleOnChange}
				value={data[fieldName]}
				placeholder={data[fieldName] ? '' : '-- Please Select --'}
			/>
		</FieldComponent>
	)
}

export default DropdownComponent
