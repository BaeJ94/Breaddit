import React, {Component} from 'react';
import '.././App.css'

class Login extends Component {
    render(){
        return(
            <div id="loginPage">
                <h1>
                    Login
                </h1>
                <br></br>
                <input type="text" placeholder="email" />>
                <input type="password" placeholder="password" />
            </div>
        )
    }
}

export default Login;