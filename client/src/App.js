import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing';
import WryterApp from './pages/WryterApp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './Styles/main.scss';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/write' component={WryterApp} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
