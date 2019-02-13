import React, { Component } from 'react';
import './App.css'

let planet = require('./redditPlanet.png');
let turtle = require('./turtleSnoo.jpg');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="NewReddit">
          <div id="GetNewText">
          GET NEW REDDIT
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
          <img id="turtle" src= {turtle} alt="" />
          Breaddit
        </div>
      </div>
    );
  }
}

export default App;
