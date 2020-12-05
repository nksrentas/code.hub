import React from 'react';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <div className='App container'>
          <Switch>
            <Route exact path="/" component={DashboardContainer}/>                  
          </Switch>
        </div>
      </Router>    
    </div>
  );
}

export default App;
