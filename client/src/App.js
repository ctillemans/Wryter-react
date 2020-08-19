import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import WryterApp from './pages/WryterApp';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/write' component={WryterApp} />
    </Switch>
  );
}

export default App;
