import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import '../App.css'

let planet = require('../redditPlanet.png');
let turtle = require('../turtleSnoo.jpg');

class Home extends Component {
  constructor(){
    super();
    this.state ={
      users: []
    }
  }
  // finish rendering dummy data on the front end
  componentDidMount = () =>{
    axios.get('/users/all')
        .then((res) =>{
          this.setState({
            users: res.data.data
          })
          console.log(this.state.users)
        })
        .catch(err =>{
          console.log('Data not getting through')
        })
  }


  render() {
    // console.log(this.state.users.data[0].name)
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
            {/*Used for spacing*/}
            {" "} 
            <Link to="/login">Login</Link>
            {" "} 
            or
            {" "}
            <Link to="/signup">Signup</Link> in seconds.
          </div>
        </div>
        <div id="search">
          <input id="searchInput" type="text" placeholder="search"/>
        </div>
        <ul>
                    {this.state.users.map( users => <li>{users.name}</li>)}

        </ul>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default Home;