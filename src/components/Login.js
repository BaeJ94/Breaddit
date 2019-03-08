import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (e) => {
        this.setState({
          username: e.target.value
        })
        console.log(this.state.username)
    }

    handlePass = (e) => {
        this.setState({
          password: e.target.value
        })
        
    }

    handleLogin = () =>{
        let login = this.state
        axios.post('/users/login', login)
            .then((res) =>{
                this.setState({
                    succes: 'the user ' + res.data + ' has been logged in!'
                })
            })
            .then(() =>{
                this.props.history.push("/");
            })
            .catch(err => {
                throw err;
            })
    }

    render(){
        return(
            <div id="loginPage">
                {/*Temporary Navigation*/}
                <Link to="/">Home</Link>
                {" "}
                <Link to="/signup">Signup</Link>
                <h1>
                    Login
                </h1>
                <br></br>
                <div>
                    username:
                </div>
                <div>
                    <input onChange={this.handleUsername} type="text" placeholder="email" />
                </div>
                <div>
                    password:
                </div>
                <div>
                    <input onChange={this.handlePass} type="text" placeholder="password" />
                </div>
                <br></br>
                <button onClick={this.handleLogin} type="submit">Login</button>
            </div>
        )
    }
}

export default Login;