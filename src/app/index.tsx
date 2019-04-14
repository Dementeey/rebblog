import React from 'react'
import { RouteComponentProps, Router } from '@reach/router'
import Header from './components/Header'
import About from './elements/About'
import NotFoundPage from './elements/NotFoundPage'
import Home from './containers/Home'
import Post from './containers/Post'
import AdminPanelPage from './containers/AdminPanelPage'
import AdminPanelEditor from './containers/AdminPanelEditor'

interface IAppProps extends RouteComponentProps {
  name: string;
  site: string;
}

const App: React.FC<IAppProps> = () => (
  <div>
    <Header />

    <main>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Post path="/post/:id" />
        <AdminPanelPage path="/panel" />
        <AdminPanelEditor path="/panel/edit" />

        <NotFoundPage />
      </Router>
    </main>
  </div>
)

export default App
