import React from 'react'
import { connect } from 'react-redux'
import actions from 'common/actions'
import selectors from 'common/selectors'
import ListItem from './ListItem'
import { Wrapper, Header, HeaderContent } from './styled'

const ListComponent = ({
	checkBoxs,
	handleCheckBox,
	handleEditData,
	forms,
	currentPage,
	deleteData,
}) => {
	const start = Math.ceil(currentPage * 5)
	const end = start + 5
	const showData = forms.filter((item, index) => index >= start && index < end)

	return (
		<Wrapper>
			<Header>
				<span />
				<HeaderContent>Name</HeaderContent>
				<HeaderContent>Gender</HeaderContent>
				<HeaderContent>Mobile Phone</HeaderContent>
				<HeaderContent>Nationality</HeaderContent>
				<span />
			</Header>
			{showData.map((item, index) => (
				<ListItem
					index={index}
					key={item.Uid}
					data={item}
					checked={checkBoxs[index]}
					handleCheckBox={handleCheckBox}
					handleEditData={handleEditData}
					handleDeleteData={deleteData}
				/>
			))}
		</Wrapper>
	)
}

const mapStateToProps = state => ({
	forms: selectors.getForms(state),
})

const mapDispatchToProps = dispatch => ({
	deleteData: data => dispatch(actions.deleteForm(data)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ListComponent)
