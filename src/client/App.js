import React from 'react'
import { GlobalStyle } from 'client/styled'
import AppPage from 'pages/AppPage'
import { Provider } from 'react-redux'
import store from 'client/store'

const App = () => (
	<Provider store={store} key={Math.random()}>
		<>
			<AppPage />
			<GlobalStyle />
		</>
	</Provider>
)

export default App
