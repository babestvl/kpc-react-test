import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'
import actions from 'common/actions'
import selectors from 'common/selectors'
import { ToastContainer, toast } from 'react-toastify'
import ReactPaginate from 'react-paginate'
import Button from 'common/Button'
import ListComponent from './Components/ListComponent'
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
	ControlWrapper,
	SelectAllText,
	CheckBox,
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

const initData = {
	Uid: generateUid(),
	Title: 'Mr.',
	Gender: 'male',
	Firstname: '',
	Lastname: '',
	Birthday: '',
	CitizenID: ['', '', '', '', ''],
	Nationality: '',
	PassportNo: '',
	ExpectedSalary: '',
}

class AppPage extends PureComponent {
	state = {
		data: initData,
		showData: List(),
		checkedAll: false,
		checkBoxs: [false, false, false, false, false],
	}

	componentDidMount() {
		const { data } = this.state
		if (!data.Uid) {
			this.resetData()
		}
		this.initShowData()
	}

	initShowData = () => {
		const { forms } = this.props
		const showData = forms.filter((item, index) => index >= 0 && index < 5)
		this.setState({
			showData: showData,
		})
	}

	resetData = () => {
		this.setState({
			data: {
				Uid: generateUid(),
				Title: 'Mr.',
				Gender: 'male',
				Firstname: '',
				Lastname: '',
				Birthday: '',
				CitizenID: ['', '', '', '', ''],
				Nationality: '',
				PassportNo: '',
				ExpectedSalary: '',
			},
		})
	}

	setDataField = (fieldName, value) => {
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
		const validated = requireDataKeys
			.map(key => data[key] !== undefined && data[key] !== '')
			.every(item => item === true)
		if (validated) {
			console.log('submit', data)
			await submitForm(data)
			toast('Success', {
				position: toast.POSITION.BOTTOM_CENTER,
			})
			this.resetData()
		} else {
			toast('Please input all required fields', {
				position: toast.POSITION.BOTTOM_CENTER,
			})
		}
	}

	handlePageClick = data => {
		const { forms } = this.props
		const selected = data.selected
		const start = Math.ceil(selected * 5)
		const end = start + 5
		const showData = forms.filter(
			(item, index) => index >= start && index < end,
		)
		this.setState({
			showData: showData,
		})
	}

	handleCheckAllBox = () => {
		const { checkedAll } = this.state
		this.setState({
			checkedAll: !checkedAll,
			checkBoxs: [true, true, true, true, true],
		})
	}

	handleCheckBox = index => () => {
		const { checkBoxs } = this.state
		const newBoxsState = checkBoxs
		newBoxsState[index] = !checkBoxs[index]
		const newAllState = newBoxsState.every(item => item === true)
		this.setState({
			checkedAll: newAllState,
			checkBoxs: newBoxsState,
		})
	}

	handleEditData = data => {
		this.setState({
			data: data,
		})
	}

	renderInputForm = () => {
		const { data } = this.state

		return (
			<InputForm>
				<TitleDropdown
					title="Title"
					data={data}
					setDataField={this.setDataField}
					require
				/>
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
				<BirthdayField
					title="Birthday"
					data={data}
					setDataField={this.setDataField}
				/>
				<NationalityDropdown
					title="Nationality"
					optionType="nationality"
					data={data}
					setDataField={this.setDataField}
				/>
				<CitizenInputField data={data} setDataField={this.setDataField} />
				<GenderRadio data={data} setDataField={this.setDataField} />
				<PhoneNumberInputField data={data} setDataField={this.setDataField} />
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
		const { checkedAll } = this.state
		const pageCount = Math.ceil(forms.length / 5)

		return (
			<DataControl>
				<ControlWrapper>
					<CheckBox
						type="checkbox"
						checked={checkedAll}
						onChange={this.handleCheckAllBox}
					/>
					<SelectAllText>Select All</SelectAllText>
					<Button text="DELETE" />
				</ControlWrapper>
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
		const { showData, checkBoxs } = this.state
		return (
			<ListComponent
				showData={showData}
				checkBoxs={checkBoxs}
				handleCheckBox={this.handleCheckBox}
				handleEditData={this.handleEditData}
			/>
		)
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
