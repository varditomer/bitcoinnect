import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/global.scss'
import { AppHeader } from './components/AppHeader'
import { Home } from './views/Home'
import { ContactIndex } from './views/ContactIndex'
import { ContactDetails } from './views/ContactDetails'
import { ContactEdit } from './views/ContactEdit'
import { Statistic } from './views/Statistic'


function App() {
  return (
    <Router>
      <section className="main-app">

        <AppHeader />

        <div className="main-content">
          <Switch>
            <Route exact path='/contact/edit/:id?' component={ContactEdit} />
            <Route exact path='/contact/:id' component={ContactDetails} />
            <Route path='/contact' component={ContactIndex} />
            <Route path='/statistic' component={Statistic} />
            <Route path='/' component={Home} />
          </Switch>
        </div>


      </section>
    </Router>
  )
}

export default App
