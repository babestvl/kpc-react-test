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
		currentPage: 0,
		checkedAll: false,
		checkedUids: ['', '', '', '', ''],
	}

	componentDidMount() {
		const { data } = this.state
		if (!data.Uid) {
			this.resetData()
		}
		this.handlePage()
	}

	componentDidUpdate(prevProps, prevState) {
		const { currentPage } = this.state
		const { currentPage: prevCurrentPage } = prevState
		if (currentPage !== prevCurrentPage) {
			this.handlePage()
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
			checkedAll: false,
			checkedUids: ['', '', '', '', ''],
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
			this.handlePage()
		} else {
			toast('Please input all required fields', {
				position: toast.POSITION.BOTTOM_CENTER,
			})
		}
	}

	handlePage = () => {
		const { currentPage } = this.state
		const { forms, setShowData } = this.props
		const start = Math.ceil(currentPage * 5)
		const end = start + 5
		const newShowData = forms.filter(
			(item, index) => index >= start && index < end,
		)
		setShowData(newShowData)
	}

	handlePageClick = data => {
		this.setState({
			currentPage: data.selected,
			checkedAll: false,
			checkedUids: ['', '', '', '', ''],
		})
	}

	handleCheckAllBox = uids => {
		const { checkedAll } = this.state
		if (checkedAll === true) {
			this.setState({
				checkedAll: false,
				checkedUids: ['', '', '', '', ''],
			})
		} else {
			this.setState({
				checkedAll: true,
				checkedUids: uids,
			})
		}
	}

	handleCheckBox = (index, uid) => {
		const { checkedUids } = this.state
		const newBoxsState = checkedUids
		if (checkedUids[index] === '') {
			newBoxsState[index] = uid
		} else {
			newBoxsState[index] = ''
		}
		const newAllState = newBoxsState.every(item => item !== '')
		this.setState({
			checkedAll: newAllState,
			checkedUids: newBoxsState,
		})
	}

	handleEditData = data => {
		this.setState({
			data: data,
		})
		this.handlePage()
	}

	handleDeleteData = async uid => {
		const { deleteData } = this.props
		await deleteData(uid)
		this.resetData()
		this.handlePage()
	}

	handleDeleteFormsData = async () => {
		const { deleteForms } = this.props
		const { checkedUids } = this.state
		await deleteForms(checkedUids)
		this.resetData()
		this.handlePage()
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
				handlePageClick={this.handlePageClick}
				handleCheckAllBox={this.handleCheckAllBox}
				handleDeleteFormsData={this.handleDeleteFormsData}
			/>
		)
	}

	renderDataSet = () => {
		const { checkedUids } = this.state
		return (
			<ListComponent
				checkedUids={checkedUids}
				handleCheckBox={this.handleCheckBox}
				handleEditData={this.handleEditData}
				handleDeleteData={this.handleDeleteData}
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
	showData: selectors.getShowData(state),
})

const mapDispatchToProps = dispatch => ({
	submitForm: data => dispatch(actions.submitForm(data)),
	deleteData: data => dispatch(actions.deleteForm(data)),
	deleteForms: uids => dispatch(actions.deleteForms(uids)),
	setShowData: data => dispatch(actions.setShowData(data)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AppPage)
