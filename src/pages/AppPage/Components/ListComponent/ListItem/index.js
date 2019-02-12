import React from 'react'
import { Wrapper, CheckBox, Button, Item } from './styled'

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
