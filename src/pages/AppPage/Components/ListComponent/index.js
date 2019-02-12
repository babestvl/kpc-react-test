import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import actions from 'common/actions'
import selectors from 'common/selectors'
import ListItem from './ListItem'

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 48px repeat(5, 1fr);
	@media (min-width: 768px) {
		border: 0.5px solid #bbb;
	}
`

const Header = styled.div`
	display: grid;
	grid-template-columns: 32px repeat(4, 1fr) 15%;
	border: 0.5px solid #ccc;
	background-color: lightblue;
	align-items: center;
`

const HeaderContent = styled.span`
	padding: 8px;
`

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
