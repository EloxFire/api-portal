import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './assets/components/sub/Nav';
import Home from './assets/components/Home';
import Hpotd from './assets/components/Hpotd';
import InsightWeather from './assets/components/InsightWeather';


function App() {
  return (
    <Router>
      <div>
        {/*In routes*/}
        <Switch>
          <Route path="/" exact component={props =>
            <div>
              <Nav title="API PORTAL" subtitle="A website with multiples API"/>
              <Home/>
            </div>
          }/>

          <Route path="/home" component={props =>
            <div>
              <Nav title="API PORTAL" subtitle="A website with multiples API"/>
              <Home/>
            </div>
          }/>

          <Route path="/hpotd" component={props =>
            <div>
              <Nav title="HPOTD" subtitle="Hubble Photo Of The Day"/>
              <Hpotd/>
            </div>
          }/>

          <Route path="/insight_mars_weather" component={props =>
            <div>
              <Nav title="Mars Weather" subtitle="Insight Weather Telemetry Reports"/>
              <InsightWeather/>
            </div>
          }/>
        </Switch>

        {/*Alaways on bottom*/}
      </div>
    </Router>
  );
}

export default App;
