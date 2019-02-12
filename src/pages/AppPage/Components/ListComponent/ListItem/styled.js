import styled from 'styled-components'

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 32px repeat(4, 1fr) 15%;
	align-items: center;
`

export const Item = styled.span`
	padding: 8px;
`

export const CheckBox = styled.input`
	height: 16px;
	margin: 0 auto;
`

export const Button = styled.button`
	border: none;
	font-size: 12px;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`
