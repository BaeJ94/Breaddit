import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmail = (e) => {
        this.setState({
          email: e.target.value
        })
        console.log(this.state.email)
    }

    handlePass = (e) => {
        this.setState({
          password: e.target.value
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
                    email:
                </div>
                <div>
                    <input onChange={this.handleEmail} type="text" placeholder="email" />
                </div>
                <div>
                    password:
                </div>
                <div>
                    <input onChange={this.handlePass} type="password" placeholder="password" />
                </div>
                
            </div>
        )
    }
}

export default Login;