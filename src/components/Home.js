import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import '../App.css'

let planet = require('../redditPlanet.png');
let turtle = require('../turtleSnoo.jpg');

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="NewReddit">
          <div id="GetNewText">
          GET NEW BREADDIT
          </div>
          <div>
            <img id="planet" src={planet} alt=""/>
          </div>
        </div>
        <div id="nav">
          <select id="select">
            <option>SubBreaddits</option>
            <option>Announcements</option>
            <option>Art</option>
            <option>AskReddit</option>
          </select>
          Home - POPULAR - ALL - RANDOM - USERS | ASKBREADDIT - WORLDNEWS
        </div>
        <br></br>
        <div className="titleAndLogo">
          <div>
             <img id="turtle" src= {turtle} alt="" />
          </div>
          <div id="logoTitle">
          breaddit
          </div>
          <div id="loginSignup">
          Want to Join? 
          <Link to="/login">Login</Link> or
          <Link to="/signup">Signup</Link> in seconds.
          </div>
        </div>
        <div id="search">
          <input id="searchInput" type="text" placeholder="search"/>
        </div>

        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default Home;