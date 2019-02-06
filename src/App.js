import React from 'react'
import { GlobalStyle } from 'styled'
import AppPage from 'pages/AppPage'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store} key={Math.random()}>
    <AppPage />
    <GlobalStyle />
  </Provider>
)

export default App
