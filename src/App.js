import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/global.scss'
import { AppHeader } from './components/AppHeader'
import { HomePage } from './views/HomePage'
import { ContactIndex } from './views/ContactIndex'
import { ContactDetails } from './views/ContactDetails'
import { ContactEdit } from './views/ContactEdit'
import { StatisticPage } from './views/StatisticPage'


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
            <Route path='/statistic' component={StatisticPage} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>


      </section>
    </Router>
  )
}

export default App
