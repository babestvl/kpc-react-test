import React from 'react'
import { GlobalStyle } from 'client/styled'
import AppPage from 'pages/AppPage'
import { Provider } from 'react-redux'
import store from 'client/store'
import Storage from 'client/Storage'

const App = () => {
	Storage.init(store)
	return (
		<Provider store={store} key={Math.random()}>
			<>
				<AppPage />
				<GlobalStyle />
			</>
		</Provider>
	)
}

export default App
