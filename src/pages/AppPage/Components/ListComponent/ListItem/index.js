import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 32px repeat(5, 1fr);
	align-items: center;
`

const Item = styled.span`
	padding: 8px;
`

const CheckBox = styled.input`
	height: 16px;
	margin: 0 auto;
`

const Button = styled.button`
	border: none;
	font-size: 16px;
`

const ListItem = ({
	data,
	checked,
	handleCheckBox,
	index,
	handleEditData,
	handleDeleteData,
}) => {
	const firstname = data.Firstname
	const lastname = data.Lastname
	const gender = data.Gender
	const mobilePhone = data.MobilePhone
	const nationality = data.Nationality
	console.log(checked)

	return (
		<Wrapper>
			<CheckBox
				type="checkbox"
				checked={checked}
				onChange={handleCheckBox(index)}
			/>
			<Item>{`${firstname} ${lastname}`}</Item>
			<Item>{gender}</Item>
			<Item>{mobilePhone}</Item>
			<Item>{nationality}</Item>
			<div>
				<Button onClick={() => handleEditData(data)}>EDIT</Button>
				<span>/</span>
				<Button onClick={() => handleDeleteData(data.Uid)}>DELETE</Button>
			</div>
		</Wrapper>
	)
}

export default ListItem
