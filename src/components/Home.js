import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import NewPostButton from './newPostButton';

let turtle = require('../turtleSnoo.jpg');

class Home extends Component {
  constructor(){
    super();
    this.state ={
      thing: []
    }
  }
 
  componentDidMount = () => {

    axios.get('/users/getAll')
      .then((res) =>{
        this.setState({
          thing: res.data.data
        })
      })
      .catch(err => {
        throw err;
      })
  }


  render() {
    // console.log(this.state.users.data[0].name)
    return (
      <div className="App">
        
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
          <div>
            <NewPostButton/>
          </div>
        </div>
        
        {this.state.thing.map(blah =>{return <div>{blah.score}<img className='breadPics' src={blah.pic} alt=''/> {blah.title} <div className='text'>{blah.text}</div><hr></hr></div> })}
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default Home;