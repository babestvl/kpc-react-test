import React from 'react'
import {
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

const FormComponent = ({ data, setDataField, handleSubmitButton }) => (
	<InputForm>
		<TitleDropdown
			title="Title"
			data={data}
			setDataField={setDataField}
			require
		/>
		<NameInputField
			title="Firstname"
			data={data}
			setDataField={setDataField}
			require
		/>
		<NameInputField
			title="Lastname"
			data={data}
			setDataField={setDataField}
			require
		/>
		<BirthdayField title="Birthday" data={data} setDataField={setDataField} />
		<NationalityDropdown
			title="Nationality"
			optionType="nationality"
			data={data}
			setDataField={setDataField}
		/>
		<CitizenInputField data={data} setDataField={setDataField} />
		<GenderRadio data={data} setDataField={setDataField} />
		<PhoneNumberInputField data={data} setDataField={setDataField} />
		<PassportInputField
			title="Passport No"
			inputType="passport"
			setDataField={setDataField}
			data={data}
		/>
		<SalaryInputField
			title="Expected Salary"
			inputType="salary"
			endingText="THB"
			data={data}
			setDataField={setDataField}
			require
		/>
		<SubmitButton onClick={handleSubmitButton} text="SUBMIT" />
	</InputForm>
)

export default FormComponent
