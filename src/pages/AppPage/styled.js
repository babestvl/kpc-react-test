import styled from 'styled-components'
import InputField from 'common/InputField'
import DropdownComponent from 'common/DropdownComponent'
import BirthdatePicker from 'common/BirthdatePicker'

export const Wrapper = styled.div`
	padding: 16px 8px;
	@media (min-width: 700px) {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-column-gap: 8px;
	}
`

export const TitleDropdown = styled(DropdownComponent)`
	grid-column: span 2;
`

export const NameInputField = styled(InputField)`
	grid-column: span 2;
`

export const BirthdayField = styled(BirthdatePicker)`
	grid-column: span 2;
`

export const NationalityDropdown = styled(DropdownComponent)`
	grid-column: span 4;
`
