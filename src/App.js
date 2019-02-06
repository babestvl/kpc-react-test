import React from 'react'
import { GlobalStyle } from 'styled'
import AppPage from 'pages/AppPage'
import { Provider } from 'react-redux'
import store from 'store'

const App = () => (
  <Provider store={store} key={Math.random()}>
    <>
      <AppPage />
      <GlobalStyle />
    </>
  </Provider>
)

export default App
