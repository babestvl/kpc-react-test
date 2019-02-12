import React, { PureComponent } from 'react'
import FieldComponent from 'common/FieldComponent'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'

const currentYear = new Date().getFullYear() - 50
const fromMonth = new Date(currentYear, 0)
const toMonth = new Date(currentYear + 50, 11)

const YearMonthForm = ({ date, localeUtils, onChange }) => {
	const months = localeUtils.getMonths()

	const years = []
	for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
		years.push(i)
	}

	const handleChange = e => {
		const { year, month } = e.target.form
		onChange(new Date(year.value, month.value))
	}

	return (
		<form className="DayPicker-Caption">
			<select name="month" onChange={handleChange} value={date.getMonth()}>
				{months.map((month, i) => (
					<option key={month} value={i}>
						{month}
					</option>
				))}
			</select>
			<select name="year" onChange={handleChange} value={date.getFullYear()}>
				{years.map(year => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
		</form>
	)
}

class BirthdatePicker extends PureComponent {
	state = {
		month: fromMonth,
	}

	handleYearMonthChange = month => {
		this.setState({ month })
	}

	handleOnDayChange = (day, modifiers, dayPickerInput) => {
		const { setDataField } = this.props
		setDataField('Birthday', dayPickerInput.state.value)
	}

	render() {
		const { month } = this.state
		const { className, data } = this.props
		const dayPickerProps = {
			month: month,
			fromMonth: fromMonth,
			toMonth: toMonth,
			captionElement: ({ date, localeUtils }) => (
				<YearMonthForm
					date={date}
					localeUtils={localeUtils}
					onChange={this.handleYearMonthChange}
				/>
			),
		}

		return (
			<FieldComponent className={className} title="Birthday" require>
				<DayPickerInput
					placeholder="mm/dd/yy"
					format="MM/DD/YY"
					formatDate={formatDate}
					parseDate={parseDate}
					inputProps={{ readOnly: true }}
					dayPickerProps={dayPickerProps}
					onDayChange={this.handleOnDayChange}
					value={data.Birthday}
				/>
			</FieldComponent>
		)
	}
}

export default BirthdatePicker
