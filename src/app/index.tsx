import { Router } from '@reach/router'
import { EISDIR } from 'constants'

export default () => (
  <Router>
    <Home path="/" />
    <Dash path="dashboard" />
  </Router>
)
