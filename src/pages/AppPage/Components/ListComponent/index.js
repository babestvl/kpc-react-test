import React from 'react'
import styled from 'styled-components'
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
	grid-template-columns: 32px repeat(5, 1fr);
	border: 0.5px solid #ccc;
	background-color: lightblue;
	align-items: center;
`

const HeaderContent = styled.span`
	padding: 8px;
`

const ListComponent = ({
	showData,
	checkBoxs,
	handleCheckBox,
	handleEditData,
}) => {
	console.log('re-render')
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
				/>
			))}
		</Wrapper>
	)
}

export default ListComponent
