import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        {/*In routes*/}
        <Switch>
          <Route path="/" exact component={props =>
            <div className="d-flex flex column flex-lg-row">
              <Navbar services={["Devdeas"]} pservices={["HPOTD", "Insight Weather"]}/>
              
            </div>
          }/>
        </Switch>

        {/*Alaways on bottom*/}
      </div>
    </Router>
  );
}

export default App;
