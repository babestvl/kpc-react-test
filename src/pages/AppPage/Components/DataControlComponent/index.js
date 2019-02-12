import React from 'react'
import { connect } from 'react-redux'
import selectors from 'common/selectors'
import ReactPaginate from 'react-paginate'
import Button from 'common/Button'
import {
	DataControl,
	PaginateWrapper,
	ControlWrapper,
	SelectAllText,
	CheckBox,
} from './styled'
const DataControlComponent = ({
	forms,
	checkedAll,
	showData,
	handleCheckAllBox,
	handlePageClick,
	handleDeleteFormsData,
}) => {
	const pageCount = Math.ceil(forms.length / 5)
	const uids = showData.map(item => item.Uid)
	return (
		<DataControl>
			<ControlWrapper>
				<CheckBox
					type="checkbox"
					checked={checkedAll}
					onChange={() => handleCheckAllBox(uids)}
				/>
				<SelectAllText>Select All</SelectAllText>
				<Button text="DELETE" onClick={handleDeleteFormsData} />
			</ControlWrapper>
			<PaginateWrapper>
				<ReactPaginate
					previousLabel="Previous"
					nextLabel="Next"
					breakLabel="..."
					breakClassName="break-me"
					pageCount={pageCount}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={handlePageClick}
					containerClassName="pagination"
					subContainerClassName="pages pagination"
					activeClassName="active"
				/>
			</PaginateWrapper>
		</DataControl>
	)
}

const mapStateToProps = state => ({
	forms: selectors.getForms(state),
	showData: selectors.getShowData(state),
})

export default connect(mapStateToProps)(DataControlComponent)
