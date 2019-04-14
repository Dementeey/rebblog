/**
 * App index
 */

import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from '../Home'
import About from '../../components/About'
import Header from '../../components/Header'
import NotFoundPage from '../../components/NotFoundPage'
import Post from '../Post'
import './index.css'
import history from '../../../helpers/history'

const App = () => (
  <div>
    <Header history={history} />

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/post/:id" component={Post} />

        <Route component={NotFoundPage} />
      </Switch>
    </main>
  </div>
)

export default withRouter(App)
