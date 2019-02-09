import React, { PureComponent } from 'react'
import FieldComponent from 'common/FieldComponent'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

class PhoneNumberInput extends PureComponent {
	state = {
		data: '',
	}

	render() {
		const { data } = this.state
		const { className } = this.props

		return (
			<FieldComponent className={className} title="Mobile Phone" require>
				<PhoneInput
					value={data}
					country="TH"
					displayInitialValueAsLocalNumber
					onChange={number => this.setState({ data: number })}
				/>
			</FieldComponent>
		)
	}
}

export default PhoneNumberInput
