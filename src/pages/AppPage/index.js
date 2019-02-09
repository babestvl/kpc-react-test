import React from 'react'
import { connect } from 'react-redux'
import {
	Wrapper,
	TitleDropdown,
	NameInputField,
	BirthdayField,
	NationalityDropdown,
	CitizenInputField,
	RadioButton,
	PassportInputField,
	SalaryInputField,
	PhoneNumberInputField,
} from './styled'

const AppPage = () => (
	<Wrapper>
		<TitleDropdown title="Title" require />
		<NameInputField title="Firstname" require />
		<NameInputField title="Lastname" require />
		<BirthdayField title="Birthday" />
		<NationalityDropdown title="Nationality" optionType="nationality" />
		<CitizenInputField />
		<RadioButton />
		<PhoneNumberInputField />
		<PassportInputField title="Passport No." passport />
		<SalaryInputField
			title="Expected Salary"
			inputType="number"
			endingText="THB"
		/>
	</Wrapper>
)

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(AppPage)
