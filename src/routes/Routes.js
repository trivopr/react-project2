/* REACT CORE */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/* COMPONENT IMPORT */
import SideNav from '../components/SideNav'

/* Material-UI */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusTheme from '../components/fusTheme'

/* Import Views */
import Home from '../views/Home'
import Logos from '../views/Logos'

/* STYLES IMPORT */
import '../styles/materialize-grid.css'
import '../styles/App.css'

const Routes = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
        <div>
          <SideNav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/logos' component={Logos} />
            {/* <Route path='/posters' component={Posters} />
                        <Route path='/letterhead' component={Letterhead} />
                        <Route path='/share-a-story' component={Story} />
                        <Route path='/planning-guide' component={PlanningGuide} />
                        <Route path='/glossary' component={Glossary} />
                        <Route path='/services' component={Services} />
                        <Route path='/service-request-form' component={ServiceRequest} />
                        <Route path='/tutorial' component={Tutorial} />
                        <Route path='/poster-videos' component={PosterVideos} />
                        <Route component={NotFound} />                     */}
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default Routes
