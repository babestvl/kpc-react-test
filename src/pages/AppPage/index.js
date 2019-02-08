import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import InputField from 'common/InputField'
import DropdownComponent from 'common/Dropdown'
import BirthdatePicker from 'common/BirthdatePicker'

const Wrapper = styled.div`
  display: grid
  grid-template-columns: repeat(3, 1fr);;
  grid-row-gap: 16px;

`

const AppPage = () => (
	<Wrapper>
		<DropdownComponent title="Title" require />
		<InputField title="Firstname" require />
		<InputField title="Lastname" require />
		<BirthdatePicker />
		<DropdownComponent title="Nationality" optionType="nationality" />
	</Wrapper>
)

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(AppPage)
