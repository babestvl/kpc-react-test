import styled from 'styled-components'

export const Wrapper = styled.div`
	@media (min-width: 768px) {
		margin: 16px;
	}
	display: grid;
	grid-template-rows: 1fr 36px 1fr;
	grid-row-gap: 16px;
`

export const DataControl = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 8px;
`

export const PaginateWrapper = styled.div`
	cursor: pointer;
	.pagination {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0 2px;
		padding: 4px 10px;
		border: 1px solid #17bebb;
		border-radius: 2px;
	}

	li.active {
		background-color: #17bebb;
	}

	a {
		outline: none;
	}
`

export const ControlWrapper = styled.div`
	display: flex;
	align-items: center;
`

export const SelectAllText = styled.span`
	margin-right: 16px;
	margin-left: 8px;
`

export const CheckBox = styled.input`
	height: 16px;
`
