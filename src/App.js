import React, { component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/home" component={Home}/>
        <Route path="/landingpage" component={LandingPage}/>
      </Switch>
    </div>
  );
}

export default App;
