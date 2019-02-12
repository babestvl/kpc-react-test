import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import actions from 'common/actions'
import selectors from 'common/selectors'
import { ToastContainer, toast } from 'react-toastify'
import ReactPaginate from 'react-paginate'
import ListComponent from 'common/ListComponent'
import Button from 'common/Button'
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
	PaginateWrapper,
	DataControl,
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
	state = {
		data: {},
	}

	componentDidMount() {
		const { data } = this.state
		if (!data.Uid) {
			this.setState({ data: { Uid: generateUid() } })
		}
	}

	resetData = () => {
		this.setState({ data: { Uid: generateUid() } })
	}

	setDataField = (fieldName, value) => {
		console.log('Set', fieldName, value)
		this.setState(prevState => ({
			data: {
				...prevState.data,
				[fieldName]: value,
			},
		}))
	}

	handleSubmitButton = async () => {
		const { data } = this.state
		const { submitForm } = this.props
		console.log(data)
		const validated = requireDataKeys
			.map(key => data[key] !== undefined && data[key] !== '')
			.every(item => item === true)
		if (validated) {
			await submitForm(data)
			toast('Success', {
				position: toast.POSITION.BOTTOM_CENTER,
			})
			this.resetData()
		} else {
			toast('Input all required fills', {
				position: toast.POSITION.BOTTOM_CENTER,
			})
		}
	}

	renderInputForm = () => {
		const { data } = this.state

		return (
			<InputForm>
				<TitleDropdown title="Title" data={data} require />
				<NameInputField
					title="Firstname"
					data={data}
					setDataField={this.setDataField}
					require
				/>
				<NameInputField
					title="Lastname"
					data={data}
					setDataField={this.setDataField}
					require
				/>
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
					setDataField={this.setDataField}
					data={data}
				/>
				<SalaryInputField
					title="Expected Salary"
					inputType="salary"
					endingText="THB"
					data={data}
					setDataField={this.setDataField}
					require
				/>
				<SubmitButton onClick={this.handleSubmitButton} text="SUBMIT" />
			</InputForm>
		)
	}

	renderDataControl = () => {
		const { forms } = this.props
		const pageCount = Math.ceil(forms.length / 5)

		return (
			<DataControl>
				<div>
					<Button text="DELETE" />
				</div>
				<PaginateWrapper>
					<ReactPaginate
						previousLabel="previous"
						nextLabel="next"
						breakLabel="..."
						breakClassName="break-me"
						pageCount={pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={this.handlePageClick}
						containerClassName="pagination"
						subContainerClassName="pages pagination"
						activeClassName="active"
					/>
				</PaginateWrapper>
			</DataControl>
		)
	}

	renderDataSet = () => {
		return <ListComponent />
	}

	render() {
		return (
			<Wrapper>
				{this.renderInputForm()}
				{this.renderDataControl()}
				{this.renderDataSet()}
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
