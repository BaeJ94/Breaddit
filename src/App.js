import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import AskBreaddit from './subreddits/AskBreaddit';
import Bread from './subreddits/Bread';
import Breaddings from './subreddits/Breaddings';
import Breadime from './subreddits/Breadime';
import RollvsHero from './subreddits/RollvsHero';
import Users from './components/Users'
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
          <Route exact path='/askBreadit' component={AskBreaddit}/>
          <Route exact path='/bread' component={Bread}/>
          <Route exact path='/breaddings' component={Breaddings}/>
          <Route exact path='/breadime' component={Breadime}/>
          <Route exact path='/rollvsHero' component={RollvsHero}/>
          <Route exact path='/users' component={Users}/>
        </Switch>
      </div>
    );
  }
}

export default App;
