import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import selectors from 'common/selectors'
import ListItem from './ListItem'
import { Wrapper, Header, HeaderContent } from './styled'

class ListComponent extends PureComponent {
	handleOnToggle = (index, uid) => {
		const { handleCheckBox } = this.props
		handleCheckBox(index, uid)
		this.forceUpdate()
	}

	render() {
		const {
			checkedUids,
			handleEditData,
			handleDeleteData,
			showData,
		} = this.props
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
						handleCheckBox={this.handleOnToggle}
						handleEditData={handleEditData}
						handleDeleteData={handleDeleteData}
					/>
				))}
			</Wrapper>
		)
	}
}

const mapStateToProps = state => ({
	showData: selectors.getShowData(state),
})

export default connect(mapStateToProps)(ListComponent)
