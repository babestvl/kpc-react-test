import React, { PureComponent, createRef } from 'react'
import FieldComponent from 'common/FieldComponent'
import styled from 'styled-components'

const CitizenInput = styled.input`
	text-align: center;
`

const Seperator = styled.span`
	margin: 0 8px;
	align-self: center;
	font-size: 24px;
`

class CitizenField extends PureComponent {
	state = {
		citizenId: '',
	}

	inputRefs = createRef();

	handleOnInput = e => {
		const { target } = e
		if (target.value.length === target.maxLength) {
			const id = this.inputRefs.map(field => field.value)
			this.setState({ citizenId: id })
			const nextField = +target.id + 1
			if (target.id !== '4') {
				this.inputRefs[nextField].focus()
			}
		} else if (target.value.length > target.maxLength) {
			target.value = target.value.slice(0, target.maxLength)
		}
	}
	
	render() {
		const { className } = this.props
		this.inputRefs = []

		return (
			<FieldComponent className={className} title="CitizenID">
				<CitizenInput
					id="0"
					type="number"
					min="0"
					max="99"
					maxLength="1"
					onInput={this.handleOnInput}
					ref={input => {
						this.inputRefs[0] = input
					}}
				/>
				<Seperator>-</Seperator>
				<CitizenInput
					id="1"
					min="0"
					max="99999"
					type="number"
					maxLength="4"
					onInput={this.handleOnInput}
					ref={input => {
						this.inputRefs[1] = input
					}}
				/>
				<Seperator>-</Seperator>
				<CitizenInput
					id="2"
					min="0"
					max="999999"
					type="number"
					maxLength="5"
					onInput={this.handleOnInput}
					ref={input => {
						this.inputRefs[2] = input
					}}
				/>
				<Seperator>-</Seperator>
				<CitizenInput
					id="3"
					min="0"
					max="999"
					type="number"
					maxLength="2"
					onInput={this.handleOnInput}
					ref={input => {
						this.inputRefs[3] = input
					}}
				/>
				<Seperator>-</Seperator>
				<CitizenInput
					id="4"
					min="0"
					max="99"
					type="number"
					maxLength="1"
					onInput={this.handleOnInput}
					ref={input => {
						this.inputRefs[4] = input
					}}
				/>
			</FieldComponent>
		)
	}
}

export default CitizenField
