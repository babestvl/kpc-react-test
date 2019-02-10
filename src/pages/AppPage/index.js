import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
	Wrapper,
	InputForm,
	TitleDropdown,
	NameInputField,
	BirthdayField,
	NationalityDropdown,
	CitizenInputField,
	GenderRadio,
	PassportInputField,
	SalaryInputField,
	PhoneNumberInputField,
	SubmitButton,
} from './styled'

class AppPage extends PureComponent {
	generateUid = () =>
		Math.random()
			.toString(34)
			.slice(2)

	render() {
		return (
			<Wrapper>
				<InputForm>
					<TitleDropdown title="Title" require />
					<NameInputField title="Firstname" require />
					<NameInputField title="Lastname" require />
					<BirthdayField title="Birthday" />
					<NationalityDropdown title="Nationality" optionType="nationality" />
					<CitizenInputField />
					<GenderRadio />
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
	}
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(AppPage)
