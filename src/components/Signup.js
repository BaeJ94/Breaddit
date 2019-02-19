import React, {Component} from 'react';
import '.././App.css'

class Signup extends Component {
    render(){
        return(
            <div id="signupPage">
                <h1>
                    Signup
                </h1>
                <br></br>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="verify password" />
            </div>
        )
    }
}

export default Signup;