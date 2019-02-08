import React from 'react'
import { connect } from 'react-redux'
import {
	Wrapper,
	TitleDropdown,
	NameInputField,
	BirthdayField,
	NationalityDropdown,
	CitizenInputField
} from './styled'

const AppPage = () => (
	<Wrapper>
		<TitleDropdown title="Title" require />
		<NameInputField title="Firstname" require />
		<NameInputField title="Lastname" require />
		<BirthdayField title="Birthday" />
		<NationalityDropdown title="Nationality" optionType="nationality" />
		<CitizenInputField />
	</Wrapper>
)

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(AppPage)
