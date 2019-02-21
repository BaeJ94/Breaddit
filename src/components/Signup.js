import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Signup extends Component {
    render(){
        return(
            <div id="signupPage">
                {/*Temporary Navigation*/}
                <Link to="/">Home</Link>
                {" "}
                <Link to="/login">Login</Link>
                <h1>
                    Signup
                </h1>
                <br></br>
                <div>
                    username:
                </div>
                <div>
                    <input type="text" placeholder="username" />
                </div>
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
                <div>
                    verify:
                </div>
                <div>
                    <input type="text" placeholder="verify password" />
                </div>
            </div>
        )
    }
}

export default Signup;