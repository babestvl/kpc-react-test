import React from 'react'
import { connect } from 'react-redux'
import selectors from 'common/selectors'
import ListItem from './ListItem'
import { Wrapper, Header, HeaderContent } from './styled'

const ListComponent = ({
	checkedUids,
	handleCheckBox,
	handleEditData,
	handleDeleteData,
	deleteData,
	showData,
}) => {
	console.log('RENDER')
	console.log(showData)
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
					checked={checkedUids[index]}
					handleCheckBox={handleCheckBox}
					handleEditData={handleEditData}
					handleDeleteData={handleDeleteData}
				/>
			))}
		</Wrapper>
	)
}

const mapStateToProps = state => ({
	showData: selectors.getShowData(state),
})

export default connect(mapStateToProps)(ListComponent)
