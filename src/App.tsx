import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GameDetailPage } from './pages/GamePage'
import { Home } from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:gameid" component={GameDetailPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
