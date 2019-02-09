import styled from 'styled-components'
import InputField from 'common/InputField'
import DropdownComponent from 'common/DropdownComponent'
import BirthdatePicker from 'common/BirthdatePicker'
import CitizenField from 'common/CitizenField'
import GenderRadioButton from 'common/GenderRadioButton'
import PhoneNumberInput from 'common/PhoneNumberInput'
import Button from 'common/Button'

export const Wrapper = styled.div`
	margin: 16px;
`

export const InputForm = styled.div`
	width: 100%;
	padding: 8px;
	margin-right: 100px;
	border: 0.5px solid #bbb;
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-column-gap: 8px;
		padding: 16px;
	}
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

export const RadioButton = styled(GenderRadioButton)`
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
