import React from 'react'

import Header from './template/layout/Header'
import Aside from './template/layout/Aside'
import Footer from './template/layout/Footer'
import Main from './views/main'

import GlobalStyle from './styles/GlobalStyles'

const App = () => (
  <main className="App">
    <Header />
    <Aside />
    <Main />
    <Footer />
    <GlobalStyle />
  </main>
)

export default App
