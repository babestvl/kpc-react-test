import React from 'react'
import FieldComponent from 'common/FieldComponent'
import styled from 'styled-components'
import Cleave from 'cleave.js/react'

const InputBox = styled(Cleave)`
	@media (max-width: 768px) {
		width: 160px;
	}
	width: 200px;
`

const EndingText = styled.span`
	margin-left: 8px;
	align-self: center;
`

const options = {
	salary: {
		numeral: true,
		numeralThousandsGroupStyle: 'thousand',
	},
	passport: {
		blocks: [8],
		uppercase: true,
	},
	text: {},
}

const InputField = ({
	className,
	data,
	title,
	inputType = 'text',
	require,
	endingText,
}) => {
	const fieldName = title.replace(' ', '')
	const handleOnChange = ({ target: { value } }) => {
		data[fieldName] = value
		console.log(data)
	}

	const value = data[fieldName]

	return (
		<FieldComponent className={className} title={title} require={require}>
			<InputBox
				value={value}
				onChange={handleOnChange}
				options={options[inputType]}
			/>
			<EndingText>{endingText || ''}</EndingText>
		</FieldComponent>
	)
}

export default InputField
