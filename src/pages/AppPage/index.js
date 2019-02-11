import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import actions from 'common/actions'
import selectors from 'common/selectors'
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

const generateUid = () =>
	Math.random()
		.toString(34)
		.slice(2)

class AppPage extends PureComponent {
	data = {}

	componentDidMount() {
		if (!this.data.uid) {
			this.data.Uid = generateUid()
		}
	}

	handleSubmitButton = () => {
		const { submitForm } = this.props
		submitForm(this.data)
	}

	renderInputForm() {
		const { data } = this

		return (
			<InputForm>
				<TitleDropdown title="Title" data={data} require />
				<NameInputField title="Firstname" data={data} require />
				<NameInputField title="Lastname" data={data} require />
				<BirthdayField title="Birthday" data={data} />
				<NationalityDropdown
					title="Nationality"
					optionType="nationality"
					data={data}
				/>
				<CitizenInputField data={data} />
				<GenderRadio data={data} />
				<PhoneNumberInputField data={data} />
				<PassportInputField
					title="Passport No"
					inputType="passport"
					data={data}
				/>
				<SalaryInputField
					title="Expected Salary"
					inputType="salary"
					endingText="THB"
					data={data}
				/>
				<SubmitButton onClick={this.handleSubmitButton} />
			</InputForm>
		)
	}

	render() {
		return <Wrapper>{this.renderInputForm()}</Wrapper>
	}
}

const mapStateToProps = state => ({
	forms: selectors.getForms(state),
})

const mapDispatchToProps = dispatch => ({
	submitForm: data => dispatch(actions.submitForm(data)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AppPage)
