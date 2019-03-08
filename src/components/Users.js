import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

class Users extends Component{
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

  render(){
      return(
          <div>
              <h1>All Users</h1>
              <br></br>
              {this.state.users.map( users => <h2>{users.name}</h2>)}
          </div>
      )
  }
}

export default Users;