import styled from 'styled-components'

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 48px repeat(5, 1fr);
	@media (min-width: 768px) {
		border: 0.5px solid #bbb;
	}
`

export const Header = styled.div`
	display: grid;
	grid-template-columns: 32px repeat(4, 1fr) 15%;
	border: 0.5px solid #ccc;
	background-color: #ccc;
	align-items: center;
`

export const HeaderContent = styled.span`
	padding: 8px;
`
