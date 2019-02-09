import React from 'react'
import { connect } from 'react-redux'
import {
	Wrapper,
	InputForm,
	TitleDropdown,
	NameInputField,
	BirthdayField,
	NationalityDropdown,
	CitizenInputField,
	RadioButton,
	PassportInputField,
	SalaryInputField,
	PhoneNumberInputField,
	SubmitButton,
} from './styled'

const AppPage = () => (
	<Wrapper>
		<InputForm>
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
			<SubmitButton />
		</InputForm>
	</Wrapper>
)

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(AppPage)
