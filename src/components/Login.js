import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
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
                    <input type="text" placeholder="email" />
                </div>
                <div>
                    password:
                </div>
                <div>
                    <input type="password" placeholder="password" />
                </div>

                
            </div>
        )
    }
}

export default Login;