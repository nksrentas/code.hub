import React from 'react';
import DashboardContainer from './components/Dashboard/DashboardContainer.js';
import NavBar from './components/NavBar';
import CoursesContainer from './components/CoursesPage/CoursesContainer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddCourse from './components/AddCourse/AddCourse.js';
import Details from './components/Details'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <div className='App container'>
          <Switch>
            <Route exact path='/' component={DashboardContainer} />
            <Route path='/courses' component={CoursesContainer} />
            <Route path='/new' component={AddCourse} />
            <Route path='/details' component={Details} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
