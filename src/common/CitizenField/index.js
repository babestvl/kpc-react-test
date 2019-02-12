import React, { createRef } from 'react'
import FieldComponent from 'common/FieldComponent'
import styled from 'styled-components'

const CitizenInput = styled.input`
	text-align: center;
`

const Seperator = styled.span`
	margin: 0 4px;
	align-self: center;
	font-size: 24px;
`

const CitizenField = ({ className, data, setDataField }) => {
	let inputRefs = createRef()
	inputRefs = []

	const handleOnChange = ({ target }) => {
		const newState = data.CitizenID
		const targetID = +target.id
		if (target.value.length === target.maxLength) {
			const nextField = targetID + 1
			if (target.id !== '4') {
				inputRefs[nextField].focus()
			}
		} else if (target.value.length > target.maxLength) {
			target.value = target.value.slice(0, target.maxLength)
		}
		newState[targetID] = target.value
		setDataField('CitizenID', newState)
	}

	return (
		<FieldComponent className={className} title="CitizenID">
			<CitizenInput
				id="0"
				type="number"
				min="0"
				max="9"
				maxLength="1"
				onChange={handleOnChange}
				ref={input => {
					inputRefs[0] = input
				}}
				value={data.CitizenID[0]}
			/>
			<Seperator>-</Seperator>
			<CitizenInput
				id="1"
				min="0"
				max="9999"
				type="number"
				maxLength="4"
				onChange={handleOnChange}
				ref={input => {
					inputRefs[1] = input
				}}
				value={data.CitizenID[1]}
			/>
			<Seperator>-</Seperator>
			<CitizenInput
				id="2"
				min="0"
				max="99999"
				type="number"
				maxLength="5"
				onChange={handleOnChange}
				ref={input => {
					inputRefs[2] = input
				}}
				value={data.CitizenID[2]}
			/>
			<Seperator>-</Seperator>
			<CitizenInput
				id="3"
				min="0"
				max="99"
				type="number"
				maxLength="2"
				onChange={handleOnChange}
				ref={input => {
					inputRefs[3] = input
				}}
				value={data.CitizenID[3]}
			/>
			<Seperator>-</Seperator>
			<CitizenInput
				id="4"
				min="0"
				max="9"
				type="number"
				maxLength="1"
				onChange={handleOnChange}
				ref={input => {
					inputRefs[4] = input
				}}
				value={data.CitizenID[4]}
			/>
		</FieldComponent>
	)
}
export default CitizenField
