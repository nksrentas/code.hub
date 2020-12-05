import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Courses from './components/Courses';
import AddNewCourse from './components/AddNewCourse';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={DashboardContainer}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/new" component={AddNewCourse}/>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
