import React, { Component } from 'react';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import AskBreaddit from './subreddits/AskBreaddit';
import Bread from './subreddits/Bread';
import Breaddings from './subreddits/Breaddings';
import Breadime from './subreddits/Breadime';
import RollvsHero from './subreddits/RollvsHero';
import Users from './components/Users';
import All from './subreddits/All';
import Random from './subreddits/Random';
import './App.css'



class App extends Component {
  render() {
    return (
      <div>
        <Route component={Navbar}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/askBreaddit' component={AskBreaddit}/>
          <Route exact path='/bread' component={Bread}/>
          <Route exact path='/breaddings' component={Breaddings}/>
          <Route exact path='/breadime' component={Breadime}/>
          <Route exact path='/rollvsHero' component={RollvsHero}/>
          <Route exact path='/users' component={Users}/>
          <Route exact path='/all' component={All}/>
          <Route exact path='/random' component={Random}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
