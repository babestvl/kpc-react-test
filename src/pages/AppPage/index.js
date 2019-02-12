import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import actions from 'common/actions'
import selectors from 'common/selectors'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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

const requireDataKeys = [
	'Title',
	'Firstname',
	'Lastname',
	'Birthday',
	'MobilePhone',
	'ExpectedSalary',
]

class AppPage extends PureComponent {
	data = {}

	componentDidMount() {
		if (!this.data.Uid) {
			this.data.Uid = generateUid()
		}
	}

	resetData = () => {
		this.data = {
			Uid: generateUid(),
		}
	}

	handleSubmitButton = async () => {
		const { submitForm } = this.props
		const validated = requireDataKeys
			.map(key => this.data[key] !== undefined && this.data[key] !== '')
			.every(item => item === true)
		if (validated) {
			await submitForm(this.data)
			toast('Success', {
				position: toast.POSITION.BOTTOM_CENTER,
			})
			this.resetData()
			this.forceUpdate()
		} else {
			toast('Input all required fills', {
				position: toast.POSITION.BOTTOM_CENTER,
			})
		}
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
					require
				/>
				<SubmitButton onClick={this.handleSubmitButton} />
			</InputForm>
		)
	}

	render() {
		return (
			<Wrapper>
				{this.renderInputForm()}
				<ToastContainer />
			</Wrapper>
		)
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
