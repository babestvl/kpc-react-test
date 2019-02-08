import React from 'react'
import FieldComponent from 'common/FieldComponent'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

const BirthdatePicker = () => (
	<FieldComponent title="Birthday" require>
		<DayPickerInput placeholder="mm/dd/yy" format="MM/DD/YY" />
	</FieldComponent>
)

export default BirthdatePicker
