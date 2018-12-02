import React, { Component } from 'react'
import { Router } from '@reach/router'
import { I18nProvider } from '@lingui/react'

import { Home } from './pages'
import { catalogs } from './config/i18n'

class App extends Component {
  render() {
    return (
      <I18nProvider language="en" catalogs={catalogs}>
        <Router>
          <Home path="/" />
        </Router>
      </I18nProvider>
    )
  }
}

export default App
