import React from 'react'
import FieldComponent from 'common/FieldComponent'
import PhoneInput from 'react-phone-number-input'

const PhoneNumberInput = ({ className, data }) => (
	<FieldComponent className={className} title="Mobile Phone" require>
		<PhoneInput
			value={data.MobilePhone}
			country="TH"
			displayInitialValueAsLocalNumber
			onChange={number => {
				data.MobilePhone = number
			}}
		/>
	</FieldComponent>
)

export default PhoneNumberInput
