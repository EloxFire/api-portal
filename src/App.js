import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './assets/components/Home.jsx';

function App() {
  return (
    <Router>
      <div>
        {/*In routes*/}
        <Switch>
          <Route path="/" exact component={props =>
            <div>
              <Home/>
            </div>
          }/>

          <Route path="/home" component={props =>
            <div>
              <Home/>
            </div>
          }/>
        </Switch>

        {/*Alaways on bottom*/}
      </div>
    </Router>
  );
}

export default App;
