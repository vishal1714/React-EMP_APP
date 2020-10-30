import React from 'react';
import './App.css';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import NavBar from './components/NavBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';
import DeleteEmployee from './components/DeleteEmployee';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" exact component={EmployeeList} />
        <Route path="/add" exact component={AddEmployee} />
        <Route path="/update/:id" component={UpdateEmployee} />
        <Route path="/view/:id" component={ViewEmployee} />
        <Route path="/del/:id" component={DeleteEmployee} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
