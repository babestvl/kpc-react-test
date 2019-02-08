import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TextInputField from 'common/TextInputField'
import DropdownComponent from 'common/Dropdown'

const Wrapper = styled.div`
  display: grid
  grid-template-columns: auto auto auto;
  grid-row-gap: 16px;

`

const AppPage = () => (
	<Wrapper>
		<DropdownComponent titleText="Title" require />
		<TextInputField titleText="Firstname" require />
		<TextInputField titleText="Lastname" require />
		<DropdownComponent
			titleText="Nationality"
			optionType="nationality"
			placeholder="--Please Select--"
		/>
	</Wrapper>
)

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(AppPage)
