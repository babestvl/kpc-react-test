import React, { PureComponent } from 'react'
import styled from 'styled-components'
import FieldComponent from 'common/FieldComponent'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'
import 'react-day-picker/lib/style.css'

const Form = styled.form``

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
		<Form className="DayPicker-Caption">
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
		</Form>
	)
}

class BirthdatePicker extends PureComponent {
	state = {
		month: fromMonth,
	}

	handleYearMonthChange = month => {
		this.setState({ month })
	}

	render() {
		const { month } = this.state
		const { className } = this.props
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
					placeholder="mm/dd/yyyy"
					format="MM/DD/YYYY"
					formatDate={formatDate}
					parseDate={parseDate}
					inputProps={{ readOnly: true }}
					dayPickerProps={dayPickerProps}
				/>
			</FieldComponent>
		)
	}
}

export default BirthdatePicker
