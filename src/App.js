import React from 'react';
import DashboardContainer from './components/Dashboard/DashboardContainer.js';
import NavBar from './components/NavBar';
import CoursesContainer from './components/CoursesPage/CoursesContainer.js';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <div className='App container'>
          <Switch>
            <Route exact path="/" component={DashboardContainer}/>
            <Route path="/courses" component={CoursesContainer}/>                  
          </Switch>
        </div>
      </Router>    
    </div>
  );
}

export default App;
