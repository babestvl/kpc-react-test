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

const CitizenField = ({ className, data }) => {
	let inputRefs = createRef()
	inputRefs = []

	const handleOnInput = e => {
		const { target } = e
		if (target.value.length === target.maxLength) {
			const id = inputRefs.map(field => field.value)
			data.CitizenID = id
			const nextField = +target.id + 1
			if (target.id !== '4') {
				inputRefs[nextField].focus()
			}
		} else if (target.value.length > target.maxLength) {
			target.value = target.value.slice(0, target.maxLength)
		}
	}

	return (
		<FieldComponent className={className} title="CitizenID">
			<CitizenInput
				id="0"
				type="number"
				min="0"
				max="9"
				maxLength="1"
				onInput={handleOnInput}
				ref={input => {
					inputRefs[0] = input
				}}
			/>
			<Seperator>-</Seperator>
			<CitizenInput
				id="1"
				min="0"
				max="9999"
				type="number"
				maxLength="4"
				onInput={handleOnInput}
				ref={input => {
					inputRefs[1] = input
				}}
			/>
			<Seperator>-</Seperator>
			<CitizenInput
				id="2"
				min="0"
				max="99999"
				type="number"
				maxLength="5"
				onInput={handleOnInput}
				ref={input => {
					inputRefs[2] = input
				}}
			/>
			<Seperator>-</Seperator>
			<CitizenInput
				id="3"
				min="0"
				max="99"
				type="number"
				maxLength="2"
				onInput={handleOnInput}
				ref={input => {
					inputRefs[3] = input
				}}
			/>
			<Seperator>-</Seperator>
			<CitizenInput
				id="4"
				min="0"
				max="9"
				type="number"
				maxLength="1"
				onInput={handleOnInput}
				ref={input => {
					inputRefs[4] = input
				}}
			/>
		</FieldComponent>
	)
}
export default CitizenField
