import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import actions from 'common/actions'
import selectors from 'common/selectors'
import { ToastContainer, toast } from 'react-toastify'
import ListComponent from './Components/ListComponent'
import FormComponent from './Components/FormComponent'
import DataControlComponent from './Components/DataControlComponent'

import { Wrapper } from './styled'

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
	Gender: 'Male',
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
		checkedAll: false,
		checkBoxs: [false, false, false, false, false],
		currentPage: 0,
	}

	componentDidMount() {
		const { data } = this.state
		if (!data.Uid) {
			this.resetData()
		}
	}

	resetData = () => {
		this.setState({
			data: {
				Uid: generateUid(),
				Title: 'Mr.',
				Gender: 'Male',
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
		this.setState({
			currentPage: data.selected,
		})
	}

	handleCheckAllBox = () => {
		const { checkedAll } = this.state
		if (checkedAll === true) {
			this.setState({
				checkedAll: false,
				checkBoxs: [false, false, false, false, false],
			})
		} else {
			this.setState({
				checkedAll: true,
				checkBoxs: [true, true, true, true, true],
			})
		}
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
			<FormComponent
				data={data}
				setDataField={this.setDataField}
				handleSubmitButton={this.handleSubmitButton}
			/>
		)
	}

	renderDataControl = () => {
		const { checkedAll } = this.state
		return (
			<DataControlComponent
				checkedAll={checkedAll}
				handleCheckBox={this.handleCheckBox}
				handlePageClick={this.handlePageClick}
				handleCheckAllBox={this.handleCheckAllBox}
			/>
		)
	}

	renderDataSet = () => {
		const { checkBoxs, currentPage } = this.state
		return (
			<ListComponent
				checkBoxs={checkBoxs}
				currentPage={currentPage}
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
				<ToastContainer autoClose={2000} />
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
