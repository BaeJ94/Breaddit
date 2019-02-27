import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import './App.css'



class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default App;
