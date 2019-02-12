import styled from 'styled-components'
import InputField from 'common/InputField'
import DropdownComponent from 'common/DropdownComponent'
import BirthdatePicker from 'common/BirthdatePicker'
import CitizenField from 'common/CitizenField'
import GenderRadioButton from 'common/GenderRadioButton'
import PhoneNumberInput from 'common/PhoneNumberInput'

import Button from 'common/Button'

export const Wrapper = styled.div`
	@media (min-width: 768px) {
		margin: 16px;
	}
	display: grid;
	grid-template-rows: 1fr 36px 1fr;
	grid-row-gap: 16px;
`

export const InputForm = styled.div`
	padding: 8px;
	overflow: auto;
	@media (min-width: 768px) {
		display: grid;
		border: 0.5px solid #bbb;
		grid-template-columns: repeat(8, 1fr);
		grid-column-gap: 8px;
		padding: 16px;
	}
`

export const DataControl = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 8px;
`

export const dataCollection = styled.div`
	padding: 8px;
`

export const TitleDropdown = styled(DropdownComponent)`
	grid-column: span 2;
`

export const NameInputField = styled(InputField)`
	grid-column: span 3;
`

export const BirthdayField = styled(BirthdatePicker)`
	grid-column: span 3;
`

export const NationalityDropdown = styled(DropdownComponent)`
	grid-column: span 5;
`

export const CitizenInputField = styled(CitizenField)`
	grid-column: span 7;
`

export const GenderRadio = styled(GenderRadioButton)`
	grid-column: span 8;
`

export const PhoneNumberInputField = styled(PhoneNumberInput)`
	grid-column: span 8;
`

export const PassportInputField = styled(InputField)`
	grid-column: span 8;
`

export const SalaryInputField = styled(InputField)`
	grid-column: span 6;
`

export const SubmitButton = styled(Button)`
	grid-column: span 1;
`

export const PaginateWrapper = styled.div`
	cursor: pointer;
	.pagination {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0 2px;
		padding: 4px 10px;
		border: 1px solid #17bebb;
		border-radius: 2px;
	}

	li.active {
		background-color: #17bebb;
	}

	a {
		outline: none;
	}
`

export const ControlWrapper = styled.div`
	display: flex;
	align-items: center;
`

export const SelectAllText = styled.span`
	margin-right: 16px;
	margin-left: 8px;
`

export const CheckBox = styled.input`
	height: 16px;
`
